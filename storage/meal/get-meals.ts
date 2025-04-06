import AsyncStorage from "@react-native-async-storage/async-storage"
import { meal_collection } from "../config"
import { MealDTO } from "./meal-dto"

type OrderType = "asc" | "desc"

export async function getMeals(orderDate?: OrderType): Promise<MealDTO[]> {
  try {
    const storedMeals = await AsyncStorage.getItem(meal_collection)
    const parsedMeals = storedMeals ? JSON.parse(storedMeals) : []

    parsedMeals.forEach((meal: MealDTO) => {
      meal.date = new Date(meal.date)
    })

    if (orderDate) {
      parsedMeals.sort((a: MealDTO, b: MealDTO) => {
        const dateA = a.date.getTime()
        const dateB = b.date.getTime()

        return orderDate === "asc" ? dateA - dateB : dateB - dateA
      })
    }

    return parsedMeals
  } catch (error) {
    throw error
  }
}
