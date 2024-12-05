import { PropsWithChildren } from "react"
import Tamagui from "./Tamagui"

export function RootProvider({ children }: PropsWithChildren) {
  return <Tamagui>{children}</Tamagui>
}
