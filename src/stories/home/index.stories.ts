// import { within, userEvent } from '@storybook/testing-library'
import HomePage from "@/pages/home"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Example/Page",
  component: HomePage
} satisfies Meta<typeof HomePage>

export default meta

type Story = StoryObj<typeof meta>

export const param: Story = {
  args: {
    text: "test"
  }
}

// export const LoggedIn: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole('button', {
//       name: /Log in/i,
//     });
//     await userEvent.click(loginButton);
//   },
// }
