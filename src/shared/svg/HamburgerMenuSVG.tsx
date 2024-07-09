import { SVGProps } from "../SVGProps";
import classNames from "classnames";

/**
 * Hamburger Menu Icon SVG
 *
 * @returns
 */

function HamburgerMenuSVG({ className, ...rest }: SVGProps) {
  return (
    <svg
      className={classNames("icon icon-hamburger-menu", className)}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...rest}
    >
      <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
    </svg>
  );
}

export default HamburgerMenuSVG;
