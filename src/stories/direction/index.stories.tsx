import Direction from "@/pages/direction"
import CustomConfig from "@/utils/customconfig"
import type { Meta, StoryObj } from "@storybook/react"

const StoryDetail = () => {
  return (
    <CustomConfig>
      <Direction />
    </CustomConfig>
  )
}

const meta = {
  title: "pokemon list components",
  component: StoryDetail
} satisfies Meta<typeof Direction>

export default meta

type Story = StoryObj<typeof meta>

export const pokemon_detail: Story = {
  args: {}
}
