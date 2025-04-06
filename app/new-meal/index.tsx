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
import { AppError } from "@/utils/app-error"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { Alert, StyleSheet, Text, View } from "react-native"
import uuid from "react-native-uuid"
import DateTimePicker from "@react-native-community/datetimepicker"
import { colors } from "@/constants/colors"
import RNDateTimePicker from "@react-native-community/datetimepicker"
import { getMeals } from "@/storage/meal/get-meals"

export default function NewMeal() {
  const router = useRouter()
  const params = useLocalSearchParams()

  const [visible, setVisible] = useState<boolean>(false)
  const [meal, setMeal] = useState<MealDTO>({} as MealDTO)
  const [mode, setMode] = useState<any>("date")
  const [show, setShow] = useState(false)
  const [date, setDate] = useState(new Date())

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate
    setShow(false)
    setDate(currentDate)
    meal.date = currentDate
  }

  const showMode = (currentMode: any) => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode("date")
  }

  const showTimepicker = () => {
    showMode("time")
  }

  async function fetchData(mealId: string) {
    try {
      setMeal(await getMeal(mealId))
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar a refeição")
    }
  }

  async function handleAddMeal() {
    try {
      meal.id = uuid.v4()
      await addMeal(meal)
      router.navigate({
        pathname: "/submition",
        params: { status: meal.isHealthy ? "success" : "failure" },
      })
    } catch (error) {
      if (error instanceof AppError) return Alert.alert("Erro", error.message)
      Alert.alert("Erro", "Não foi possível cadastrar a refeição")
    }
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

          <View style={styles.formRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Data</Text>
              <Button
                text={meal.date ? meal.date.toLocaleDateString("pt-BR") : ""}
                style={styles.input}
                variant="outline"
                onPress={showDatepicker}
                customActiveStyle={styles.input}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Hora</Text>
              <Button
                text={meal.date ? meal.date.toLocaleTimeString("pt-BR") : ""}
                style={styles.input}
                variant="outline"
                onPress={showTimepicker}
                customActiveStyle={styles.input}
              />
            </View>
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

      {show && (
        <DateTimePicker
          mode={mode}
          value={date}
          testID="dateTimePicker"
          is24Hour={true}
          onChange={onChange}
        />
      )}
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
  label: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.bold,
  },
  input: {
    padding: 14,
    fontSize: fonts.size.md,
    marginTop: 4,
    fontFamily: fonts.family.regular,
    borderColor: colors.gray500,
    borderWidth: 1,
    borderRadius: 6,
  },
})
