import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans"
import { DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { SplashScreen, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync()
  }, [loaded, error])

  if (!loaded && !error) return null

  return (
    <ThemeProvider value={DefaultTheme}>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  )
}
