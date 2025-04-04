import AsyncStorage from "@react-native-async-storage/async-storage"
import { MealDTO } from "./meal-dto"
import { meal_collection } from "../config"

//TODO: Add validations
export async function addMeal(meal: MealDTO): Promise<void> {
  try {
    const storedMeals = await AsyncStorage.getItem(meal_collection)
    const parsedMeals = storedMeals ? JSON.parse(storedMeals) : []

    await AsyncStorage.setItem(
      meal_collection,
      JSON.stringify([...parsedMeals, meal])
    )
  } catch (error) {
    throw error
  }
}
