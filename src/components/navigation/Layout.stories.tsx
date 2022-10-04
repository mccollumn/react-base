import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Person,
  Notifications,
  Settings,
  Assessment,
  Apps,
} from "@mui/icons-material";
import logo from "../../logo.svg";
import { Layout, NavigationAction } from "./Layout";
import { mockNavActions } from "./mocks/navActions";

const defaultNavActions: Array<NavigationAction> = [
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

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Layout",
  component: Layout,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '-1rem',  // Offset parent storybook padding
        }}>
        <Story />
      </div>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    navigationActions: {
      defaultValue: mockNavActions,
    },
  },
} as ComponentMeta<typeof Layout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "App Name",
};

export const UsageExample = () => {
  const [action, setAction] = React.useState();
  const clickHandler = (navAction: any) => {
    setAction(navAction);
  };

  return (
    <Layout
      navigationActions={mockNavActions}
      navigationClick={clickHandler}
    >
      <DisplaySelectedAction action={action} />
    </Layout>
  );
};

const DisplaySelectedAction = ({ action }: any) => {
  return <div>{action?.label}</div>;
};

function Logo() {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
}
