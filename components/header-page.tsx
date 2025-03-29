import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ArrowLeft } from "phosphor-react-native"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface Props {
  isHealthy?: boolean
}

export default function HeaderPage({ isHealthy }: Props) {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor={colors.gray500} />
      <TouchableOpacity style={styles.icon} onPress={router.dismissAll}>
        <ArrowLeft size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>Nova refeição</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 104,
    padding: 24,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.gray500,
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
