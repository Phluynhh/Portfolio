import About from "@/components/ui/About";
import Header from "@/components/ui/Header";
import Overall from "@/components/ui/Overall";

export default function Home() {
  return (
    <div className="w-full flex-col">
      <Header />
      <div className="mt-20">
        <Overall />
      </div>
      <div className="mt-4">
        <About />
      </div>
    </div>
  );
}
