import AsyncStorage from "@react-native-async-storage/async-storage"
import { meal_collection } from "../config"
import { MealDTO } from "../meal/meal-dto"

export async function getCountHealthyMeals(): Promise<number> {
  try {
    const storedMeals = await AsyncStorage.getItem(meal_collection)
    const parsedMeals = storedMeals ? JSON.parse(storedMeals) : []
    const healthyMeals = parsedMeals.filter((meal: MealDTO) => meal.isHealthy)

    return healthyMeals.length
  } catch (error) {
    throw error
  }
}
