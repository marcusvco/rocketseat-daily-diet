import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ArrowLeft } from "phosphor-react-native"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface Props {
  title: string
  isHealthy?: boolean
}

export default function HeaderPage({ title, isHealthy }: Props) {
  const router = useRouter()

  function getBackgroundColor() {
    if (isHealthy == null) return colors.gray500
    return isHealthy ? colors.greenLight : colors.redLight
  }

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <StatusBar style="dark" backgroundColor={getBackgroundColor()} />
      <TouchableOpacity style={styles.icon} onPress={router.dismissAll}>
        <ArrowLeft size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 104,
    padding: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontSize: fonts.size.lg,
    fontFamily: fonts.family.bold,
  },
  icon: {
    top: 24,
    left: 24,
    position: "absolute",
  },
})
