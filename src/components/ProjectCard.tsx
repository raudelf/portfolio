import {
  Button,
  Dialog,
  DialogTrigger,
  Link,
  Modal,
} from "react-aria-components";
import { ProjectCardProps } from "../shared/types";
import CrossSVG from "../shared/svg/CrossSVG";

const ProjectCard = (props: ProjectCardProps) => {
  const {
    clientLogo,
    clientName,
    clientSummary,
    clientSiteUrl,
    descriptionText,
  } = props;

  return (
    <>
      <DialogTrigger>
        <Button className="projects-page__project-card">
          <div className="projects-page__project-img-container">
            <img
              className="projects-page__project-img"
              src={clientLogo}
              aria-describedby="client-name"
            />
          </div>
          <div className="projects-page__project-content">
            <h2 id="client-name" className="projects-page__project-client">
              {clientName}
            </h2>
            <p className="projects-page__project-text">{clientSummary}</p>
          </div>
        </Button>
        <Modal className="projects-page__modal">
          <Dialog>
            {({ close }) => (
              <div className="projects-page__modal-content">
                <Button
                  className="projects-page__close-modal-btn"
                  onPress={close}
                  aria-label="Close Modal"
                >
                  <CrossSVG className="projects-page__modal-svg" />
                </Button>
                <p className="projects-page__modal-text">{descriptionText}</p>

                <Link
                  href={clientSiteUrl}
                  target="__blank"
                  className="btn projects-page__modal-btn"
                >
                  Live Site
                  <span className="visually-hidden">, opens in a new tab</span>
                </Link>
              </div>
            )}
          </Dialog>
        </Modal>
      </DialogTrigger>
    </>
  );
};

export default ProjectCard;
