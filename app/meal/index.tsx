import Button from "@/components/button"
import Content from "@/components/content"
import CustomAlert from "@/components/custom-alert"
import HeaderPage from "@/components/header-page"
import IsHealthyTag from "@/components/is-healthy-tag"
import { fonts } from "@/constants/fonts"
import { deleteMeal } from "@/storage/meal/delete-meal"
import { getMeal } from "@/storage/meal/get-meal"
import { MealDTO } from "@/storage/meal/meal-dto"
import { useLocalSearchParams, useRouter } from "expo-router"
import { PencilSimpleLine, Trash } from "phosphor-react-native"
import { useEffect, useState } from "react"
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native"

export default function Meal() {
  const router = useRouter()
  const { mealId } = useLocalSearchParams()

  const [meal, setMeal] = useState<MealDTO>({} as MealDTO)
  const [visible, setVisible] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleDeleteMeal() {
    try {
      await deleteMeal(meal.id)
      router.dismissAll()
    } catch (error) {
      Alert.alert("Erro", "Não foi possível excluir a refeição")
    }
  }

  async function fetchData(mealId: string) {
    setIsLoading(true)

    try {
      const mealTeste = await getMeal(mealId)
      setMeal(mealTeste)
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar a refeição")
    }

    setIsLoading(false)
  }

  useEffect(() => {
    if (mealId) {
      fetchData(mealId as string)
    }
  }, [mealId])

  return (
    <View style={styles.container}>
      <HeaderPage title="Refeição" isHealthy={meal.isHealthy} />

      <Content>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.info}>
            <View style={styles.section}>
              <Text style={styles.title}>{meal.name}</Text>
              <Text style={styles.description}>{meal.description}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.secondTitle}>Data e hora</Text>
              <Text style={styles.time}>
                {meal.date
                  ? `${meal.date.toLocaleDateString(
                      "pt-BR"
                    )} às ${meal.date.toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}`
                  : ""}
              </Text>
            </View>

            <IsHealthyTag isHealthy={meal.isHealthy} />
          </View>
        )}

        <View style={styles.buttons}>
          <Button
            text="Editar refeição"
            Icon={PencilSimpleLine}
            onPress={() =>
              router.navigate({
                pathname: "/new-meal",
                params: { mealId: meal.id },
              })
            }
          />

          <Button
            text="Excluir refeição"
            variant="outline"
            Icon={Trash}
            onPress={() => setVisible(true)}
          />
        </View>
      </Content>

      <CustomAlert
        visible={visible}
        message="Deseja realmente excluir o registro da refeição?"
        onClose={() => setVisible(false)}
        onConfirm={handleDeleteMeal}
        confirmText="Sim, excluir"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    gap: 24,
  },
  section: {
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.family.bold,
  },
  description: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.regular,
  },
  secondTitle: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.bold,
  },
  time: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.regular,
  },
  buttons: {
    gap: 9,
  },
})
