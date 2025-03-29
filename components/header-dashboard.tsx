import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ArrowLeft } from "phosphor-react-native"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface Props {
  percentage: number
}

export default function HeaderDashboard({ percentage }: Props) {
  const router = useRouter()

  function isPercentagePositive() {
    return percentage > 50
  }

  return (
    <View
      style={[
        styles.container,
        isPercentagePositive()
          ? { backgroundColor: colors.greenLight }
          : { backgroundColor: colors.redLight },
      ]}
    >
      <StatusBar
        style="dark"
        backgroundColor={percentage > 50 ? colors.greenLight : colors.redLight}
      />
      <TouchableOpacity style={styles.icon} onPress={router.dismissAll}>
        <ArrowLeft
          size={32}
          color={isPercentagePositive() ? colors.greenDark : colors.redDark}
        />
      </TouchableOpacity>

      <Text style={styles.percentage}>{percentage}%</Text>
      <Text style={styles.subtitle}>das refeições dentro da dieta</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    top: 24,
    left: 24,
    position: "absolute",
  },
  percentage: {
    marginTop: -32,
    fontSize: fonts.size.xxl,
    fontFamily: fonts.family.bold,
  },
  subtitle: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
  },
})
