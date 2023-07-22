// import { within, userEvent } from '@storybook/testing-library';
import type { Meta, StoryObj } from '@storybook/react';
import { Solution } from '../App';
const meta = {
  title: 'Example/Page',
  component: Solution,
} satisfies Meta<typeof Solution>;

export default meta;

type Story = StoryObj<typeof meta>;

export const param: Story = {
    args: {
      text: "test",
    },
  };

// export const LoggedIn: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole('button', {
//       name: /Log in/i,
//     });
//     await userEvent.click(loginButton);
//   },
// };