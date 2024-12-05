import { Image } from "expo-image"
import { Card, getTokens, styled, Text, YStack } from "tamagui"

const StyledImage = styled(Image)
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["

export function ComponentCard() {
  const tokens = getTokens()

  return (
    <Card
      elevate
      padding="$2"
      borderRadius={"$5"}
      //   shadowColor={"$accentColor"}
      //   shadowColor={"$accentColor"}
      pressStyle={{
        scale: 0.99,
      }}
      //   style={{
      //     opacity: 1,
      //     transform: [{ translateY: 0 }],
      //   }}
      //   enterStyle={{
      //     opacity: 0,
      //     transform: [{ translateY: -tokens.size.$1.val }],
      //   }}
      //   animatePresence
      //   animation={"slow"}
    >
      <StyledImage
        width={"100%"}
        aspectRatio={1.5}
        borderRadius={"$3"}
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={{ blurhash }}
        contentFit="cover"
      />
      <YStack p="$2" gap="$1">
        <Text fontSize={"$6"}>Pressable</Text>
        <Text theme={"alt2"} numberOfLines={3}>
          Pressable component wrapper that elegantly shrinks on touch, providing satisfying haptic
          feedback and a delightful click sound.
        </Text>
      </YStack>
    </Card>
  )
}
