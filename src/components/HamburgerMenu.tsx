import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";
import { useNavigate } from "react-router-dom";
import HamburgerMenuSVG from "../shared/svg/HamburgerMenuSVG";
import { useState } from "react";
import CrossSVG from "../shared/svg/CrossSVG";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <MenuTrigger onOpenChange={setIsOpen}>
      <Button
        className="header__hamburger-menu-btn"
        aria-label="Navigation Menu"
        onPress={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CrossSVG /> : <HamburgerMenuSVG />}
      </Button>
      <Popover placement="top" className="header__hamburger-menu">
        <Menu>
          <MenuItem
            className="header__hamburger-link"
            onAction={() => navigate("/contact")}
          >
            Contact
          </MenuItem>
          <MenuItem
            className="header__hamburger-link"
            onAction={() => navigate("/projects")}
          >
            Projects
          </MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
};

export default HamburgerMenu;
