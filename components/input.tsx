import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { StyleSheet, Text, TextInput, View } from "react-native"

interface Props {
  label: string
  flex?: number
}

//TODO: Change style when active
export default function Input({ label, flex }: Props) {
  return (
    <View style={{ flex: flex }}>
      <Text>{label}</Text>
      <TextInput style={styles.input} />
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
