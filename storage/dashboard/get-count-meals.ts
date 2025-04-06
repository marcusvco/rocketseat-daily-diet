import AsyncStorage from "@react-native-async-storage/async-storage"
import { meal_collection } from "../config"

export async function getCountMeals(): Promise<number> {
  try {
    const storedMeals = await AsyncStorage.getItem(meal_collection)
    const meals = storedMeals ? JSON.parse(storedMeals) : []

    return meals.length
  } catch (error) {
    throw error
  }
}
