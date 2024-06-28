import BaseLayout from "../shared/BaseLayout";

function Homepage() {
  return (
    <BaseLayout>
      <div className="container homepage">
        <div className="homepage__content">
          <div className="homepage__image-container"></div>
          <div className="homepage__text-container">
            <h1 className="homepage__title"></h1>
            <p className="homepage__text"></p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Homepage;
