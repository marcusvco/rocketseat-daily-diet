import { Circle } from "phosphor-react-native"
import Button from "./button"
import { StyleSheet, View } from "react-native"
import { colors } from "@/constants/colors"

export default function Select() {
  return (
    <View style={styles.container}>
      <Button
        text="Sim"
        variant="ghost"
        Component={
          <View
            style={[styles.circle, { backgroundColor: colors.greenDark }]}
          />
        }
        onPress={() => {}}
      />
      <Button
        text="Não"
        variant="ghost"
        Component={
          <View style={[styles.circle, { backgroundColor: colors.redDark }]} />
        }
        onPress={() => {}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    flexDirection: "row",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
  },
})
