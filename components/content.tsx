import { colors } from "@/constants/colors"
import { ReactNode } from "react"
import { StyleSheet, View } from "react-native"

interface Props {
  children: ReactNode
}

export default function Content({ children }: Props) {
  return <View style={styles.content}>{children}</View>
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: -28,
    justifyContent: "space-between",
    paddingVertical: 40,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
})
