import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Providers from "@/providers"
import { HomeScreen, NotFoundScreen } from "@/screens"

const Stack = createNativeStackNavigator()

export function RootNavigation() {
  return (
    <Providers>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="not-found" component={NotFoundScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Providers>
  )
}
