import Footer from "../components/Footer";
import Header from "../components/Header";

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = (props: BaseLayoutProps) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main id="site-main" className="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
