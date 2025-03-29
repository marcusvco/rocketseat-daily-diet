import DashboardCard from "@/components/dashboard-card"
import HeaderDashboard from "@/components/header-dashboard"
import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { useLocalSearchParams } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

//TODO: Fix cards horizontal padding
export default function Dashboard() {
  const params = useLocalSearchParams()
  const percentageString: string = Array.isArray(params.percentage)
    ? params.percentage.join(", ")
    : params.percentage
  const percentage = parseFloat(percentageString)

  return (
    <View style={styles.container}>
      <HeaderDashboard percentage={percentage} />
      <View style={styles.content}>
        <Text style={styles.title}>Estatísticas gerais</Text>
        <View style={styles.cardsSection}>
          <DashboardCard
            title={22}
            color={colors.greenLight}
            subtitle="melhor sequência de pratos dentro da dieta"
          />
          <DashboardCard
            title={109}
            color={colors.greenLight}
            subtitle="refeições registradas"
          />
          <View style={styles.cardsRow}>
            <DashboardCard
              title={99}
              maxWidth="50%"
              color={colors.greenLight}
              subtitle="refeições dentro da dieta"
            />
            <DashboardCard
              title={10}
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
