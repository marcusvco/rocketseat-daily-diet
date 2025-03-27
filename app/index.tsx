import { StyleSheet, View } from "react-native"
import "../global.css"
import Header from "@/components/header"
import { colors } from "@/constants/colors"

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.white,
  },
})
