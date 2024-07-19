import { SVGProps } from "../SVGProps";
import classNames from "classnames";

/**
 * CSS Icon SVG
 *
 * @returns
 */

function CSSSVG({ className, ...rest }: SVGProps) {
  return (
    <svg
      className={classNames("icon icon-css", className)}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      focusable="false"
      {...rest}
    >
      <path
        fill="#1572b6"
        d="M2 0h28l-2.547 28.751-11.484 3.249-11.42-3.251zM24.787 5.884l-17.573-0.004 0.284 3.496 13.5 0.003-0.34 3.621h-8.853l0.32 3.431h8.243l-0.488 4.697-3.88 1.072-3.941-1.080-0.251-2.813h-3.48l0.387 5.14 7.287 2.271 7.164-2.040z"
      ></path>
    </svg>
  );
}

export default CSSSVG;
