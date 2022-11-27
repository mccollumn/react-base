import {
  Person,
  Notifications,
  Settings,
  Assessment,
  Apps,
  Login,
} from "@mui/icons-material";
import { NavigationAction } from "../Layout";
import SearchInput from "../../form/SearchInput";

export const mockNavActions: Array<NavigationAction> = [
  {
    key: "Search",
    label: "Search",
    icon: <Apps />,
    ariaLabel: "Search",
    authFilter: "authorized",
    position: "top",
    Component: (
      <SearchInput
        onChange={(value: any) => {
          console.log(value);
        }}
        variant={"outlined"}
        margin={"none"}
        sx={{ "& .MuiInputBase-root": { backgroundColor: "white" } }}
      />
    ),
    snapPosition: "right",
  },
  {
    key: "Profiles",
    label: "Profiles",
    icon: <Apps />,
    ariaLabel: "Profiles",
    path: "/profiles",
    authFilter: "authorized",
    position: "left",
  },
  {
    key: "Reports",
    label: "Reports",
    icon: <Assessment />,
    ariaLabel: "Reports",
    path: "/reports",
    authFilter: "authorized",
    position: "left",
  },
  {
    divider: true,
    authFilter: "always",
    position: "left",
  },
  {
    key: "Notifications",
    label: "Notifications",
    icon: <Notifications />,
    ariaLabel: "Notifications",
    authFilter: "authorized",
    position: "top",
  },
  {
    key: "Settings",
    label: "Settings",
    icon: <Settings />,
    ariaLabel: "Settings",
    authFilter: "authorized",
    position: "top",
  },
  {
    key: "Avatar",
    label: "Avatar",
    icon: <Person />,
    PopoverContent: <ExampleChildPopoverContent />,
    ariaLabel: "Avatar",
    authFilter: "authorized",
    position: "top",
  },
  {
    key: "Login",
    label: "Login",
    icon: <Person />,
    PopoverContent: <ExampleChildPopoverContent />,
    ariaLabel: "Login",
    authFilter: "unauthorized",
    position: "top",
  },
];

function ExampleChildPopoverContent() {
  return (
    <div>
      Within Popover
    </div>
  );
}
