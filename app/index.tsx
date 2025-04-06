import Button from "@/components/button"
import Header from "@/components/header"
import Highlight from "@/components/highlight"
import MealsSectionList from "@/components/meals-section-list"
import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { getPercentageHealthyMeals } from "@/storage/dashboard/get-percentage-healthy-meals"
import { getMeals } from "@/storage/meal/get-meals"
import { MealListDTO } from "@/storage/meal/meal-list-dto"
import { useFocusEffect, useRouter } from "expo-router"
import { Plus } from "phosphor-react-native"
import { useCallback, useState } from "react"
import { Alert, StyleSheet, Text, View } from "react-native"
import "../global.css"

export default function Index() {
  const router = useRouter()
  const [mealsList, setMealsList] = useState<MealListDTO>([])
  const [percentage, setPercentage] = useState<number>(0)

  async function fetchMeals() {
    try {
      const meals = await getMeals("desc")
      const mealList: MealListDTO = []

      meals.forEach((meal) => {
        const existingSection = mealList.find(
          (section) => section.date === meal.date.toLocaleDateString("pt-BR")
        )

        if (existingSection) {
          existingSection.data.push(meal)
        } else {
          mealList.push({
            date: meal.date.toLocaleDateString("pt-BR"),
            data: [meal],
          })
        }
      })

      setMealsList(mealList)
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar as refeições")
    }
  }

  async function fetchHealthyPercentage() {
    try {
      setPercentage((await getPercentageHealthyMeals()) * 100)
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível buscar a porcentagem de refeições saudáveis"
      )
    }
  }

  useFocusEffect(
    useCallback(() => {
      Promise.all([fetchMeals(), fetchHealthyPercentage()])
    }, [])
  )

  return (
    <View style={styles.container}>
      <Header />

      <Highlight
        percentage={percentage}
        onPress={() =>
          router.navigate({
            pathname: "/dashboard",
            params: { percentage },
          })
        }
      />

      <View style={styles.meals}>
        <Text style={styles.text}>Refeições</Text>
        <Button
          text="Nova refeição"
          Icon={Plus}
          onPress={() => router.navigate("/new-meal")}
        />
      </View>

      <MealsSectionList data={mealsList} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.white,
  },
  meals: {
    gap: 8,
    marginTop: 40,
  },
  text: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.md,
  },
})
