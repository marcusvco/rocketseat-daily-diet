import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { IconProps } from "phosphor-react-native"
import React, { ReactElement, useEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"

type variants = "primary" | "outline" | "ghost"

interface Props {
  text: string
  flex?: number
  Icon?: React.FC<IconProps>
  active?: boolean
  variant?: variants
  Component?: ReactElement
  customActiveStyle?: object
}

export default function Button({
  text,
  flex,
  Icon,
  style,
  active,
  variant = "primary",
  onPress,
  Component,
  customActiveStyle,
}: Props & TouchableOpacityProps) {
  const [buttonActive, setButtonActive] = useState(false)
  const [defaultStyles, setDefaultStyles] = useState({})

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

  function getActiveStyle(variant: variants) {
    switch (variant) {
      case "primary":
        return { backgroundColor: colors.gray100 }
      case "outline":
        return { backgroundColor: colors.gray500, borderWidth: 1 }
      case "ghost":
        return { backgroundColor: colors.gray600 }
      default:
        return { backgroundColor: colors.gray200 }
    }
  }

  useEffect(() => {
    if (active !== undefined) setButtonActive(active)
    if (!buttonActive) return setDefaultStyles(getStyle(variant))
    if (customActiveStyle) return setDefaultStyles(customActiveStyle)

    setDefaultStyles(getActiveStyle(variant))
  }, [variant, buttonActive, active])

  return (
    <TouchableOpacity
      style={[styles.container, defaultStyles, style, { flex: flex }]}
      onPress={(event) => {
        setButtonActive(!buttonActive)
        if (onPress) onPress(event)
      }}
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
