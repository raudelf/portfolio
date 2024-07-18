import CSSSVG from "../shared/svg/CSSSVG";
import GraphQLSVG from "../shared/svg/GraphQLSVG";
import HTMLSVG from "../shared/svg/HTMLSVG";
import JavascriptSVG from "../shared/svg/JavascriptSVG";
import NodeSVG from "../shared/svg/NodeJSSVG";
import ReactSVG from "../shared/svg/ReactSVG";
import TypeScriptSVG from "../shared/svg/TypeScriptSVG";
import { ToolTypes } from "../shared/types";

const ToolIcon = (prop: ToolTypes) => {
  const { tool } = prop;

  const renderComponent = (value: string) => {
    switch (value) {
      case "React":
        return <ReactSVG />;
      case "Typescript":
        return <TypeScriptSVG />;
      case "React Context":
        return <ReactSVG />;
      case "GraphQL":
        return <GraphQLSVG />;
      case "Javascript":
        return <JavascriptSVG />;
      case "CSS":
        return <CSSSVG />;
      case "HTML":
        return <HTMLSVG />;
      case "NodeJS":
        return <NodeSVG />;
      default:
        break;
    }
  };

  return <>{renderComponent(tool)}</>;
};

export default ToolIcon;
