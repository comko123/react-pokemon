import List from "@/components/home/list"
import CustomConfig from "@/utils/customconfig"
import type { Meta, StoryObj } from "@storybook/react"

const StoryList = () => {
  return (
    <CustomConfig>
      <List />
    </CustomConfig>
  )
}

const meta = {
  title: "pokemon list components",
  component: StoryList
} satisfies Meta<typeof List>

export default meta

type Story = StoryObj<typeof meta>

export const pokemon_list: Story = {
  args: {}
}
