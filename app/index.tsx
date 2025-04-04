import Button from "@/components/button"
import Header from "@/components/header"
import Highlight from "@/components/highlight"
import MealsSectionList from "@/components/meals-section-list"
import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { getMeals } from "@/storage/meal/get-meals"
import { MealList } from "@/storage/meal/meal-list"
import { useFocusEffect, useRouter } from "expo-router"
import { Plus } from "phosphor-react-native"
import { useCallback, useState } from "react"
import { Alert, StyleSheet, Text, View } from "react-native"
import "../global.css"

export default function Index() {
  const router = useRouter()
  const [mealsList, setMealsList] = useState<MealList>([])

  async function fetchMeals() {
    try {
      const meals = await getMeals()
      const mealList: MealList = []
      meals.forEach((meal) => {
        const existingSection = mealList.find(
          (section) => section.date === meal.date
        )

        if (existingSection) {
          existingSection.data.push(meal)
        } else {
          mealList.push({ date: meal.date, data: [meal] })
        }
      })

      setMealsList(mealList)
    } catch (error) {
      console.log("error", error)
      Alert.alert("Erro", "Não foi possível carregar as refeições")
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, [])
  )

  return (
    <View style={styles.container}>
      <Header />

      <Highlight
        percentage={90.2}
        onPress={() =>
          router.navigate({
            pathname: "/dashboard",
            params: { percentage: 90.2 },
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
