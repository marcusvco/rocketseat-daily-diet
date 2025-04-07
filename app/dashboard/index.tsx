import DashboardCard from "@/components/dashboard-card"
import HeaderDashboard from "@/components/header-dashboard"
import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { getCountHealthyMeals } from "@/storage/dashboard/get-count-healthy-meals"
import { getCountHealthySequenceMeals } from "@/storage/dashboard/get-count-healthy-sequence-meals"
import { getCountMeals } from "@/storage/dashboard/get-count-meals"
import { getCountUnhealthyMeals } from "@/storage/dashboard/get-count-unhealthy-meals"
import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import { Alert, StyleSheet, Text, View } from "react-native"

export default function Dashboard() {
  const params = useLocalSearchParams()
  const percentageString: string = params.percentage as string
  const percentage = parseFloat(percentageString)

  const [sequence, setSequence] = useState<number>(0)
  const [totalMeals, setTotalMeals] = useState<number>(0)
  const [healthyMeals, setHealthyMeals] = useState<number>(0)
  const [unhealthyMeals, setUnhealthyMeals] = useState<number>(0)

  async function fetchSequence() {
    try {
      setSequence(await getCountHealthySequenceMeals())
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível buscar a melhor sequência de refeições dentro da dieta"
      )
    }
  }

  async function fetchTotalMeals() {
    try {
      setTotalMeals(await getCountMeals())
    } catch (error) {
      Alert.alert("Erro", "Não foi possível buscar o total de refeições")
    }
  }

  async function fetchHealthyMeals() {
    try {
      setHealthyMeals(await getCountHealthyMeals())
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível buscar a contagem de refeições dentro da dieta"
      )
    }
  }

  async function fetchUnhealthyMeals() {
    try {
      setUnhealthyMeals(await getCountUnhealthyMeals())
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível buscar a contagem de refições fora da dieta"
      )
    }
  }

  useEffect(() => {
    Promise.all([
      fetchSequence(),
      fetchTotalMeals(),
      fetchHealthyMeals(),
      fetchUnhealthyMeals(),
    ])
  }, [])

  return (
    <View style={styles.container}>
      <HeaderDashboard percentage={percentage} />

      <View style={styles.content}>
        <Text style={styles.title}>Estatísticas gerais</Text>

        <View style={styles.cardsSection}>
          <DashboardCard
            title={sequence}
            color={colors.greenLight}
            subtitle="melhor sequência de pratos dentro da dieta"
          />

          <DashboardCard
            title={totalMeals}
            color={colors.greenLight}
            subtitle="refeições registradas"
          />

          <View style={styles.cardsRow}>
            <DashboardCard
              title={healthyMeals}
              maxWidth="50%"
              color={colors.greenLight}
              subtitle="refeições dentro da dieta"
            />

            <DashboardCard
              title={unhealthyMeals}
              maxWidth="50%"
              color={colors.redLight}
              subtitle="refeições fora da dieta"
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 33,
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.bold,
  },
  content: {
    flex: 1,
    marginTop: -32,
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardsSection: {
    gap: 12,
    marginTop: 23,
  },
  cardsRow: {
    gap: 12,
    flexDirection: "row",
  },
})
