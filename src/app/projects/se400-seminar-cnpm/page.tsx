import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectDetailHeader from "@/components/ui/ProjectDetailHeader";
import type { Language } from "@/lib/i18n";
import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  Github,
  Layers3,
  Scale,
  ShieldAlert,
  Terminal,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type SeminarPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

type Figure = {
  src: string;
  alt: string;
  caption: Record<Language, string>;
};

const PROJECT = {
  title:
    "Machine Learning for Community Standards Violation Text Detection",
  subtitle:
    "Ứng dụng Machine Learning vào Nhận diện Văn bản Vi phạm Tiêu chuẩn Cộng đồng",
  period: "October 2025 - December 2025",
  githubUrl: "https://github.com/FakerHecker/SE400_Seminar_CNPM",
  tags: [
    "NLP",
    "Toxic Comment Detection",
    "TF-IDF",
    "CNN",
    "BiLSTM",
    "RoBERTa",
  ],
  figures: [
    {
      src: "/projects/se400-cnpm/system_architecture_3_module.svg",
      alt: "3-module toxic text detection system architecture",
      caption: {
        en: "Three-module system architecture for toxic text detection",
        vi: "Kiến trúc hệ thống 3 module phát hiện văn bản vi phạm",
      },
    },
    {
      src: "/projects/se400-cnpm/nlp_pipeline_and_preprocessing.svg",
      alt: "NLP pipeline and hybrid preprocessing diagram",
      caption: {
        en: "NLP moderation pipeline and hybrid preprocessing",
        vi: "Pipeline NLP tổng thể và Hybrid Preprocessing",
      },
    },
    {
      src: "/projects/se400-cnpm/roberta_architecture_and_comparison.svg",
      alt: "RoBERTa architecture and model comparison",
      caption: {
        en: "RoBERTa fine-tuning architecture and comparison table",
        vi: "Kiến trúc RoBERTa fine-tuning và bảng so sánh 3 module",
      },
    },
  ] satisfies Figure[],
};

const HIGHLIGHT_TERMS = [
  "TF-IDF",
  "Logistic Regression",
  "One-vs-Rest",
  "class_weight='balanced'",
  "Sigmoid",
  "6 output labels",
  "CNN 1D",
  "BiLSTM",
  "GloVe",
  "RoBERTa",
  "RoBERTa-base",
  "BPE",
  "[CLS]",
  "[SEP]",
  "Transformer Encoder",
  "Hybrid preprocessing",
  "syntax normalization",
  "augmentation",
  "hard negatives",
  "active learning",
  "Precision",
  "Recall",
  "F1",
  "AUC-ROC",
  "BCE",
  "Focal Loss",
  "bag-of-words",
  "OOV",
  "Static embeddings",
  "False Positives",
  "False Negatives",
  "FastAPI",
  "rule-based filter",
  "AI model",
  "Multi-label",
  "multi-label classification",
];

const CONTENT = {
  en: {
    eyebrow: "Project Detail",
    back: "Back to portfolio",
    roleLabel: "Role",
    role: "AI Engineer",
    highlightLabel: "Highlight",
    highlight:
      "End-to-end NLP moderation research with three model generations",
    overview:
      "A seminar project for automatic multi-label classification of comments that violate community standards. The work compares classical ML, deep learning, and transformer-based NLP pipelines on the Jigsaw Toxic Comment dataset.",
    codeLabel: "View Code",
    courseTitle: "Course & Team",
    readmeTitle: "README as Interface",
    datasetTitle: "Dataset",
    architectureTitle: "Three-Module Architecture",
    modulesTitle: "Model Modules",
    preprocessingTitle: "Hybrid Preprocessing",
    pipelineTitle: "NLP Pipeline",
    evaluationTitle: "Evaluation Strategy",
    resultsTitle: "Experiment Results",
    challengesTitle: "Challenges & Solutions",
    contributionTitle: "Main Contribution",
    setupTitle: "Install & Run",
    structureTitle: "Folder Structure",
    referencesTitle: "References",
    imagesTitle: "Project Diagrams",
  },
  vi: {
    eyebrow: "Chi tiết dự án",
    back: "Về portfolio",
    roleLabel: "Vai trò",
    role: "Kỹ sư AI",
    highlightLabel: "Điểm nhấn",
    highlight: "Nghiên cứu NLP moderation end-to-end qua ba thế hệ mô hình",
    overview:
      "Dự án seminar tự động phân loại multi-label các bình luận vi phạm tiêu chuẩn cộng đồng. Nhóm so sánh classical ML, deep learning và transformer-based NLP pipelines trên bộ dữ liệu Jigsaw Toxic Comment.",
    codeLabel: "Xem mã nguồn",
    courseTitle: "Môn học & Nhóm",
    readmeTitle: "README dạng giao diện",
    datasetTitle: "Bộ dữ liệu",
    architectureTitle: "Kiến trúc hệ thống 3 Module",
    modulesTitle: "Các Module mô hình",
    preprocessingTitle: "Hybrid Preprocessing",
    pipelineTitle: "NLP Pipeline tổng thể",
    evaluationTitle: "Chiến lược đánh giá",
    resultsTitle: "Kết quả thực nghiệm",
    challengesTitle: "Thách thức & Giải pháp",
    contributionTitle: "Đóng góp chính",
    setupTitle: "Cài đặt & Chạy thử",
    structureTitle: "Cấu trúc thư mục",
    referencesTitle: "Tài liệu tham khảo",
    imagesTitle: "Sơ đồ dự án",
  },
} satisfies Record<Language, Record<string, string>>;

const courseFacts = [
  ["Course", "SE400.Q11 - Seminar IT"],
  ["Supervisors", "Dr. Huynh Minh Duc, Dr. Nguyen Tan Toan"],
  ["Group", "Group 09 - University of Information Technology, VNU"],
  [
    "Members",
    "Nguyen Khanh Huy, Tran Dinh Phuong Linh, Dang Thi Ngoc Minh, Tran Bao Phu",
  ],
];

const generationRows = [
  ["Classical ML", "Module 1", "TF-IDF + Logistic Regression"],
  ["Deep Learning", "Module 2", "CNN 1D / BiLSTM + GloVe"],
  [
    "State-of-the-Art",
    "Module 3",
    "Fine-tuning RoBERTa + Hybrid Preprocessing",
  ],
];

const outputLabels = [
  ["toxic", "General toxic content"],
  ["severe_toxic", "Highly toxic content"],
  ["obscene", "Obscene language"],
  ["threat", "Threatening language"],
  ["insult", "Insulting language"],
  ["identity_hate", "Identity-based hate"],
];

const datasetStats = [
  ["Source", "Jigsaw Toxic Comment Classification Challenge - Kaggle"],
  ["Total comments", "~159,571"],
  ["Original source", "Wikipedia Talk Pages"],
  ["Language", "English"],
  ["Label type", "Multi-label binary"],
  ["Clean ratio", "~90%"],
  ["Toxic ratio", "~10% with at least one label"],
  ["Rarest labels", "threat, identity_hate (<1%)"],
];

const labelDistribution = [
  ["toxic", "~15,000"],
  ["obscene", "~8,500"],
  ["insult", "~8,000"],
  ["severe_toxic", "~1,600"],
  ["identity_hate", "~1,400"],
  ["threat", "~500"],
];

const modules = [
  {
    title: "Module 1 - Baseline",
    method: "TF-IDF + Logistic Regression",
    goal: "Build a fast word-frequency baseline for lightweight rough filtering on CPU.",
    pipeline: [
      "Lowercase, leet speak normalize, obfuscation decode, repeated char collapse",
      "Word n-grams (1,3) + lemmatization",
      "Character n-grams (3,5)",
      "Feature stacking into around 100,000 dimensions",
      "One-vs-Rest Logistic Regression with class_weight='balanced'",
      "Sigmoid threshold 0.5 for 6 output labels",
    ],
    results: ["Very fast CPU training", "AUC around 0.95+"],
    limits: [
      "Limited by bag-of-words representation",
      "Dependent on data quality and dictionaries",
      "Cannot capture deep semantic meaning",
    ],
  },
  {
    title: "Module 2 - Deep Learning",
    method: "CNN 1D / BiLSTM + GloVe",
    goal: "Move from sparse vectors to dense word embeddings so the model can capture word meaning better.",
    pipeline: [
      "GloVe 6B 300d pre-trained on 6 billion tokens",
      "CNN 1D uses kernel 3, 4, 5 + Global MaxPool + Dense + Dropout",
      "BiLSTM uses Spatial Dropout, Bidirectional LSTM 128 units, Dense, and Sigmoid",
      "CNN captures local patterns; BiLSTM learns long-range dependencies and longer sentences better",
    ],
    results: [
      "CNN converges in around 6 epochs, AUC ~0.97",
      "BiLSTM reaches AUC ~0.97+ but takes longer to train",
    ],
    limits: [
      "OOV issues with new slang because GloVe does not contain every new word",
      "Weak at sarcasm and nuanced tone",
      "Static embeddings: one word maps to one fixed vector",
      "CNN context is limited to 3-5 words; BiLSTM degrades on very long comments",
    ],
  },
  {
    title: "Module 3 - Fine-tuning Transformer",
    method: "RoBERTa",
    goal: "Use contextual embeddings for deeper moderation with stronger context, nuance, and sarcasm understanding.",
    pipeline: [
      "Hybrid preprocessing with syntax normalization and augmentation",
      "RoBERTa BPE tokenizer creates [CLS] token ... [SEP] sequences",
      "RoBERTa-base backbone with 12 Transformer Encoder layers",
      "[CLS] token pooling, Dropout 0.1, Linear 768 -> 6, Sigmoid 6 heads",
      "Data-centric strategy: hard negatives, slang examples, single-word tests, active learning",
    ],
    results: [
      "Base model roberta-base",
      "Learning rate 2e-5, batch size 32, 3-5 epochs",
      "AUC around 0.99",
    ],
    limits: [
      "Requires a strong GPU; README notes A100",
      "Fine-tuning takes around 12 hours",
    ],
  },
];

const preprocessingSteps = [
  [
    "Leet Speak Normalization",
    "@ -> a, 3 -> e, 0 -> o, $ -> s, 1 -> i, 5 -> s",
  ],
  ["Obfuscation Decoding", "f.u.c.k -> fuck, b1tch -> bitch, f*ck -> fuck"],
  [
    "Context-Aware Normalization",
    '"fucking good" -> "very good", while "fucking idiot" keeps its negative tone',
  ],
  ["Repeated Character Collapse", "coooooooool -> cool, lolllll -> lol"],
  [
    "Slang Dictionary Expansion",
    "kys -> kill yourself, stfu -> shut the f*** up, smh -> shaking my head",
  ],
  [
    "Emoji / Abbreviation Mapping",
    "angry emoji -> angry face, omg -> oh my god, brb -> be right back",
  ],
];

const pipelineSteps = [
  [
    "1",
    "Data Collection",
    "Twitter, Reddit, Kaggle, Wikipedia Talk Pages; clearly labeled toxic / non-toxic data",
  ],
  ["2", "Preprocessing", "Lowercase, normalization, typo repair, and violation dictionaries"],
  [
    "3",
    "Tokenization & Encoding",
    "TF-IDF for Module 1, GloVe for Module 2, RoBERTa BPE for Module 3",
  ],
  [
    "4",
    "Training & Evaluation",
    "Stratified split, Precision, Recall, F1, AUC-ROC, BCE / Focal Loss",
  ],
  [
    "5",
    "Validation & Optimization",
    "Overfitting checks, threshold tuning, hyperparameter search",
  ],
  [
    "6",
    "Inference / API",
    "FastAPI endpoint, Hybrid Pipeline, rule-based filter, AI model, output",
  ],
];

const metrics = [
  ["Accuracy", "Overall ratio of correct predictions", "Balanced data"],
  ["Precision", "Correctness when predicting a violation", "Avoid false flags"],
  ["Recall", "Ability to detect actual violations", "Avoid missed violations"],
  ["F1-score", "Balance between Precision and Recall", "Imbalanced data"],
  ["ROC-AUC", "Class separation across thresholds", "Model comparison"],
];

const losses = [
  ["Binary Cross-Entropy", "Baseline or relatively balanced data"],
  ["Class-weighted BCE", "Imbalanced data where toxic-class recall matters"],
  ["Focal Loss", "Extreme imbalance such as threat and identity_hate"],
];

const resultRows = [
  ["M1", "TF-IDF + LR", "~0.95", "Minutes", "No"],
  ["M2", "CNN 1D", "~0.97", "~4.5 hours", "Yes"],
  ["M2", "BiLSTM", "~0.97+", "~6 hours", "Yes"],
  ["M3", "RoBERTa fine-tuned", "~0.99", "~12 hours", "A100"],
];

const testCases = [
  [
    '"This is fucking amazing!"',
    "CLEAN",
    'Attention learns the supportive relation between "fucking" and "amazing"',
  ],
  [
    '"You\'re a killer at chess"',
    "CLEAN",
    'Distinguishes "killer" in a skill-related context',
  ],
  ['"Kys loser"', "THREAT", 'Detects "kys" from augmentation examples'],
  ['"f u c k this sh1t"', "TOXIC", 'Normalization converts it to "fuck this shit"'],
];

const challenges = [
  [
    "Imbalanced Data",
    "threat, identity_hate < 1%",
    "Class Weight / Focal Loss",
  ],
  [
    "Leet Speak & Obfuscation",
    "f.u.c.k, b1tch, ahole",
    "Regex normalization pipeline",
  ],
  [
    "Reversed context",
    "killer strategy vs serial killer",
    "Contextual Embedding with RoBERTa",
  ],
  [
    "Slang & abbreviations",
    "kys, stfu, fkn",
    "Slang dictionary + FastText subword",
  ],
  ["Sarcasm / implication", "Great job... NOT!", "RoBERTa + hard negatives"],
  [
    "New slang OOV",
    "GloVe does not contain new words",
    "FastText subword decomposition",
  ],
  [
    "Language & cultural bias",
    "Local slang can be mislabeled",
    "Diverse dataset + fairness check",
  ],
];

const setupCommands = [
  "Python >= 3.9",
  "CUDA recommended for Module 2 & 3",
  "git clone https://github.com/your-repo/toxic-comment-detection",
  "cd toxic-comment-detection",
  "pip install -r requirements.txt",
];

const requirements = [
  "torch>=2.0",
  "transformers>=4.35",
  "scikit-learn>=1.3",
  "nltk",
  "numpy",
  "pandas",
  "fastapi",
  "uvicorn",
];

const runCommands = [
  "python train_module1.py --data data/train.csv --model lr",
  "python train_module2.py --model cnn",
  "python train_module2.py --model bilstm --glove data/glove.6B.300d.txt",
  "python train_module3.py --base_model roberta-base --epochs 5",
  "uvicorn api:app --reload",
];

const folderStructure = [
  "data/train.csv, test.csv, glove.6B.300d.txt",
  "preprocessing/leet_speak.py, obfuscation.py, slang_dict.json, pipeline.py",
  "module1/tfidf_vectorizer.py, logistic_regression.py",
  "module2/cnn_model.py, bilstm_model.py",
  "module3/roberta_model.py, data_augmentation.py, active_learning.py",
  "evaluation/metrics.py, confusion_matrix.py",
  "api/app.py",
  "train_module1.py, train_module2.py, train_module3.py, requirements.txt, README.md",
];

const references = [
  [
    "Jigsaw Toxic Comment Classification Challenge",
    "https://www.kaggle.com/c/jigsaw-toxic-comment-classification-challenge",
  ],
  [
    "RoBERTa: A Robustly Optimized BERT Pretraining Approach",
    "https://arxiv.org/abs/1907.11692",
  ],
  [
    "GloVe: Global Vectors for Word Representation",
    "https://nlp.stanford.edu/projects/glove/",
  ],
  [
    "Convolutional Neural Networks for Sentence Classification",
    "https://arxiv.org/abs/1408.5882",
  ],
  ["Focal Loss for Dense Object Detection", "https://arxiv.org/abs/1708.02002"],
];

function getLocalizedData(lang: Language) {
  if (lang === "en") {
    return {
      courseFacts,
      generationRows,
      outputLabels,
      datasetStats,
      modules,
      preprocessingSteps,
      pipelineSteps,
      metrics,
      losses,
      resultRows,
      testCases,
      challenges,
      setupCommands,
      ui: {
        problemOverviewTitle: "Problem Overview",
        problemOverview:
          "The system classifies social-media comments that violate community standards. The task is multi-label classification, meaning one comment can belong to multiple labels at once.",
        outputLabelsTitle: "6 Output Labels",
        labelDistributionTitle: "Label Distribution",
        imbalanceNote:
          "The main challenge is severe data imbalance; threat and identity_hate are rare labels, making convergence harder.",
        metricHeaders: ["Metric", "Meaning", "When to prioritize"],
        tradeoffTitle: "Important Trade-off",
        tradeoff:
          "False Positives reduce user experience by flagging clean comments, so high Precision matters. False Negatives allow harmful content to pass through, so high Recall matters in risk-sensitive contexts.",
        lossHeaders: ["Loss Function", "When to use"],
        resultHeaders: ["Module", "Model", "AUC", "Training Time", "GPU"],
        testHeaders: ["Input", "Predicted Label", "Reason"],
        challengeHeaders: ["Challenge", "Description", "Solution"],
        contributionTitle: "Hybrid Preprocessing (Rules + Deep Learning)",
        contribution:
          "The main contribution is combining rules-based preprocessing with deep learning pipelines to handle sensitive words in safe contexts, ambiguous sentences, and keywords that appear without harmful intent. The expected result is a strong reduction in False Positives and improved overall reliability.",
        setupTitle: "Requirements & Setup",
        requirementsTitle: "Main Requirements",
        runTitle: "Run Each Module",
        resultsPanelTitle: "Results",
        limitationsPanelTitle: "Limitations",
      },
    };
  }

  return {
    courseFacts: [
      ["Môn học", "SE400.Q11 - Seminar IT"],
      ["GVHD", "TS. Huỳnh Minh Đức, TS. Nguyễn Tấn Toàn"],
      ["Nhóm", "Nhóm 09 - Đại học Công nghệ Thông tin, VNU"],
      [
        "Thành viên",
        "Nguyễn Khánh Huy, Trần Đình Phương Linh, Đặng Thị Ngọc Minh, Trần Bảo Phú",
      ],
    ],
    generationRows: [
      ["Classical ML", "Module 1", "TF-IDF + Logistic Regression"],
      ["Deep Learning", "Module 2", "CNN 1D / BiLSTM + GloVe"],
      [
        "State-of-the-Art",
        "Module 3",
        "Fine-tuning RoBERTa + Hybrid Preprocessing",
      ],
    ],
    outputLabels: [
      ["toxic", "Độc hại nói chung"],
      ["severe_toxic", "Rất độc hại"],
      ["obscene", "Tục tĩu"],
      ["threat", "Đe dọa"],
      ["insult", "Xúc phạm"],
      ["identity_hate", "Kỳ thị danh tính"],
    ],
    datasetStats: [
      ["Nguồn", "Jigsaw Toxic Comment Classification Challenge - Kaggle"],
      ["Tổng bình luận", "~159,571"],
      ["Nguồn gốc", "Wikipedia Talk Pages"],
      ["Ngôn ngữ", "Tiếng Anh"],
      ["Loại nhãn", "Multi-label binary"],
      ["Tỷ lệ Clean", "~90%"],
      ["Tỷ lệ Toxic", "~10% có ít nhất một nhãn"],
      ["Nhãn hiếm nhất", "threat, identity_hate (<1%)"],
    ],
    modules: [
      {
        title: "Module 1 - Baseline",
        method: "TF-IDF + Logistic Regression",
        goal:
          "Xây dựng baseline nhanh dựa trên tần suất từ, phù hợp để lọc thô và chạy CPU.",
        pipeline: [
          "Lowercase, leet speak normalize, obfuscation decode, repeated char collapse",
          "Word n-grams (1,3) + lemmatization",
          "Character n-grams (3,5)",
          "Feature stacking khoảng 100,000 chiều",
          "One-vs-Rest Logistic Regression với class_weight='balanced'",
          "Sigmoid threshold 0.5 cho 6 output labels",
        ],
        results: ["Huấn luyện rất nhanh trên CPU", "AUC khoảng 0.95+"],
        limits: [
          "Bị giới hạn bởi bag-of-words representation",
          "Phụ thuộc vào chất lượng dữ liệu và dictionaries",
          "Không nắm bắt được deep semantic meaning",
        ],
      },
      {
        title: "Module 2 - Deep Learning",
        method: "CNN 1D / BiLSTM + GloVe",
        goal:
          "Chuyển từ sparse vectors sang dense word embeddings để mô hình hiểu ý nghĩa từ tốt hơn.",
        pipeline: [
          "GloVe 6B 300d pre-trained trên 6 tỷ tokens",
          "CNN 1D dùng kernel 3, 4, 5 + Global MaxPool + Dense + Dropout",
          "BiLSTM dùng Spatial Dropout, Bidirectional LSTM 128 units, Dense và Sigmoid",
          "CNN bắt local patterns; BiLSTM học long-range dependencies và câu dài tốt hơn",
        ],
        results: [
          "CNN hội tụ trong khoảng 6 epochs, AUC ~0.97",
          "BiLSTM đạt AUC ~0.97+ nhưng huấn luyện lâu hơn",
        ],
        limits: [
          "OOV với từ lóng mới vì GloVe không chứa mọi từ mới",
          "Yếu hơn với sarcasm và nuanced tone",
          "Static embeddings: một từ chỉ ánh xạ tới một vector cố định",
          "CNN giới hạn ngữ cảnh 3-5 từ; BiLSTM giảm hiệu quả với comment quá dài",
        ],
      },
      {
        title: "Module 3 - Fine-tuning Transformer",
        method: "RoBERTa",
        goal:
          "Dùng contextual embeddings để kiểm duyệt sâu hơn, hiểu context, nuance và sarcasm tốt hơn.",
        pipeline: [
          "Hybrid preprocessing với syntax normalization và augmentation",
          "RoBERTa BPE tokenizer tạo chuỗi [CLS] token ... [SEP]",
          "RoBERTa-base backbone với 12 Transformer Encoder layers",
          "[CLS] token pooling, Dropout 0.1, Linear 768 -> 6, Sigmoid 6 heads",
          "Data-centric strategy: hard negatives, slang examples, single-word tests, active learning",
        ],
        results: [
          "Base model roberta-base",
          "Learning rate 2e-5, batch size 32, 3-5 epochs",
          "AUC khoảng 0.99",
        ],
        limits: [
          "Cần GPU mạnh; README ghi A100",
          "Fine-tuning mất khoảng 12 giờ",
        ],
      },
    ],
    preprocessingSteps: [
      ...preprocessingSteps.slice(0, 2),
      [
        "Context-Aware Normalization",
        '"fucking good" -> "very good", còn "fucking idiot" giữ sắc thái tiêu cực',
      ],
      ...preprocessingSteps.slice(3),
    ],
    pipelineSteps: [
      [
        "1",
        "Thu thập dữ liệu",
        "Twitter, Reddit, Kaggle, Wikipedia Talk Pages; dữ liệu có nhãn toxic / non-toxic rõ ràng",
      ],
      ["2", "Tiền xử lý", "Lowercase, chuẩn hóa, sửa lỗi gõ, từ điển vi phạm"],
      [
        "3",
        "Tokenization & Encoding",
        "TF-IDF cho Module 1, GloVe cho Module 2, RoBERTa BPE cho Module 3",
      ],
      [
        "4",
        "Huấn luyện & Đánh giá",
        "Stratified split, Precision, Recall, F1, AUC-ROC, BCE / Focal Loss",
      ],
      [
        "5",
        "Kiểm định & Tối ưu",
        "Kiểm tra overfitting, threshold tuning, hyperparameter search",
      ],
      [
        "6",
        "Inference / API",
        "FastAPI endpoint, Hybrid Pipeline, rule-based filter, AI model, output",
      ],
    ],
    metrics: [
      ["Accuracy", "Tỷ lệ dự đoán đúng tổng thể", "Dữ liệu cân bằng"],
      ["Precision", "Độ chính xác khi dự đoán vi phạm", "Tránh flag oan"],
      ["Recall", "Khả năng phát hiện đúng vi phạm", "Tránh bỏ sót vi phạm"],
      ["F1-score", "Cân bằng giữa Precision và Recall", "Dữ liệu mất cân bằng"],
      ["ROC-AUC", "Khả năng phân biệt lớp trên nhiều ngưỡng", "So sánh mô hình"],
    ],
    losses: [
      ["Binary Cross-Entropy", "Baseline hoặc dữ liệu tương đối cân bằng"],
      ["Class-weighted BCE", "Dữ liệu mất cân bằng, cần tăng recall lớp toxic"],
      ["Focal Loss", "Mất cân bằng cực mạnh như threat và identity_hate"],
    ],
    resultRows: [
      ["M1", "TF-IDF + LR", "~0.95", "Vài phút", "Không"],
      ["M2", "CNN 1D", "~0.97", "~4.5 giờ", "Có"],
      ["M2", "BiLSTM", "~0.97+", "~6 giờ", "Có"],
      ["M3", "RoBERTa fine-tuned", "~0.99", "~12 giờ", "A100"],
    ],
    testCases: [
      [
        '"This is fucking amazing!"',
        "CLEAN",
        'Attention học quan hệ bổ trợ giữa "fucking" và "amazing"',
      ],
      [
        '"You\'re a killer at chess"',
        "CLEAN",
        'Phân biệt "killer" trong ngữ cảnh kỹ năng',
      ],
      ['"Kys loser"', "THREAT", 'Nhận diện "kys" từ dữ liệu augmentation'],
      [
        '"f u c k this sh1t"',
        "TOXIC",
        'Normalization chuyển về "fuck this shit"',
      ],
    ],
    challenges: [
      ...challenges.slice(0, 2),
      ["Ngữ cảnh đảo nghĩa", "killer strategy vs serial killer", "Contextual Embedding với RoBERTa"],
      ["Tiếng lóng & viết tắt", "kys, stfu, fkn", "Slang dictionary + FastText subword"],
      ["Châm biếm / ẩn ý", "Great job... NOT!", "RoBERTa + hard negatives"],
      ["OOV từ lóng mới", "GloVe không có từ mới", "FastText subword decomposition"],
      ["Bias ngôn ngữ & văn hóa", "Gán nhãn sai tiếng lóng địa phương", "Diverse dataset + fairness check"],
    ],
    setupCommands: [
      "Python >= 3.9",
      "CUDA khuyến nghị cho Module 2 & 3",
      ...setupCommands.slice(2),
    ],
    ui: {
      problemOverviewTitle: "Tổng quan bài toán",
      problemOverview:
        "Hệ thống phân loại bình luận vi phạm tiêu chuẩn cộng đồng trên mạng xã hội. Bài toán là multi-label classification, nghĩa là một bình luận có thể thuộc nhiều nhãn cùng lúc.",
      outputLabelsTitle: "6 nhãn đầu ra",
      labelDistributionTitle: "Phân phối nhãn",
      imbalanceNote:
        "Thách thức chính là mất cân bằng dữ liệu nghiêm trọng; threat và identity_hate là hai nhãn hiếm, khiến mô hình khó hội tụ hơn.",
      metricHeaders: ["Metric", "Ý nghĩa", "Khi ưu tiên"],
      tradeoffTitle: "Trade-off quan trọng",
      tradeoff:
        "False Positives làm giảm trải nghiệm người dùng vì flag nhầm bình luận sạch, nên Precision cao rất quan trọng. False Negatives khiến nội dung độc hại lọt qua, nên Recall cao quan trọng trong các ngữ cảnh rủi ro.",
      lossHeaders: ["Hàm mất mát", "Khi dùng"],
      resultHeaders: ["Module", "Model", "AUC", "Training Time", "GPU"],
      testHeaders: ["Input", "Nhãn dự đoán", "Lý do"],
      challengeHeaders: ["Thách thức", "Mô tả", "Giải pháp"],
      contributionTitle: "Hybrid Preprocessing (Rules + Deep Learning)",
      contribution:
        "Đóng góp chính là kết hợp rules-based preprocessing với deep learning pipelines để xử lý từ nhạy cảm trong ngữ cảnh an toàn, câu đa nghĩa và từ khóa xuất hiện nhưng không mang ý xấu. Kết quả kỳ vọng là giảm False Positives mạnh và cải thiện độ tin cậy tổng thể.",
      setupTitle: "Yêu cầu & cài đặt",
      requirementsTitle: "Requirements chính",
      runTitle: "Chạy từng module",
      resultsPanelTitle: "Kết quả",
      limitationsPanelTitle: "Hạn chế",
    },
  };
}

export const metadata: Metadata = {
  title: "SE400 Seminar CNPM | Portfolio",
  description:
    "Machine learning seminar project for detecting comments that violate community standards using TF-IDF, CNN, BiLSTM, and RoBERTa.",
};

function normalizeLang(lang?: string): Language {
  return lang === "vi" ? "vi" : "en";
}

export default async function SeminarPage({ searchParams }: SeminarPageProps) {
  const query = await searchParams;
  const lang = normalizeLang(query.lang);
  const content = CONTENT[lang];
  const data = getLocalizedData(lang);
  const heroFigure = PROJECT.figures[0];

  return (
    <main className="min-h-dvh bg-background text-foreground">
      <ProjectDetailHeader initialLang={lang} />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 pt-28 md:px-10 lg:px-12">
        <header className="flex items-center justify-between gap-4">
          <Button asChild variant="ghost" className="h-10 px-3">
            <Link href={`/?lang=${lang}#projects`}>
              <ArrowLeft size={18} />
              <span className="text-sm">{content.back}</span>
            </Link>
          </Button>
          <Badge className="rounded-md bg-primary px-3 py-3 text-sm text-primary-foreground">
            {PROJECT.period}
          </Badge>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                {content.eyebrow}
              </p>
              <h1 className="text-3xl leading-tight font-bold md:text-5xl">
                {PROJECT.title}
              </h1>
              <p className="text-lg leading-8 font-semibold text-primary/85">
                {PROJECT.subtitle}
              </p>
              <p className="max-w-2xl text-base leading-8 text-foreground/75 md:text-lg">
                {content.overview}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {PROJECT.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="h-8 rounded-md border border-primary/15 bg-primary/5 px-3 text-primary"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <SummaryTile
                icon={<BrainCircuit size={18} />}
                label={content.roleLabel}
                value={content.role}
              />
              <SummaryTile
                icon={<ShieldAlert size={18} />}
                label={content.highlightLabel}
                value={content.highlight}
              />
            </div>

            <Button asChild className="h-11 px-5">
              <a href={PROJECT.githubUrl} target="_blank" rel="noreferrer">
                <Github size={18} />
                {content.codeLabel}
              </a>
            </Button>
          </div>

          <ProjectFigure
            figure={heroFigure}
            caption={heroFigure.caption[lang]}
          />
        </section>

        <Section title={content.courseTitle} icon={<BookOpen size={20} />}>
          <KeyValueGrid items={data.courseFacts} />
        </Section>

        <Section title={content.readmeTitle} icon={<FileText size={20} />}>
          <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
            <InfoPanel title={data.ui.problemOverviewTitle}>
              <p className="text-sm leading-7 text-foreground/75">
                <HighlightedText text={data.ui.problemOverview} />
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {data.generationRows.map(([generation, module, method]) => (
                  <div
                    key={module}
                    className="rounded-lg border border-border p-3"
                  >
                    <p className="text-sm font-bold text-primary">
                      {generation}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{module}</p>
                    <p className="mt-1 text-sm leading-6 text-foreground/65">
                      {method}
                    </p>
                  </div>
                ))}
              </div>
            </InfoPanel>
            <InfoPanel title={data.ui.outputLabelsTitle}>
              <div className="grid gap-2">
                {data.outputLabels.map(([label, description]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-3 rounded-lg border border-border px-3 py-2"
                  >
                    <code className="text-sm font-bold text-primary">
                      {label}
                    </code>
                    <span className="text-sm text-foreground/70">
                      <HighlightedText text={description} />
                    </span>
                  </div>
                ))}
              </div>
            </InfoPanel>
          </div>
        </Section>

        <Section title={content.datasetTitle} icon={<Database size={20} />}>
          <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
            <KeyValueGrid items={data.datasetStats} />
            <InfoPanel title={data.ui.labelDistributionTitle}>
              <div className="space-y-3">
                {labelDistribution.map(([label, value], index) => (
                  <div key={label}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="font-semibold">{label}</span>
                      <span className="text-foreground/65">{value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-primary/10">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${[100, 57, 53, 11, 9, 4][index]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-foreground/70">
                <HighlightedText text={data.ui.imbalanceNote} />
              </p>
            </InfoPanel>
          </div>
        </Section>

        <Section title={content.architectureTitle} icon={<Layers3 size={20} />}>
          <div className="grid gap-5 md:grid-cols-3">
            {data.generationRows.map(([generation, module, method]) => (
              <InfoPanel key={module} title={`${module} - ${generation}`}>
                <p className="text-sm leading-7 text-foreground/75">{method}</p>
              </InfoPanel>
            ))}
          </div>
        </Section>

        <Section title={content.modulesTitle} icon={<BrainCircuit size={20} />}>
          <div className="grid gap-5">
            {data.modules.map((module) => (
              <ModuleBlock
                key={module.title}
                module={module}
                resultsTitle={data.ui.resultsPanelTitle}
                limitationsTitle={data.ui.limitationsPanelTitle}
              />
            ))}
          </div>
        </Section>

        <Section title={content.preprocessingTitle} icon={<Code2 size={20} />}>
          <div className="grid gap-3 md:grid-cols-2">
            {data.preprocessingSteps.map(([title, detail]) => (
              <InfoPanel key={title} title={title}>
                <p className="text-sm leading-7 text-foreground/75">{detail}</p>
              </InfoPanel>
            ))}
          </div>
        </Section>

        <Section title={content.pipelineTitle} icon={<Layers3 size={20} />}>
          <div className="grid gap-3">
            {data.pipelineSteps.map(([step, title, detail]) => (
              <div
                key={step}
                className="grid gap-3 rounded-xl border border-border bg-card p-4 sm:grid-cols-[56px_180px_1fr]"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                  {step}
                </span>
                <p className="text-sm font-bold text-primary">{title}</p>
                <p className="text-sm leading-6 text-foreground/70">
                  <HighlightedText text={detail} />
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={content.evaluationTitle} icon={<Scale size={20} />}>
          <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
            <DataTable
              headers={data.ui.metricHeaders}
              rows={data.metrics}
            />
            <div className="space-y-5">
              <InfoPanel title={data.ui.tradeoffTitle}>
                <p className="text-sm leading-7 text-foreground/75">
                  <HighlightedText text={data.ui.tradeoff} />
                </p>
              </InfoPanel>
              <DataTable headers={data.ui.lossHeaders} rows={data.losses} />
            </div>
          </div>
        </Section>

        <Section title={content.resultsTitle} icon={<BarChart3 size={20} />}>
          <div className="grid gap-5">
            <DataTable
              headers={data.ui.resultHeaders}
              rows={data.resultRows}
            />
            <DataTable
              headers={data.ui.testHeaders}
              rows={data.testCases}
            />
          </div>
        </Section>

        <Section
          title={content.challengesTitle}
          icon={<ShieldAlert size={20} />}
        >
          <DataTable
            headers={data.ui.challengeHeaders}
            rows={data.challenges}
          />
        </Section>

        <Section
          title={content.contributionTitle}
          icon={<CheckCircle2 size={20} />}
        >
          <InfoPanel title={data.ui.contributionTitle}>
            <p className="text-sm leading-7 text-foreground/75">
              <HighlightedText text={data.ui.contribution} />
            </p>
          </InfoPanel>
        </Section>

        <Section title={content.setupTitle} icon={<Terminal size={20} />}>
          <div className="grid gap-5 lg:grid-cols-3">
            <CommandBlock title={data.ui.setupTitle} commands={data.setupCommands} />
            <CommandBlock title={data.ui.requirementsTitle} commands={requirements} />
            <CommandBlock title={data.ui.runTitle} commands={runCommands} />
          </div>
          <InfoPanel title="Inference API">
            <pre className="overflow-x-auto rounded-lg border border-border bg-foreground/3 p-4 text-sm leading-6">
              <code>{`POST http://localhost:8000/predict
{
  "text": "You are an amazing person!"
}

Response:
{
  "toxic": 0,
  "severe_toxic": 0,
  "obscene": 0,
  "threat": 0,
  "insult": 0,
  "identity_hate": 0,
  "label": "CLEAN"
}`}</code>
            </pre>
          </InfoPanel>
        </Section>

        <Section title={content.structureTitle} icon={<FileText size={20} />}>
          <div className="grid gap-3 md:grid-cols-2">
            {folderStructure.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-border bg-card p-3"
              >
                <code className="text-sm leading-6">{item}</code>
              </div>
            ))}
          </div>
        </Section>

        <Section title={content.imagesTitle} icon={<BarChart3 size={20} />}>
          <div className="grid gap-5 md:grid-cols-2">
            {PROJECT.figures.map((figure) => (
              <ProjectFigure
                key={figure.src}
                figure={figure}
                caption={figure.caption[lang]}
              />
            ))}
          </div>
        </Section>

        <Section title={content.referencesTitle} icon={<BookOpen size={20} />}>
          <div className="grid gap-3 md:grid-cols-2">
            {references.map(([title, href]) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-border bg-card p-4 text-sm font-semibold text-primary transition hover:border-primary/45 hover:shadow-sm"
              >
                {title}
              </a>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="space-y-5">
      <div className="flex items-center gap-3 text-primary">
        {icon}
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function SummaryTile({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
        {icon}
        {label}
      </div>
      <p className="text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}

function InfoPanel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-card p-5">
      <h3 className="mb-3 text-base font-bold text-primary">{title}</h3>
      {children}
    </section>
  );
}

function KeyValueGrid({ items }: { items: string[][] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="rounded-xl border border-border bg-card p-4"
        >
          <p className="text-sm font-bold text-primary">{label}</p>
          <p className="mt-2 text-sm leading-6 text-foreground/75">
            <HighlightedText text={value} />
          </p>
        </div>
      ))}
    </div>
  );
}

function ModuleBlock({
  module,
  resultsTitle,
  limitationsTitle,
}: {
  module: {
    title: string;
    method: string;
    goal: string;
    pipeline: string[];
    results: string[];
    limits: string[];
  };
  resultsTitle: string;
  limitationsTitle: string;
}) {
  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold">{module.title}</h3>
          <p className="mt-1 text-sm font-semibold text-primary">
            {module.method}
          </p>
        </div>
        <Badge className="rounded-md bg-primary text-primary-foreground">
          Multi-label
        </Badge>
      </div>
      <p className="mb-4 text-sm leading-7 text-foreground/75">
        <HighlightedText text={module.goal} />
      </p>
      <div className="grid gap-4 lg:grid-cols-3">
        <ListPanel title="Pipeline" items={module.pipeline} />
        <ListPanel title={resultsTitle} items={module.results} />
        <ListPanel title={limitationsTitle} items={module.limits} />
      </div>
    </article>
  );
}

function ListPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <h4 className="mb-3 text-sm font-bold text-primary">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-sm leading-6 text-foreground/70"
          >
            <CheckCircle2 className="mt-1 size-4 shrink-0 text-teal-600" />
            <span>
              <HighlightedText text={item} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card">
      <table className="w-full min-w-2xl border-collapse text-sm">
        <thead className="bg-primary/8 text-primary">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="border-r border-border px-4 py-3 text-left font-bold last:border-r-0"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")} className="border-t border-border">
              {row.map((cell, index) => (
                <td
                  key={`${cell}-${index}`}
                  className="border-r border-border px-4 py-3 leading-6 text-foreground/75 last:border-r-0"
                >
                  <HighlightedText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HighlightedText({ text }: { text: string }) {
  const terms = [...HIGHLIGHT_TERMS].sort((a, b) => b.length - a.length);
  const chunks: ReactNode[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    const match = terms.find((term) =>
      text
        .slice(cursor)
        .toLocaleLowerCase()
        .startsWith(term.toLocaleLowerCase()),
    );

    if (!match) {
      chunks.push(text[cursor]);
      cursor += 1;
      continue;
    }

    chunks.push(
      <strong key={`${match}-${cursor}`} className="font-bold text-foreground">
        {text.slice(cursor, cursor + match.length)}
      </strong>,
    );
    cursor += match.length;
  }

  return chunks;
}

function CommandBlock({
  title,
  commands,
}: {
  title: string;
  commands: string[];
}) {
  return (
    <InfoPanel title={title}>
      <div className="overflow-hidden rounded-lg border border-border bg-foreground/3">
        {commands.map((command) => (
          <code
            key={command}
            className="block border-b border-border px-4 py-3 text-sm leading-6 last:border-b-0"
          >
            {command}
          </code>
        ))}
      </div>
    </InfoPanel>
  );
}

function ProjectFigure({
  figure,
  caption,
}: {
  figure: Figure;
  caption: string;
}) {
  return (
    <figure className="mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <Image
        src={figure.src}
        alt={figure.alt}
        width={1360}
        height={1240}
        className="h-auto w-full object-contain"
      />
      <figcaption className="border-t border-border px-5 py-4 text-sm font-medium text-foreground/70">
        {caption}
      </figcaption>
    </figure>
  );
}
