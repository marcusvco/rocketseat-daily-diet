import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { ArrowUpRight } from "phosphor-react-native"
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"

interface Props {
  percentage: number
}

export default function Highlight({
  percentage,
}: Props & TouchableOpacityProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        percentage > 50
          ? { backgroundColor: colors.greenLight }
          : { backgroundColor: colors.redLight },
      ]}
    >
      <Text style={styles.percentage}>{percentage}%</Text>
      <Text>das refeições dentro da dieta</Text>
      <ArrowUpRight style={styles.icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 102,
    marginTop: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.greenLight,
  },
  percentage: {
    fontSize: fonts.size.xxl,
    fontFamily: fonts.family.bold,
  },
  subtitle: {
    fontSize: fonts.size.lg,
    fontFamily: fonts.family.regular,
  },
  icon: {
    top: 8,
    right: 8,
    color: colors.greenDark,
    position: "absolute",
  },
})
