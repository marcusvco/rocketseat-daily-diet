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
  flex?: number
  onPress: () => void
}

// TODO: Change color when pressed
export default function Button({
  text,
  variant = "primary",
  Icon,
  Component,
  onPress,
  style,
  flex,
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
      style={[styles.container, getStyle(variant), style, { flex: flex }]}
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
    minHeight: 50,
    maxHeight: 50,
    alignItems: "center",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  text: {
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.sm,
  },
})
