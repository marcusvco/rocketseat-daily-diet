import { fonts } from "@/constants/fonts"
import { DimensionValue, StyleSheet, Text, View } from "react-native"

interface Props {
  title: number
  subtitle: string
  color: string
  maxWidth?: DimensionValue
}

export default function DashboardCard({
  title,
  subtitle,
  color,
  maxWidth,
}: Props) {
  return (
    <View
      style={[styles.container, { maxWidth: maxWidth, backgroundColor: color }]}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle} numberOfLines={2}>
        {subtitle}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: fonts.size.xl,
    fontFamily: fonts.family.bold,
  },
  subtitle: {
    textAlign: "center",
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
  },
})
