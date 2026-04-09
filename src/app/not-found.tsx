import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-md">
          <p className="text-xs tracking-[0.3em] uppercase text-muted font-medium mb-6">
            404
          </p>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold mb-4">
            頁面不存在
          </h1>
          <p className="text-muted text-[15px] leading-relaxed mb-8">
            您所尋找的頁面可能已被移除、名稱已更改，或暫時無法使用。
          </p>
          <Link href="/" className="btn-primary">
            返回首頁
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
