import AsyncStorage from "@react-native-async-storage/async-storage"
import { ColorSchemeName } from "react-native"
import { create } from "zustand"
import { combine, createJSONStorage, persist } from "zustand/middleware"

// if (__DEV__) {
//   AsyncStorage.clear()
// }

type Theme = ColorSchemeName | "auto"

export const useThemeMode = create(
  persist(
    combine(
      {
        theme: "auto" as Theme,
      },
      (set, get) => ({
        setTheme: (theme: Theme) => {
          set({ theme })
        },
      }),
    ),
    {
      name: "themeMode",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
