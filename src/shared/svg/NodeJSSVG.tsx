import { SVGProps } from "../SVGProps";
import classNames from "classnames";

/**
 * Node Icon SVG
 *
 * @returns
 */

function NodeSVG({ className, ...rest }: SVGProps) {
  return (
    <svg
      className={classNames("icon icon-node", className)}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      focusable="false"
      {...rest}
    >
      <path
        fill="#393"
        d="M15.997 32c-0.428 0-0.855-0.112-1.229-0.329l-3.915-2.316c-0.584-0.327-0.299-0.443-0.107-0.511 0.78-0.271 0.937-0.333 1.771-0.805 0.087-0.049 0.201-0.031 0.291 0.023l3.008 1.785c0.109 0.060 0.263 0.060 0.363 0l11.727-6.768c0.109-0.063 0.179-0.188 0.179-0.317v-13.533c0-0.132-0.071-0.256-0.183-0.323l-11.721-6.763c-0.108-0.063-0.252-0.063-0.361 0l-11.719 6.764c-0.113 0.065-0.185 0.193-0.185 0.321v13.533c0 0.129 0.072 0.252 0.185 0.313l3.212 1.856c1.743 0.872 2.811-0.155 2.811-1.187v-13.361c0-0.189 0.152-0.337 0.341-0.337h1.487c0.185 0 0.34 0.149 0.34 0.337v13.361c0 2.327-1.267 3.66-3.472 3.66-0.677 0-1.212 0-2.701-0.735l-3.077-1.769c-0.76-0.439-1.229-1.26-1.229-2.139v-13.533c0-0.879 0.471-1.7 1.229-2.137l11.727-6.776c0.743-0.42 1.728-0.42 2.464 0l11.725 6.776c0.76 0.439 1.232 1.259 1.232 2.137v13.533c0 0.879-0.472 1.697-1.232 2.139l-11.725 6.771c-0.373 0.217-0.799 0.329-1.233 0.329zM25.465 18.657c0-2.533-1.712-3.208-5.316-3.684-3.641-0.481-4.012-0.731-4.012-1.583 0-0.704 0.313-1.644 3.011-1.644 2.409 0 3.297 0.519 3.663 2.143 0.032 0.153 0.172 0.265 0.329 0.265h1.521c0.095 0 0.184-0.041 0.248-0.108 0.064-0.072 0.099-0.164 0.089-0.261-0.236-2.797-2.095-4.101-5.851-4.101-3.344 0-5.339 1.411-5.339 3.777 0 2.567 1.984 3.276 5.193 3.593 3.84 0.376 4.137 0.937 4.137 1.692 0 1.311-1.052 1.869-3.523 1.869-3.103 0-3.785-0.779-4.015-2.323-0.027-0.165-0.168-0.287-0.337-0.287h-1.516c-0.188 0-0.339 0.149-0.339 0.337 0 1.976 1.075 4.331 6.207 4.331 3.717 0.001 5.848-1.461 5.848-4.017z"
      ></path>
    </svg>
  );
}

export default NodeSVG;
