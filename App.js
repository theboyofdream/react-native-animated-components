import "react-native-gesture-handler"

import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { useLoadedAssets } from "@/hooks/useLoadedAssets"
import RootNavigation from "@/navigation"

export default function App() {
  const isLoadingComplete = useLoadedAssets()

  if (!isLoadingComplete) {
    return null
  }
  return (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar />
    </SafeAreaProvider>
  )
}
