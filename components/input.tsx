import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native"

interface Props {
  label: string
  flex?: number
}

//TODO: Change style when active
//TODO: Finish style (padding, font, etc)
export default function Input({ label, flex, value }: Props & TextInputProps) {
  return (
    <View style={{ flex: flex }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} value={value} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 4,
    borderColor: colors.gray500,
    borderWidth: 1,
    borderRadius: 6,
  },
  label: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.bold,
  },
})
