import { ComponentStory, ComponentMeta } from "@storybook/react";
import SearchInput from "./SearchInput";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Form/Search Input",
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

const searchHandler = (value: any) => console.log(value);

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { label: "Search", variant: "standard", onChange: searchHandler };
