# 🛡️ Ứng dụng Machine Learning vào Nhận diện Văn bản Vi phạm Tiêu chuẩn Cộng đồng

> **Môn học:** SE400.Q11 — Seminar IT  
> **GVHD:** TS. Huỳnh Minh Đức · TS. Nguyễn Tấn Toàn  
> **Nhóm 09** | Đại học Công nghệ Thông tin – VNU  
> **Thành viên:** Nguyễn Khánh Huy (22520560) · Trần Đình Phương Linh (22520778) · Đặng Thị Ngọc Minh (22520857) · Trần Bảo Phú (22521104)

---

## 📋 Mục lục

- [Tổng quan dự án](#tổng-quan-dự-án)
- [Bộ dữ liệu](#bộ-dữ-liệu)
- [Kiến trúc hệ thống 3 Module](#kiến-trúc-hệ-thống-3-module)
- [Module 1 — Baseline (TF-IDF + Logistic Regression)](#module-1--baseline-tf-idf--logistic-regression)
- [Module 2 — Deep Learning (CNN / BiLSTM)](#module-2--deep-learning-cnn--bilstm)
- [Module 3 — Fine-tuning Transformer (RoBERTa)](#module-3--fine-tuning-transformer-roberta)
- [Chiến lược tiền xử lý](#chiến-lược-tiền-xử-lý)
- [NLP Pipeline tổng thể](#nlp-pipeline-tổng-thể)
- [Đánh giá mô hình](#đánh-giá-mô-hình)
- [Kết quả thực nghiệm](#kết-quả-thực-nghiệm)
- [Thách thức & Giải pháp](#thách-thức--giải-pháp)
- [Cài đặt & Chạy thử](#cài-đặt--chạy-thử)

---

## 🎯 Tổng quan dự án

Hệ thống tự động phân loại bình luận vi phạm tiêu chuẩn cộng đồng trên mạng xã hội, áp dụng cả ba thế hệ kỹ thuật ML/NLP:

| Thế hệ | Module | Phương pháp |
|--------|--------|-------------|
| Classical ML | Module 1 | TF-IDF + Logistic Regression |
| Deep Learning | Module 2 | CNN 1D / BiLSTM + GloVe |
| State-of-the-Art | Module 3 | Fine-tuning RoBERTa + Hybrid Preprocessing |

**Bài toán:** Multi-label classification — mỗi bình luận có thể thuộc nhiều nhãn cùng lúc.

**6 nhãn đầu ra:**
- `toxic` — Độc hại nói chung
- `severe_toxic` — Rất độc hại
- `obscene` — Tục tĩu
- `threat` — Đe dọa
- `insult` — Xúc phạm
- `identity_hate` — Kỳ thị danh tính

---

## 📊 Bộ dữ liệu

**Nguồn:** [Jigsaw Toxic Comment Classification Challenge](https://www.kaggle.com/c/jigsaw-toxic-comment-classification-challenge) — Kaggle

| Thông số | Giá trị |
|----------|---------|
| Tổng bình luận | ~159,571 |
| Nguồn gốc | Wikipedia Talk Pages |
| Ngôn ngữ | Tiếng Anh |
| Loại nhãn | Multi-label binary |
| Tỷ lệ Clean | ~90% |
| Tỷ lệ Toxic (ít nhất 1 nhãn) | ~10% |
| Nhãn hiếm nhất | `threat`, `identity_hate` (<1%) |

### Phân phối nhãn

```
toxic          ██████████████████ ~15,000
obscene        ████████████ ~8,500
insult         ███████████ ~8,000
severe_toxic   ██ ~1,600
identity_hate  █ ~1,400
threat         █ ~500
```

> ⚠️ **Thách thức chính:** Mất cân bằng dữ liệu nghiêm trọng — nhãn `threat` và `identity_hate` cực hiếm, gây khó khăn lớn cho việc hội tụ mô hình.

---

## 🏗️ Kiến trúc hệ thống 3 Module

```
┌─────────────────────────────────────────────────────────────────────┐
│                      RAW COMMENT TEXT (Input)                        │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                   HYBRID PREPROCESSING LAYER                         │
│  • Leet Speak normalization  (@→a, $→s, 1→i)                        │
│  • Obfuscation decode  (f*ck → fuck, b1tch → bitch)                 │
│  • Context-Aware Normalization  (fucking good → very good)           │
│  • Repeated character collapse  (coooool → cool)                     │
│  • Slang dictionary expansion  (kys, stfu, ...)                     │
└──────────────┬────────────────┬───────────────────────────────────┘
               │                │
    ┌──────────▼──────────┐  ┌──▼──────────────────────────────────┐
    │     MODULE 1        │  │  MODULE 2 / MODULE 3                │
    │  Classical ML       │  │  Embeddings-based                   │
    │  TF-IDF Vectorizer  │  │  (Word2Vec/GloVe / RoBERTa Tokenizer│
    └──────────┬──────────┘  └──────────────┬──────────────────────┘
               │                            │
    ┌──────────▼──────────┐     ┌───────────▼──────────────────────┐
    │ Logistic Regression │     │  CNN 1D  ││  BiLSTM  ││  RoBERTa │
    │  (One-vs-Rest)      │     └──────────┬────────────────────────┘
    └──────────┬──────────┘                │
               │                           │
    ┌──────────▼───────────────────────────▼──────────────────────┐
    │                  OUTPUT LAYER (Sigmoid × 6)                   │
    │  [toxic] [severe_toxic] [obscene] [threat] [insult] [id_hate] │
    └─────────────────────────────────────────────────────────────┘
```

**Vai trò từng module:**

| Module | Mục tiêu | Ưu điểm |
|--------|----------|---------|
| M1 — Baseline | Lọc thô nhanh | Nhanh, nhẹ, không cần GPU |
| M2 — Intermediate | Phân loại trung gian | Hiểu ngữ nghĩa, cấu trúc câu |
| M3 — State-of-the-Art | Kiểm duyệt sâu, chính xác | Hiểu ngữ cảnh, sắc thái, châm biếm |

---

## 🔷 Module 1 — Baseline (TF-IDF + Logistic Regression)

### Mục tiêu
Xây dựng một baseline nhanh, hiệu quả dựa trên tần suất từ.

### Pipeline chi tiết

```
Raw Text
   │
   ▼
[Tiền xử lý]
   ├─ Lowercase
   ├─ Leet Speak normalize
   ├─ Obfuscation decode
   └─ Repeated char collapse
   │
   ▼
[Feature Extraction — TF-IDF]
   ├─ Word N-grams (1,3) + Lemmatization   → Sparse matrix A
   └─ Character N-grams (3,5)              → Sparse matrix B
           │               │
           └───────┬───────┘
                   ▼
         [Feature Stacking]
         Concat(A, B) ≈ 100,000 dims
                   │
                   ▼
         [Logistic Regression]
         One-vs-Rest (6 classifiers)
         class_weight = 'balanced'
                   │
                   ▼
         [Sigmoid threshold = 0.5]
                   │
                   ▼
         [Multi-label output × 6]
```

### Kết quả
- Tốc độ huấn luyện: **cực nhanh** (CPU, phút)
- AUC: ~0.95+

### Hạn chế
- Giới hạn về ngữ cảnh (bag-of-words)
- Phụ thuộc vào dữ liệu / từ điển
- Không hiểu ý nghĩa ngữ nghĩa sâu

---

## 🔶 Module 2 — Deep Learning (CNN / BiLSTM)

### Động lực
- Chuyển từ **Sparse Vector (TF-IDF)** sang **Dense Vector (Word Embeddings)** để hiểu ý nghĩa từ
- Tận dụng **GloVe 6B – 300d** (pre-trained trên 6 tỷ từ)

### 2A — CNN 1D Architecture

```
Input Sequence (tokens)
        │
        ▼
[Embedding Layer — GloVe 300d]
        │
        ▼
┌───────┼───────┐
│       │       │
▼       ▼       ▼
Conv1D  Conv1D  Conv1D
kernel=3 kernel=4 kernel=5
│       │       │
▼       ▼       ▼
Global  Global  Global
MaxPool MaxPool MaxPool
│       │       │
└───────┼───────┘
        │
        ▼
   [Concat → Dense 256 → ReLU]
        │
        ▼
   [Dropout 0.5]
        │
        ▼
   [Dense 6 → Sigmoid]
        │
        ▼
   Multi-label Output
```

**Kết quả CNN:**
- Hội tụ: ~6 epochs
- AUC: ~0.97
- Thời gian huấn luyện: ~4.5 giờ (GPU)

### 2B — BiLSTM Architecture

```
Input Sequence (tokens)
        │
        ▼
[Embedding Layer — GloVe 300d]
        │
        ▼
[Spatial Dropout 0.2]
        │
        ▼
[Bidirectional LSTM — 128 units]
   ←←←←←←←←←←←
   →→→→→→→→→→→
        │
        ▼
[Dense 64 → ReLU]
        │
        ▼
[Dropout 0.3]
        │
        ▼
[Dense 6 → Sigmoid]
        │
        ▼
Multi-label Output
```

**Ưu điểm BiLSTM so với CNN:**
- Hiểu **quan hệ xa** giữa các từ
- Xử lý câu dài, phủ định tốt hơn
- Độ chính xác tổng thể cao hơn

### Hạn chế Module 2

| Hạn chế | Nguyên nhân |
|---------|------------|
| Vấn đề OOV | GloVe không chứa từ lóng mới → mất thông tin |
| Không hiểu châm biếm | Chỉ học trên từ vựng, không hiểu sắc thái |
| Embedding tĩnh | Một từ = 1 vector cố định, không phân biệt ngữ cảnh |
| Giới hạn ngữ cảnh | CNN: 3–5 từ; BiLSTM: suy giảm khi câu > 250 từ |

---

## 🔴 Module 3 — Fine-tuning Transformer (RoBERTa)

### Kiến trúc tổng thể

```
Input Raw Text
       │
       ▼
[Hybrid Preprocessing]
  Syntax normalization + Augmentation
       │
       ▼
[RoBERTa Tokenizer — BPE]
  → [CLS] token1 token2 ... [SEP]
       │
       ▼
┌──────────────────────────────────┐
│         RoBERTa-base Backbone     │
│                                  │
│  ┌────────────────────────────┐  │
│  │  Transformer Encoder × 12  │  │
│  │                            │  │
│  │  Layer 1: Multi-Head Attn  │  │
│  │          ↓ Feed Forward    │  │
│  │  Layer 2: Multi-Head Attn  │  │
│  │          ↓ Feed Forward    │  │
│  │       ...                  │  │
│  │  Layer 12: Multi-Head Attn │  │
│  │           ↓ Feed Forward   │  │
│  └────────────────────────────┘  │
│                                  │
│  Trained on: 160GB text data     │
│  Dynamic Masking (contextual)    │
└─────────────────┬────────────────┘
                  │
                  ▼
         [CLS] Token Pooling
                  │
                  ▼
            [Dropout 0.1]
                  │
                  ▼
          [Linear Layer 768→6]
                  │
                  ▼
          [Sigmoid × 6 heads]
                  │
                  ▼
     ┌────────────────────────┐
     │  toxic        0/1      │
     │  severe_toxic 0/1      │
     │  obscene      0/1      │
     │  threat       0/1      │
     │  insult       0/1      │
     │  identity_hate 0/1     │
     └────────────────────────┘
```

### Chiến lược dữ liệu (Data-Centric)

```
Original Dataset (159K)
        │
        ├─ Augmentation
        │   ├─ Hard Negatives (câu chứa từ mạnh nhưng clean)
        │   ├─ Slang examples (kys, stfu, wtf, ...)
        │   └─ Single Words (test OOV handling)
        │
        └─ Active Learning
            └─ Focus on Hard Examples (model uncertainty > 0.4)
```

### Huấn luyện

| Hyperparameter | Giá trị |
|----------------|---------|
| Base model | `roberta-base` |
| Learning rate | 2e-5 (warm-up) |
| Batch size | 32 |
| Epochs | 3–5 |
| Loss function | Binary Cross-Entropy (class-weighted) |
| Optimizer | AdamW |
| Scheduler | Linear warm-up + decay |

---

## 🔧 Chiến lược tiền xử lý

### Hybrid Preprocessing Pipeline (dùng ở cả 3 Module)

```
Raw Input Text
      │
      ├─── [Bước 1] Leet Speak Normalization
      │     @ → a   | 3 → e  | 0 → o
      │     $ → s   | 1 → i  | 5 → s
      │
      ├─── [Bước 2] Obfuscation Decoding
      │     f.u.c.k → fuck
      │     b1tch   → bitch
      │     f*ck    → fuck
      │
      ├─── [Bước 3] Context-Aware Normalization
      │     "fucking good" → "very good"  (tích cực)
      │     "fucking idiot" → giữ nguyên  (tiêu cực)
      │
      ├─── [Bước 4] Repeated Character Collapse
      │     coooooooool → cool
      │     lolllll     → lol
      │
      ├─── [Bước 5] Slang Dictionary Expansion
      │     kys  → kill yourself
      │     stfu → shut the f*** up
      │     smh  → shaking my head
      │
      └─── [Bước 6] Emoji / Abbreviation Mapping
            😠 → angry face
            omg → oh my god
            brb → be right back

            ↓
      Cleaned Text → Module 1 / 2 / 3
```

---

## 🔄 NLP Pipeline tổng thể

```
╔══════════════════════════════════════════════════════════════╗
║                    NLP TEXT MODERATION PIPELINE              ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  [1] Thu thập dữ liệu                                        ║
║      Twitter / Reddit / Kaggle / Wikipedia Talk Pages        ║
║      → Dữ liệu có nhãn rõ ràng (toxic / non-toxic)          ║
║                        ↓                                     ║
║  [2] Tiền xử lý (Preprocessing)                             ║
║      Lowercase → Chuẩn hóa → Sửa lỗi → Từ điển vi phạm     ║
║                        ↓                                     ║
║  [3] Tokenization & Encoding                                 ║
║      ├─ TF-IDF (Module 1)                                    ║
║      ├─ GloVe Embedding (Module 2)                           ║
║      └─ RoBERTa BPE Tokenizer (Module 3)                    ║
║                        ↓                                     ║
║  [4] Huấn luyện & Đánh giá                                  ║
║      Stratified Split (giữ cân bằng lớp)                    ║
║      Metrics: Precision · Recall · F1 · AUC-ROC             ║
║      Loss: Binary Cross-Entropy / Focal Loss                 ║
║                        ↓                                     ║
║  [5] Kiểm định & Tối ưu                                     ║
║      Kiểm tra overfitting → Threshold tuning                 ║
║      → Hyperparameter search                                 ║
║                        ↓                                     ║
║  [6] Inference / API                                         ║
║      FastAPI endpoint → Hybrid Pipeline                      ║
║      Rule-based filter → AI Model → Output                   ║
╚══════════════════════════════════════════════════════════════╝
```

---

## 📏 Đánh giá mô hình

### Các chỉ số chính

| Metric | Ý nghĩa | Khi nào ưu tiên |
|--------|---------|----------------|
| **Accuracy** | Tỷ lệ dự đoán đúng tổng thể | Dữ liệu cân bằng |
| **Precision** | Độ chính xác khi dự đoán "vi phạm" | Tránh flag oan |
| **Recall** | Khả năng phát hiện đúng vi phạm | Tránh bỏ sót vi phạm |
| **F1-score** | Trung hòa Precision & Recall | Dữ liệu mất cân bằng |
| **ROC-AUC** | Phân biệt 2 lớp trên nhiều ngưỡng | So sánh mô hình |

### Trade-off quan trọng

```
False Positive (Flag oan)         False Negative (Bỏ sót)
        │                                  │
        ▼                                  ▼
Giảm trải nghiệm người dùng    Vi phạm lọt qua → Nguy hiểm
→ Ưu tiên Precision cao        → Ưu tiên Recall cao
```

### Hàm mất mát

| Hàm | Khi dùng |
|-----|---------|
| Binary Cross-Entropy | Baseline, dữ liệu tương đối cân bằng |
| Class-weighted BCE | Có mất cân bằng, muốn tăng recall lớp toxic |
| Focal Loss | Imbalance cực mạnh (threat, identity_hate) |

---

## 🧪 Kết quả thực nghiệm

### So sánh 3 Module

| Module | Model | AUC | Training Time | GPU |
|--------|-------|-----|--------------|-----|
| M1 | TF-IDF + LR | ~0.95 | Phút (CPU) | Không |
| M2 | CNN 1D | ~0.97 | ~4.5 giờ | Cần |
| M2 | BiLSTM | ~0.97+ | ~6 giờ | Cần |
| M3 | RoBERTa fine-tuned | ~0.99 | ~12 giờ | Cần (A100) |

### Test Cases Module 3

| Input | Nhãn dự đoán | Lý do |
|-------|-------------|-------|
| "This is fucking amazing!" | CLEAN | Attention học mối quan hệ bổ trợ giữa "fucking" và "amazing" |
| "You're a killer at chess" | CLEAN | Phân biệt "killer" + "at" + danh từ kỹ năng |
| "Kys loser" | THREAT | Nhận diện "kys" từ dữ liệu augmentation |
| "f u c k this sh1t" | TOXIC | Normalization → "fuck this shit" |

---

## 🚧 Thách thức & Giải pháp

| Thách thức | Mô tả | Giải pháp |
|-----------|-------|---------|
| Imbalanced Data | `threat`, `identity_hate` < 1% | Class Weight / Focal Loss |
| Leet Speak & Obfuscation | `f.u.c.k`, `b1tch`, `ahole` | Regex normalization pipeline |
| Ngữ cảnh đảo nghĩa | "killer strategy" vs "serial killer" | Contextual Embedding (RoBERTa) |
| Tiếng lóng & viết tắt | `kys`, `stfu`, `fkn` | Slang dictionary + FastText subword |
| Châm biếm / ẩn ý | "Great job... NOT!" | RoBERTa + augmentation hard negatives |
| OOV từ lóng mới | GloVe không có từ mới | FastText subword decomposition |
| Bias ngôn ngữ & văn hóa | Gán nhãn sai tiếng lóng địa phương | Diverse dataset + fairness check |

---

## 💡 Đóng góp chính

### Hybrid Preprocessing (Rules + Deep Learning)

Kết hợp Rules-based vào pipeline Deep Learning, giải quyết các điểm yếu cố hữu của mô hình NLP thuần:
- Từ nhạy cảm trong ngữ cảnh an toàn
- Câu đa nghĩa (ambiguous)
- Từ khóa xuất hiện nhưng không mang ý xấu

> **Kết quả:** Giảm False Positive mạnh, cải thiện độ tin cậy tổng thể.

---

## 🚀 Cài đặt & Chạy thử

### Yêu cầu

```bash
Python >= 3.9
CUDA (khuyến nghị cho Module 2 & 3)
```

### Cài đặt

```bash
git clone https://github.com/your-repo/toxic-comment-detection
cd toxic-comment-detection
pip install -r requirements.txt
```

### Requirements chính

```
torch>=2.0
transformers>=4.35
scikit-learn>=1.3
nltk
numpy
pandas
fastapi
uvicorn
```

### Chạy từng Module

```bash
# Module 1 — Classical ML
python train_module1.py --data data/train.csv --model lr

# Module 2 — Deep Learning
python train_module2.py --model cnn     # hoặc --model bilstm
python train_module2.py --model bilstm --glove data/glove.6B.300d.txt

# Module 3 — RoBERTa Fine-tuning
python train_module3.py --base_model roberta-base --epochs 5

# API Inference
uvicorn api:app --reload
```

### Inference API

```python
import requests

response = requests.post("http://localhost:8000/predict", json={
    "text": "You are an amazing person!"
})

# Response:
# {
#   "toxic": 0,
#   "severe_toxic": 0,
#   "obscene": 0,
#   "threat": 0,
#   "insult": 0,
#   "identity_hate": 0,
#   "label": "CLEAN"
# }
```

---

## 📁 Cấu trúc thư mục

```
toxic-comment-detection/
├── data/
│   ├── train.csv
│   ├── test.csv
│   └── glove.6B.300d.txt
│
├── preprocessing/
│   ├── leet_speak.py
│   ├── obfuscation.py
│   ├── slang_dict.json
│   └── pipeline.py
│
├── module1/
│   ├── tfidf_vectorizer.py
│   └── logistic_regression.py
│
├── module2/
│   ├── cnn_model.py
│   └── bilstm_model.py
│
├── module3/
│   ├── roberta_model.py
│   ├── data_augmentation.py
│   └── active_learning.py
│
├── evaluation/
│   ├── metrics.py
│   └── confusion_matrix.py
│
├── api/
│   └── app.py
│
├── train_module1.py
├── train_module2.py
├── train_module3.py
├── requirements.txt
└── README.md
```

---

## 📚 Tài liệu tham khảo

- Jigsaw/Conversation AI — [Toxic Comment Classification Challenge](https://www.kaggle.com/c/jigsaw-toxic-comment-classification-challenge)
- Liu et al. (2019) — [RoBERTa: A Robustly Optimized BERT Pretraining Approach](https://arxiv.org/abs/1907.11692)
- Pennington et al. (2014) — [GloVe: Global Vectors for Word Representation](https://nlp.stanford.edu/projects/glove/)
- Yoon Kim (2014) — [Convolutional Neural Networks for Sentence Classification](https://arxiv.org/abs/1408.5882)
- Lin et al. (2017) — [Focal Loss for Dense Object Detection](https://arxiv.org/abs/1708.02002)

---

*Đại học Công nghệ Thông tin – VNU · SE400.Q11 · 2025*
