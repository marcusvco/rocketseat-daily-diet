import { fonts } from "@/constants/fonts"
import { SectionList, StyleSheet, Text } from "react-native"
import MealCard from "./meal-card"

type MealList = {
  date: string
  data: { time: string; name: string; isHealthy: boolean }[]
}[]

interface Props {
  data: MealList
}

export default function MealsSectionList({ data }: Props) {
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
        return <MealCard item={item} />
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
