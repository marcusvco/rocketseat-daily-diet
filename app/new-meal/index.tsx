import Button from "@/components/button"
import Content from "@/components/content"
import HeaderPage from "@/components/header-page"
import Input from "@/components/input"
import Select from "@/components/select"
import { fonts } from "@/constants/fonts"
import { useLocalSearchParams, useRouter } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

export default function NewMeal() {
  const router = useRouter()
  const params = useLocalSearchParams()

  let meal: {
    time: string
    name: string
    description: string
    isHealthy: boolean
  } = {} as {
    time: string
    name: string
    description: string
    isHealthy: boolean
  }

  if (params.meal) {
    const mealString = params.meal as string
    meal = JSON.parse(mealString)
  }

  return (
    <View style={styles.container}>
      <HeaderPage
        title={!params.meal ? "Nova refeição" : "Refeição"}
        isHealthy={meal.isHealthy}
      />

      <Content>
        <View style={styles.form}>
          <Input label="Nome" value={meal.name} />
          <Input label="Descrição" value={meal.description} />

          <View style={styles.formRow}>
            <Input label="Data" flex={1} value={meal.time} />
            <Input label="Hora" flex={1} value={meal.time} />
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
      </Content>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
