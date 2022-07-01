import { Meta, Story } from '@storybook/angular';

import {ButtonComponent} from "./button.component";

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  parameters: {
  },
} as Meta;

const template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  moduleMetadata: { declarations: [] },
});

export const button: Story<ButtonComponent> = template.bind({});
button.args = {
  text: 'click me',
};

export const buttonHover: Story<ButtonComponent> = template.bind({});
buttonHover.args = {
  text: 'hover me',
};
buttonHover.parameters = { pseudo: { hover: true } };

export const buttonActive: Story<ButtonComponent> = template.bind({});
buttonActive.args = {
  text: 'mouse press me',
};
buttonActive.parameters = { pseudo: { active: true } };

export const buttonFocusVisible: Story<ButtonComponent> = template.bind({});
buttonFocusVisible.args = {
  text: 'tab me',
};
buttonFocusVisible.parameters = { pseudo: { focusVisible: true } };
