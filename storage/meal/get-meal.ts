import AsyncStorage from "@react-native-async-storage/async-storage"
import { MealDTO } from "./meal-dto"
import { meal_collection } from "../config"

export async function getMeal(id: string): Promise<MealDTO> {
  try {
    const storedMeals = await AsyncStorage.getItem(meal_collection)
    const parsedMeals = storedMeals ? JSON.parse(storedMeals) : []
    const meal = parsedMeals.find((meal: MealDTO) => meal.id === id)

    if (meal) meal.date = new Date(meal.date)

    return meal
  } catch (error) {
    throw error
  }
}
