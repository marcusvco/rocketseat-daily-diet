import { colors } from "@/constants/colors"
import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import Button from "./button"

type SelectTypes = "yes" | "no" | undefined

interface Props {
  value: boolean | undefined
  onChange: (value: boolean) => void
}

export default function Select({ value, onChange }: Props) {
  const [selectedYes, setSelectedYes] = useState<boolean>(false)
  const [selectedNo, setSelectedNo] = useState<boolean>(false)

  useEffect(() => {
    if (value == undefined) return
    if (value) setSelectedYes(true)
    if (!value) setSelectedNo(true)
  }, [value])

  useEffect(() => {
    if (selectedYes) {
      onChange(true)
    }

    if (selectedNo) {
      onChange(false)
    }
  }, [selectedYes, selectedNo])

  function handleSelect(type: SelectTypes) {
    if (type === "yes") {
      setSelectedYes(true)
      setSelectedNo(false)
      return
    }

    if (type === "no") {
      setSelectedNo(true)
      setSelectedYes(false)
      return
    }
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
