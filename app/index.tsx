import { SectionList, StyleSheet, Text, View } from "react-native"
import "../global.css"
import Header from "@/components/header"
import { colors } from "@/constants/colors"
import Highlight from "@/components/highlight"
import { fonts } from "@/constants/fonts"
import Button from "@/components/button"
import { Plus } from "phosphor-react-native"
import MealsSectionList from "@/components/meals-section-list"
import { useRouter } from "expo-router"

const data = [
  {
    date: "12.08.22",
    data: [
      {
        time: "20:00",
        name: "X-Tudo",
        isHealthy: false,
      },
      {
        time: "15:00",
        name: "Whey protein com leite",
        isHealthy: true,
      },
      {
        time: "10:00",
        name: "Pão de queijo",
        isHealthy: false,
      },
    ],
  },
  {
    date: "11.08.22",
    data: [
      {
        time: "20:00",
        name: "X-Tudo",
        isHealthy: false,
      },
      {
        time: "15:00",
        name: "Whey protein com leite",
        isHealthy: true,
      },
      {
        time: "10:00",
        name: "Pão de queijo",
        isHealthy: false,
      },
    ],
  },
]

export default function Index() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Header />

      <Highlight
        percentage={90.2}
        onPress={() =>
          router.navigate({
            pathname: "/dashboard",
            params: { percentage: 90.2 },
          })
        }
      />

      <View style={styles.meals}>
        <Text style={styles.text}>Refeições</Text>
        <Button
          text="Nova refeição"
          Icon={Plus}
          onPress={() => router.navigate("/new-meal")}
        />
      </View>

      <MealsSectionList data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.white,
  },
  meals: {
    gap: 8,
    marginTop: 40,
  },
  text: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.md,
  },
})
