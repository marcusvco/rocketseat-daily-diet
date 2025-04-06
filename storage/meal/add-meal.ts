import { AppError } from "@/utils/app-error"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { meal_collection } from "../config"
import { MealDTO } from "./meal-dto"

export async function addMeal(meal: MealDTO): Promise<void> {
  try {
    if (!meal.id) throw new AppError("A refeição precisa ter um id")

    if (!meal.name || meal.name.trim().length == 0)
      throw new AppError("A refeição precisa ter um nome")

    if (!meal.description || meal.description.trim().length == 0)
      throw new AppError("A refeição precisa ter uma descrição")

    if (!meal.date) throw new AppError("A refeição precisa ter uma data")

    if (meal.isHealthy == undefined)
      throw new AppError("A refeição precisa ter um status")

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
