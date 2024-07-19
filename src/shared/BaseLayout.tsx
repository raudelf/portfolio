import Footer from "../components/Footer";
import Header from "../components/Header";
import { BaseLayoutProps } from "./types";

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
