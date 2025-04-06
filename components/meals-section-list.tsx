import { fonts } from "@/constants/fonts"
import { useRouter } from "expo-router"
import { SectionList, StyleSheet, Text } from "react-native"
import MealCard from "./meal-card"
import { MealListDTO } from "@/storage/meal/meal-list-dto"

interface Props {
  data: MealListDTO
}

//TODO: Change section header to use date format
export default function MealsSectionList({ data }: Props) {
  const router = useRouter()

  function findDateIndex(date: string) {
    return data.indexOf(data.find((item) => item.date === date)!)
  }

  return (
    <SectionList
      style={styles.container}
      sections={data}
      keyExtractor={(item, index) => item.name + index}
      renderSectionHeader={({ section: { date } }) => {
        return (
          <Text
            style={[
              styles.header,
              findDateIndex(date) != 0 ? { marginTop: 32 } : {},
            ]}
          >
            {date}
          </Text>
        )
      }}
      renderItem={({ item }) => {
        return (
          <MealCard
            item={item}
            onPress={() =>
              router.navigate({
                pathname: "/meal",
                params: { mealId: item.id },
              })
            }
          />
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  header: {
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.lg,
  },
})
