import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native"

interface Props {
  label: string
  flex?: number
}

//TODO: Change style when active
export default function Input({ label, flex, value }: Props & TextInputProps) {
  return (
    <View style={{ flex: flex }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} value={value} multiline />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 14,
    fontSize: fonts.size.md,
    marginTop: 4,
    fontFamily: fonts.family.regular,
    borderColor: colors.gray500,
    borderWidth: 1,
    borderRadius: 6,
  },
  label: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.bold,
  },
})
