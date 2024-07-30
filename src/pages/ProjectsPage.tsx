import ProjectCard from "../components/ProjectCard";
import BaseLayout from "../shared/BaseLayout";
import { projects } from "../shared/utils";

const ProjectsPage = () => {
  return (
    <BaseLayout>
      <div className="container projects-page">
        <h1 className="projects-page__title">Projects</h1>

        <ul className="projects-page__list">
          {projects.projects.map((project, index) => {
            return (
              <li key={index} className="projects-page__list-item">
                <ProjectCard
                  clientLogo={project.clientLogo}
                  clientName={project.clientName}
                  clientSummary={project.clientSummary}
                  clientSiteUrl={project.clientSiteUrl}
                  descriptionText={project.descriptionText}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </BaseLayout>
  );
};

export default ProjectsPage;
