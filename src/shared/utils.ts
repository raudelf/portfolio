import { ProjectCardListProps } from "./types";

/*
 *
 * Contact URLs
 *
 */
export const githubLink = "https://github.com/raudelf";
export const linkedInLink = "https://www.linkedin.com/in/raudelf/";
export const contactEmail = "raudelf3@gmail.com";

/*
 *
 * Homepage Image Alt Text
 *
 */
export const imageAltText =
  "Raudel sitting on a rock at a high vantage point, giving two thumbs up. He is wearing a red long-sleeve shirt, gray shorts, and a black cap. Behind him, there is a scenic view of a vast landscape with greenery, trees, and a distant city under a partly cloudy sky.";

/*
 *
 * Homepage Image Alt Text
 *
 */
export const techStack: string[] = [
  "React",
  "Typescript",
  "React Context",
  "GraphQL",
  "Javascript",
  "CSS",
  "HTML",
  "NodeJS",
];

export const projects: ProjectCardListProps = {
  projects: [
    {
      clientLogo: "/src/assets/weathertechLogo.png",
      clientName: "WeatherTech",
      clientSummary:
        "An American manufacturer best known for their floormats and other automobile accessories headquartered in Bolingbrook, Illinois.",
      clientSiteUrl: "https://www.weathertech.com/",
      descriptionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nulla quis porttitor convallis. Nam at justo ac diam eleifend iaculis. Curabitur vestibulum lacinia hendrerit. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse quis cursus purus, id viverra ex.",
    },
    {
      clientLogo: "/src/assets/techoLogo.png",
      clientName: "Techo-Bloc",
      clientSummary:
        "A manufacturing company leading the hardscape industry that produces pavers that are durable, easily installed and trendy.",
      clientSiteUrl: "https://www.techo-bloc.com/",
      descriptionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nulla quis porttitor convallis. Nam at justo ac diam eleifend iaculis. Curabitur vestibulum lacinia hendrerit. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse quis cursus purus, id viverra ex.",
    },
    {
      clientLogo: "/src/assets/coburnsLogo.png",
      clientName: "Coburn Supply Company",
      clientSummary:
        "A family-owned distributor of commercial and residential plumbing, electrical, waterworks, and HVAC products and services.",
      clientSiteUrl: "https://www.coburns.com/",
      descriptionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nulla quis porttitor convallis. Nam at justo ac diam eleifend iaculis. Curabitur vestibulum lacinia hendrerit. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse quis cursus purus, id viverra ex.",
    },
  ],
};
