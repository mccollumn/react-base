import {
  ComponentStory, ComponentMeta
} from '@storybook/react';
import { ModalRB } from './ModalRB';

export default {
  title: 'Modal',
  component: ModalRB,
} as ComponentMeta<typeof ModalRB>;

const Template: ComponentStory<typeof ModalRB> = (args) => <ModalRB {...args} />;

export const SimpleModal = Template.bind({});
SimpleModal.args = {

}
