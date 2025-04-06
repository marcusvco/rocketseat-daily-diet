import AsyncStorage from "@react-native-async-storage/async-storage"
import { meal_collection } from "../config"
import { MealDTO } from "../meal/meal-dto"
import { getMeals } from "../meal/get-meals"

export async function getCountHealthySequenceMeals(): Promise<number> {
  try {
    const meals = await getMeals("asc")

    let count = 0
    let maxCount = 0

    meals.forEach((meal: MealDTO) => {
      if (meal.isHealthy) {
        count++
        if (count > maxCount) maxCount = count
      } else {
        count = 0
      }
    })

    return maxCount
  } catch (error) {
    throw error
  }
}
