import { useThemeMode } from "@/hooks/useThemeMode"
import { TamaguiProvider, Theme, ThemeProvider } from "@tamagui/core"
import { PropsWithChildren, useEffect, useMemo } from "react"
import { useColorScheme } from "react-native"
import { PortalProvider, YStack } from "tamagui"
import config from "~/tamagui.config"

export function Tamagui({ children }: PropsWithChildren) {
  const systemTheme = useColorScheme()
  const { theme } = useThemeMode()
  const colorScheme = theme === "auto" ? systemTheme : theme

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
