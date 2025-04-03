import AsyncStorage from "@react-native-async-storage/async-storage"
import { meal_collection } from "../config"

export async function deleteMeal(id: string): Promise<void> {
  try {
    const storedMeals = await AsyncStorage.getItem(meal_collection)
    const parsedMeals = storedMeals ? JSON.parse(storedMeals) : []
    const updatedMeals = parsedMeals.filter((meal: any) => meal.id !== id)

    await AsyncStorage.setItem(meal_collection, JSON.stringify(updatedMeals))
  } catch (error) {
    throw error
  }
}
