import BaseLayout from "../shared/BaseLayout";
import { imageAltText } from "../shared/utils";

function Homepage() {
  return (
    <BaseLayout>
      <div className="container homepage">
        <div className="homepage__content">
          <div className="homepage__image-container">
            <img
              className="homepage__image"
              src="/src/assets/raudelFlores.jpeg"
              alt={imageAltText}
            />
          </div>
          <div className="homepage__text-container">
            <h1 className="homepage__title">Raudel Flores</h1>
            <p className="homepage__text">
              A front-end engineer located in the Chicagoland area, experienced
              in web development with React, Typescript, GraphQL, and Big
              Commerce. Determined to craft exceptional user experiences with a
              deep understanding of accessibility guidelines (WCAG).
            </p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Homepage;
