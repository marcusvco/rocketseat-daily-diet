import { fonts } from "@/constants/fonts"
import { Text, View } from "react-native"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: fonts.family.regular }}>
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  )
}
