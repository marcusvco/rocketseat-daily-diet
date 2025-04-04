import { colors } from "@/constants/colors"
import { useRef, useState } from "react"
import { StyleSheet, TouchableOpacityProps, View } from "react-native"
import Button from "./button"
import { TouchableOpacity } from "react-native"

type SelectTypes = "yes" | "no"

export default function Select({}: TouchableOpacityProps) {
  const [selectedYes, setSelectedYes] = useState(false)
  const [selectedNo, setSelectedNo] = useState(false)

  function handleSelect(type: SelectTypes) {
    if (type === "yes") {
      setSelectedYes(true)
      setSelectedNo(false)
      return
    }
    setSelectedNo(true)
    setSelectedYes(false)
  }

  return (
    <View style={styles.container}>
      <Button
        flex={1}
        text="Sim"
        active={selectedYes}
        variant="ghost"
        Component={
          <View
            style={[styles.circle, { backgroundColor: colors.greenDark }]}
          />
        }
        onPress={() => handleSelect("yes")}
        customActiveStyle={{
          borderWidth: 1,
          borderColor: colors.greenDark,
          backgroundColor: colors.greenLight,
        }}
      />
      <Button
        flex={1}
        text="Não"
        active={selectedNo}
        variant="ghost"
        Component={
          <View style={[styles.circle, { backgroundColor: colors.redDark }]} />
        }
        onPress={() => handleSelect("no")}
        customActiveStyle={{
          borderWidth: 1,
          borderColor: colors.redDark,
          backgroundColor: colors.redLight,
        }}
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
