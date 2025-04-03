import AsyncStorage from "@react-native-async-storage/async-storage"
import { meal_collection } from "../config"
import { MealDTO } from "./meal-dto"

export async function updateMeal(meal: MealDTO): Promise<void> {
  try {
    const storedMeals = await AsyncStorage.getItem(meal_collection)
    const parsedMeals = storedMeals ? JSON.parse(storedMeals) : []
    const updatedMeals = parsedMeals.map((storedMeal: MealDTO) =>
      storedMeal.id === meal.id ? { ...storedMeal, ...meal } : storedMeal
    )

    await AsyncStorage.setItem(meal_collection, updatedMeals)
  } catch (error) {
    throw error
  }
}
