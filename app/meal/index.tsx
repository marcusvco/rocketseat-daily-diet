import Alert from "@/components/alert"
import Button from "@/components/button"
import Content from "@/components/content"
import HeaderPage from "@/components/header-page"
import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { useLocalSearchParams, useRouter } from "expo-router"
import { PencilSimpleLine, Trash } from "phosphor-react-native"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"

export default function Meal() {
  const router = useRouter()
  const [visible, setVisible] = useState<boolean>(false)

  const params = useLocalSearchParams()
  const mealString = params.meal as string
  const meal = JSON.parse(mealString)

  return (
    <View style={styles.container}>
      <HeaderPage title="Refeição" isHealthy={meal.isHealthy} />

      <Content>
        <View style={styles.info}>
          <View style={styles.section}>
            <Text style={styles.title}>{meal.name}</Text>
            <Text style={styles.description}>{meal.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.secondTitle}>Data e hora</Text>
            <Text style={styles.time}>{meal.time}</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <Button
            text="Editar refeição"
            Icon={PencilSimpleLine}
            onPress={() =>
              router.navigate({
                pathname: "/new-meal",
                params: { meal: JSON.stringify(meal) },
              })
            }
          />
          <Button
            text="Excluir refeição"
            variant="outline"
            Icon={Trash}
            onPress={() => setVisible(true)}
          />
        </View>
      </Content>

      <Alert
        visible={visible}
        message="Deseja realmente excluir o registro da refeição?"
        onClose={() => setVisible(false)}
        onConfirm={() => {}}
        confirmText="Sim, excluir"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
  },
  info: {
    gap: 24,
  },
  section: {
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.family.bold,
  },
  description: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.regular,
  },
  secondTitle: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.bold,
  },
  time: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.regular,
  },
  buttons: {
    gap: 9,
  },
})
