import { Screen } from "@/components"
import { YStack, Text, H1, H2, H4, H3 } from "tamagui"

export function HomeScreen() {
  return (
    <Screen scrollable>
      <YStack justifyContent="center" alignItems="center" gap="$2" py="$10" minHeight={"$10"}>
        <Text textAlign="center" theme="alt2">
          React Native
        </Text>
        <H1 textAlign="center">ANIMATED COMPONENTS</H1>
      </YStack>
    </Screen>
  )
}
