import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { StyleSheet, Text, View } from "react-native"

interface Props {
  isHealthy: boolean
}

export default function IsHealthyTag({ isHealthy }: Props) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          isHealthy
            ? { backgroundColor: colors.greenDark }
            : { backgroundColor: colors.redDark },
        ]}
      />

      {/* TODO: Fix width */}
      <Text style={styles.text}>
        {isHealthy ? "dentro da dieta" : "fora da dieta"}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    maxWidth: 140,
    alignItems: "center",
    borderRadius: 1000,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 8,
    backgroundColor: colors.gray600,
    paddingHorizontal: 16,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
  },
  text: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
  },
})
