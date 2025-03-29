import Button from "@/components/button"
import HeaderPage from "@/components/header-page"
import Input from "@/components/input"
import Select from "@/components/select"
import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { useRouter } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

export default function NewMeal() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <HeaderPage isHealthy={true} />
      <View style={styles.content}>
        <View style={styles.form}>
          <Input label="Nome" />
          <Input label="Descrição" />
          <View style={styles.formRow}>
            <Input label="Data" flex={1} />
            <Input label="Hora" flex={1} />
          </View>
          <View style={styles.select}>
            <Text style={styles.selectText}>Está dentro da dieta</Text>
            <Select />
          </View>
        </View>
        <Button
          text="Cadastrar refeição"
          onPress={() =>
            router.navigate({
              pathname: "/submition",
              params: { status: "success" },
            })
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: -28,
    justifyContent: "space-between",
    paddingVertical: 40,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  form: {
    gap: 24,
  },
  formRow: {
    gap: 20,
    flexDirection: "row",
  },
  select: {
    gap: 8,
  },
  selectText: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.bold,
  },
})
