import React from "react";
import "./App.css";
import {
  Person,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Assessment,
  Apps,
  Logout,
  ManageAccounts
} from "@mui/icons-material";
import { Layout, NavigationAction } from "./components/navigation/Layout";
import { Login } from "./pages/login/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import { SearchInput } from "./components/form/SearchInput";

function App() {
  const navigate = useNavigate();
  const clickHandler = (navAction: any) => {
    navigate(navAction.path);
  };

  return (
    <Layout
      isAuthorized={true}
      navigationActions={navigationActions}
      navigationClick={clickHandler}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Layout>
  );
}

const Homepage = () => <div>Home</div>;
const Profiles = () => <div>Profiles</div>;
const Reports = () => <div>Reports</div>;
const Notifications = () => <div>Notifications</div>;
const Settings = () => <div>Settings</div>;
const User = () => <div>User</div>;

const navigationActions: Array<NavigationAction> = [
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
    icon: <NotificationsIcon />,
    ariaLabel: "Notifications",
    authFilter: "authorized",
    position: "top",
  },
  {
    key: "Settings",
    label: "Settings",
    icon: <SettingsIcon />,
    ariaLabel: "Settings",
    authFilter: "authorized",
    position: "top",
  },
  {
    key: "Avatar",
    label: "Avatar",
    icon: <Person />,
    ariaLabel: "Avatar",
    authFilter: "authorized",
    position: "top",
    // Displays a popover menu on click
    popoverActions: [
      {
        key: "ACCOUNT_SETTINGS",
        label: "Account Settings",
        icon: <ManageAccounts />,
        ariaLabel: "Account Settings",
      },
      {
        key: "LOGOUT",
        label: "Logout",
        icon: <Logout />,
        ariaLabel: "Logout",
      },
    ]
  },
  {
    key: "Login",
    label: "Login",
    icon: <Person />,
    ariaLabel: "Login",
    authFilter: "unauthorized",
    position: "top",
    // Display a Modal on Click
    ModalBody: (
      <Login
        onLoginSubmit={(values: any) => console.info(values)}
      />
    ),
  },
];

export default App;
