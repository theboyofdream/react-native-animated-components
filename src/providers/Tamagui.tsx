import { TamaguiProvider, Theme } from "@tamagui/core"
import { PropsWithChildren } from "react"
import { useColorScheme } from "react-native"
import { PortalProvider, YStack } from "tamagui"
import config from "~/tamagui.config"

export default function Tamagui({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme()
  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme}>
        <PortalProvider shouldAddRootHost>
          <YStack flex={1} backgroundColor={"$background"}>
            {children}
          </YStack>
        </PortalProvider>
      </Theme>
    </TamaguiProvider>
  )
}
