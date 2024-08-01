import { ProjectCardProps } from "../shared/types";

const ProjectCard = (props: ProjectCardProps) => {
  const {
    clientLogo,
    clientName,
    clientSummary,
    clientSiteUrl,
    descriptionText,
  } = props;

  return (
    <div className="project-card__container">
      <div className="project-card__img-container">
        <img
          className="project-card__img"
          src={clientLogo}
          aria-describedby="client-name"
        />
      </div>
      <div className="project-card__content">
        <a className="project-card__link" href={clientSiteUrl} target="_blank">
          <h2 id="client-name" className="project-card__client">
            {clientName}
          </h2>
          <span className="visually-hidden">, website opens in new tab</span>
        </a>
        <p className="project-card__text">{clientSummary}</p>
        <p className="project-card__text">{descriptionText}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
