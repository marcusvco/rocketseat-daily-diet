import Button from "@/components/button"
import Header from "@/components/header"
import Highlight from "@/components/highlight"
import MealsSectionList from "@/components/meals-section-list"
import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { useRouter } from "expo-router"
import { Plus } from "phosphor-react-native"
import { StyleSheet, Text, View } from "react-native"
import "../global.css"

const data = [
  {
    date: "12.08.22",
    data: [
      {
        time: "20:00",
        name: "X-Tudo",
        isHealthy: false,
        description: "Pão, carne, queijo, alface, tomate, maionese",
      },
      {
        time: "15:00",
        name: "Whey protein com leite",
        isHealthy: true,
        description: "Whey protein, leite desnatado",
      },
      {
        time: "10:00",
        name: "Pão de queijo",
        isHealthy: false,
        description: "Pão de queijo",
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
        description:
          "Pão, carne, queijo, alface, tomate, maionese, bacon, ovo.",
      },
      {
        time: "15:00",
        name: "Whey protein com leite",
        isHealthy: true,
        desription: "Whey protein, leite desnatado",
      },
      {
        time: "10:00",
        name: "Pão de queijo",
        isHealthy: false,
        description: "Pão de queijo",
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
