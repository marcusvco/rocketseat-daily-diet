import Button from "@/components/button"
import Content from "@/components/content"
import CustomAlert from "@/components/custom-alert"
import HeaderPage from "@/components/header-page"
import Input from "@/components/input"
import Select from "@/components/select"
import { fonts } from "@/constants/fonts"
import { addMeal } from "@/storage/meal/add-meal"
import { getMeal } from "@/storage/meal/get-meal"
import { MealDTO } from "@/storage/meal/meal-dto"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { Alert, StyleSheet, Text, View } from "react-native"
import uuid from "react-native-uuid"

export default function NewMeal() {
  const router = useRouter()
  const params = useLocalSearchParams()

  const [visible, setVisible] = useState<boolean>(false)
  const [meal, setMeal] = useState<MealDTO>({} as MealDTO)

  async function fetchData(mealId: string) {
    setMeal(await getMeal(mealId))
  }

  async function handleAddMeal() {
    try {
      meal.id = uuid.v4()
      await addMeal(meal)
    } catch (error) {
      Alert.alert("Erro", "Não foi possível cadastrar a refeição")
    }

    router.navigate({
      pathname: "/submition",
      params: { status: meal.isHealthy ? "success" : "failure" },
    })
  }

  useEffect(() => {
    if (params.mealId) {
      fetchData(params.mealId as string)
    }
  }, [params.mealId])

  return (
    <View style={styles.container}>
      <HeaderPage
        title={!params.mealId ? "Nova refeição" : "Refeição"}
        isHealthy={meal.isHealthy}
      />

      <Content>
        <View style={styles.form}>
          <Input
            label="Nome"
            value={meal.name}
            onChangeText={(text) => (meal.name = text)}
          />
          <Input
            label="Descrição"
            value={meal.description}
            onChangeText={(text) => (meal.description = text)}
          />

          {/* TODO: Add date picker */}
          <View style={styles.formRow}>
            <Input
              label="Data"
              flex={1}
              value={meal.date}
              onChangeText={(text) => (meal.date = text)}
            />
            <Input
              label="Hora"
              flex={1}
              value={meal.time}
              onChangeText={(text) => (meal.time = text)}
            />
          </View>
          <View style={styles.select}>
            <Text style={styles.selectText}>Está dentro da dieta</Text>
            <Select onChange={(value) => (meal.isHealthy = value)} />
          </View>
        </View>

        <Button
          text={!params.mealId ? "Cadastrar refeição" : "Salvar alterações"}
          onPress={handleAddMeal}
        />
      </Content>

      <CustomAlert
        visible={visible}
        message="Deseja realmente excluir o registro da refeição?"
        onClose={() => setVisible(false)}
        onConfirm={() => {}}
        confirmText="Sim, excluir"
      />
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
