import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Register } from "./Register";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pages/Register",
  component: Register,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof Register>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Register> = (args) => <Register {...args} />;

export const RegisterPage = Template.bind({});
RegisterPage.args = {
  onRegisterSubmit:  (formValues: any) => {
    console.info(
      'Register submit values', formValues
    );
  }
};
