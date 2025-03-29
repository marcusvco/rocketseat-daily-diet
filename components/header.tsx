import { Image, StyleSheet, View } from "react-native"

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/images/logo.png")} />
      <Image
        style={styles.ellipse}
        source={require("@/assets/images/ellipse.png")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 82,
    height: 37,
  },
  ellipse: {
    width: 40,
    height: 40,
  },
})
