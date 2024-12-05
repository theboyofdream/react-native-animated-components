import { ComponentCard, Screen } from "@/components"
import { Eye, Github, Mail, MoveUpRight, Search, Twitter, X } from "@tamagui/lucide-icons"
import { Image } from "expo-image"
import { SvgFromUri, SvgXml } from "react-native-svg"
import {
  YStack,
  Text,
  H1,
  H2,
  H4,
  H3,
  Card,
  styled,
  Button,
  XStack,
  ZStack,
  useTheme,
  Input,
  InputFrame,
} from "tamagui"

export function HomeScreen() {
  const theme = useTheme()

  return (
    <Screen scrollable>
      <YStack justifyContent="center" alignItems="center" gap="$2" py="$10" minHeight={"$10"}>
        <Text textAlign="center" theme="alt2">
          React Native
        </Text>
        <H1 textAlign="center">ANIMATED COMPONENTS</H1>
      </YStack>

      <YStack gap="$4" px="$4" maxWidth={420} mx="auto">
        {/* <InputFrame> */}
        <XStack backgroundColor={"$backgroundPress"} borderRadius={"$3"}>
          <Button icon={Search} chromeless circular scaleIcon={1.5} />
          <Input
            inputMode="search"
            keyboardType="web-search"
            backgroundColor={"$colorTransparent"}
            flex={1}
            borderWidth={0}
            paddingLeft={0}
            placeholder="Search component"
            cursorColor={"black"}
            showSoftInputOnFocus
          />
          <Button icon={X} chromeless circular scaleIcon={1.5} />
        </XStack>
        {/* </InputFrame> */}
        <ComponentCard />
        <ComponentCard />
        <ComponentCard />
      </YStack>

      <YStack justifyContent="center" alignItems="center" gap="$3" py="$10" minHeight={"$10"}>
        <Text textAlign="center" theme="alt1">
          {"Thanks for dropping by!\nI hope you find something useful here."}
        </Text>
        <Text
          textAlign="center"
          color={"$blue10"}
          fontSize={"$9"}
          style={{ fontFamily: "Marquette" }}
        >
          {"- Abhishek Chaurasiya"}
        </Text>

        <YStack alignItems="center">
          <Text theme={"alt2"}>Social Links</Text>
          <XStack>
            <Button
              icon={Twitter}
              chromeless
              aspectRatio={1}
              scaleIcon={1.5}
              pressStyle={{ scale: 0.9, backgroundColor: "$colorTransparent", borderWidth: 0 }}
            />
            <Button
              icon={Github}
              chromeless
              aspectRatio={1}
              scaleIcon={1.5}
              pressStyle={{ scale: 0.9, backgroundColor: "$colorTransparent", borderWidth: 0 }}
            />
            <Button
              icon={Mail}
              chromeless
              aspectRatio={1}
              scaleIcon={1.5}
              pressStyle={{ scale: 0.9, backgroundColor: "$colorTransparent", borderWidth: 0 }}
            />
          </XStack>
        </YStack>
      </YStack>
    </Screen>
  )
}
