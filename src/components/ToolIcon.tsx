import { Button, TooltipTrigger } from "react-aria-components";
import CSSSVG from "../shared/svg/CSSSVG";
import GraphQLSVG from "../shared/svg/GraphQLSVG";
import HTMLSVG from "../shared/svg/HTMLSVG";
import JavascriptSVG from "../shared/svg/JavascriptSVG";
import NodeSVG from "../shared/svg/NodeJSSVG";
import ReactSVG from "../shared/svg/ReactSVG";
import TypeScriptSVG from "../shared/svg/TypeScriptSVG";
import ToolTip from "../shared/ToolTip";

interface ToolTypes {
  tool: string;
  toolTip?: boolean;
}

const ToolIcon = (prop: ToolTypes) => {
  const { tool, toolTip } = prop;

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

  return !toolTip ? (
    renderComponent(tool)
  ) : (
    <>
      <TooltipTrigger>
        <Button>{renderComponent(tool)}</Button>
        <ToolTip>{tool}</ToolTip>
      </TooltipTrigger>
    </>
  );
};

export default ToolIcon;
