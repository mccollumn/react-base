import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Action
} from './Action';
import { mockNavActions } from "./mocks/navActions";
const avatarAction = mockNavActions.find((a: any) => a.key === 'Avatar');

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Action",
  component: Action,
  decorators: [
    (Story: any) => (
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

  },
} as ComponentMeta<typeof Action>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Action> = (args) => <Action {...args} />;

export const TopNavigationAction = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TopNavigationAction.args = {
  action: avatarAction
};
