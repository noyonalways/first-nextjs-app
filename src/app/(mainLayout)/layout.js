import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <>
        <Navbar />
        <main className="py-8">{children}</main>
        <Footer />
      </>
    </>
  );
}
