import AsyncStorage from "@react-native-async-storage/async-storage"
import { meal_collection } from "../config"
import { MealDTO } from "./meal-dto"

export async function getMeals(): Promise<MealDTO[]> {
  try {
    const storedMeals = await AsyncStorage.getItem(meal_collection)

    return storedMeals ? JSON.parse(storedMeals) : []
  } catch (error) {
    throw error
  }
}
