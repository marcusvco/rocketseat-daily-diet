import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { IconProps } from "phosphor-react-native"
import React from "react"
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"

type variants = "primary" | "outline"

interface Props {
  Icon: React.FC<IconProps>
  text: string
  variant?: variants
  onPress: () => void
}

// TODO: Change color when pressed
export default function Button({
  text,
  variant = "primary",
  Icon,
  onPress,
}: Props & TouchableOpacityProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        variant == "primary"
          ? { backgroundColor: colors.gray200 }
          : { backgroundColor: colors.white, borderWidth: 1 },
      ]}
      onPress={onPress}
    >
      <Icon
        size={18}
        color={variant == "primary" ? colors.white : colors.gray100}
      />
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
    height: 50,
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
