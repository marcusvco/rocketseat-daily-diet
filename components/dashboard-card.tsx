import { fonts } from "@/constants/fonts"
import { StyleSheet, Text, View } from "react-native"

interface Props {
  title: number
  subtitle: string
  color: string
}

export default function DashboardCard({ title, subtitle, color }: Props) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle} numberOfLines={2}>
        {subtitle}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: fonts.size.xl,
    fontFamily: fonts.family.bold,
  },
  subtitle: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
  },
})
