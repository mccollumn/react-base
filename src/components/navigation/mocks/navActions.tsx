import {
  Person,
  Notifications,
  Settings,
  Assessment,
  Apps,
} from "@mui/icons-material";
import logo from "../../../logo.svg";
import { NavigationAction } from "../Layout";

export const mockNavActions: Array<NavigationAction> = [
  {
    key: "Profiles",
    label: "Profiles",
    icon: <Apps />,
    ariaLabel: "Profiles",
    path: "/profiles",
  },
  {
    key: "Reports",
    label: "Reports",
    icon: <Assessment />,
    ariaLabel: "Reports",
    path: "/reports",
  },
  { divider: true },
  {
    Component: <Logo />,
  },
  { divider: true },
  {
    key: "Notifications",
    label: "Notifications",
    icon: <Notifications />,
    ariaLabel: "Notifications",
    position: "top",
  },
  {
    key: "Settings",
    label: "Settings",
    icon: <Settings />,
    ariaLabel: "Settings",
    position: "top",
  },
  {
    key: "Avatar",
    label: "Avatar",
    icon: <Person />,
    ariaLabel: "Avatar",
    position: "top",
  },
];


function Logo() {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
}
