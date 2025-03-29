import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { IconProps } from "phosphor-react-native"
import React, { ReactElement } from "react"
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"

type variants = "primary" | "outline" | "ghost"

interface Props {
  Icon?: React.FC<IconProps>
  Component?: ReactElement
  text: string
  variant?: variants
  onPress: () => void
}

// TODO: Change color when pressed
export default function Button({
  text,
  variant = "primary",
  Icon,
  Component,
  onPress,
}: Props & TouchableOpacityProps) {
  function getStyle(variant: variants) {
    switch (variant) {
      case "primary":
        return { backgroundColor: colors.gray200 }
      case "outline":
        return { backgroundColor: colors.white, borderWidth: 1 }
      case "ghost":
        return { backgroundColor: colors.gray600 }
      default:
        return { backgroundColor: colors.gray200 }
    }
  }
  return (
    <TouchableOpacity
      style={[styles.container, getStyle(variant)]}
      onPress={onPress}
    >
      {Icon && (
        <Icon
          size={18}
          color={variant == "primary" ? colors.white : colors.gray100}
        />
      )}

      {Component && Component}

      <Text
        style={[
          styles.text,
          variant == "primary"
            ? { color: colors.white }
            : { color: colors.gray100 },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    flex: 1,
    maxHeight: 50,
    minHeight: 50,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.sm,
  },
})
