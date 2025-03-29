import Button from "@/components/button"
import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { useLocalSearchParams, useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Image, StyleSheet, Text, View } from "react-native"

export default function Submition() {
  const router = useRouter()
  const { status } = useLocalSearchParams()

  function getTitle() {
    if (status === "success") {
      return "Continue assim!"
    }

    return "Que pena!"
  }

  function getSubtitle() {
    if (status === "success") {
      return (
        <Text style={styles.subtitle}>
          Você continua <Text style={styles.bold}>dentro da dieta</Text>. Muito
          bem!
        </Text>
      )
    }

    return (
      <Text style={styles.subtitle}>
        Você <Text style={styles.bold}>saiu da dieta</Text> dessa vez, mas
        continue se esforçando e não desista!
      </Text>
    )
  }

  function getImage() {
    if (status === "success") {
      return require("@/assets/images/success.png")
    }

    return require("@/assets/images/failure.png")
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor={colors.white} />

      <Text
        style={[
          styles.title,
          status === "success"
            ? { color: colors.greenDark }
            : { color: colors.redDark },
        ]}
      >
        {getTitle()}
      </Text>

      {getSubtitle()}

      <Image source={getImage()} style={styles.image} />

      <Button
        text="Ir para a página inicial"
        style={styles.button}
        onPress={router.dismissAll}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  title: {
    fontSize: fonts.size.xl,
    fontFamily: fonts.family.bold,
  },
  subtitle: {
    fontSize: fonts.size.md,
    marginTop: 8,
    textAlign: "center",
    fontFamily: fonts.family.regular,
  },
  image: {
    marginTop: 40,
  },
  button: {
    marginTop: 32,
  },
  bold: {
    fontFamily: fonts.family.bold,
  },
})
