import { fonts } from "@/constants/fonts"
import { Text, View } from "react-native"
import "../global.css"

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text style={{ fontFamily: fonts.family.regular }}>
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  )
}
