import About from "@/components/ui/About";
import Header from "@/components/ui/Header";
import Overall from "@/components/ui/Overall";

export default function Home() {
  return (
    <div className="w-full flex-col">
      <Header />
      <div id="overall" className="mt-20 scroll-mt-24">
        <Overall />
      </div>
      <div id="about" className="mt-4 scroll-mt-24">
        <About />
      </div>
    </div>
  );
}
