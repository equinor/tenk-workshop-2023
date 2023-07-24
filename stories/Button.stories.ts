import './button.css';
import type { Meta, StoryObj } from '@storybook/html';

export default {
  title: 'Minimalistic/Button'
};

export const Primary: StoryObj = {
  render: () => `<button class="storybook-button storybook-button--medium storybook-button--primary">Click me!!</button>`,
};