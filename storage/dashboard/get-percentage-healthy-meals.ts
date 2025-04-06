import AsyncStorage from "@react-native-async-storage/async-storage"
import { meal_collection } from "../config"
import { MealDTO } from "../meal/meal-dto"

export async function getPercentageHealthyMeals(): Promise<number> {
  try {
    const storedMeals = await AsyncStorage.getItem(meal_collection)
    const parsedMeals = storedMeals ? JSON.parse(storedMeals) : []

    let percentage = 0

    parsedMeals.forEach((meal: MealDTO) => {
      if (meal.isHealthy) percentage++
    })

    if (percentage > 0) return percentage / parsedMeals.length
    return 0
  } catch (error) {
    throw error
  }
}
