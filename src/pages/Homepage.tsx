import ToolIcon from "../components/ToolIcon";
import BaseLayout from "../shared/BaseLayout";
import { imageAltText, techStack } from "../shared/utils";

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
              in React, Typescript, GraphQL, and BigCommerce web development.
              Determined to craft exceptional user experiences with a deep
              understanding of accessibility guidelines (WCAG).
            </p>
            <p>Oh yeah, and I like to hike!</p>
          </div>
        </div>
        <div className="homepage__tools-container">
          <h2 className="homepage__subtitle">Tools</h2>
          <ul className="homepage__tools-list">
            {techStack.map((tool, index) => {
              return (
                <li key={index} className="homepage__tool-item">
                  <ToolIcon tool={tool} />
                  {tool}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Homepage;
