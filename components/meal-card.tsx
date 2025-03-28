import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native"

interface Props {
  item: { time: string; name: string; isHealthy: boolean }
}

export default function MealCard({ item }: Props & TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.divider}>|</Text>
        <Text style={styles.item}>{item.name}</Text>
      </View>
      <View
        style={[
          styles.circle,
          item.isHealthy
            ? { backgroundColor: colors.greenLight }
            : { backgroundColor: colors.redLight },
        ]}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    alignItems: "center",
    borderWidth: 1,
    paddingLeft: 12,
    borderRadius: 6,
    paddingRight: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
  },
  textContainer: {
    gap: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  time: {
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.xs,
  },
  item: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.md,
  },
  divider: {
    color: colors.gray400,
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: "50%",
  },
})
