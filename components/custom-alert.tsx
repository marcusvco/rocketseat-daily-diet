import { colors } from "@/constants/colors"
import { fonts } from "@/constants/fonts"
import { Modal, StyleSheet, Text, View } from "react-native"
import Button from "./button"
import { StatusBar } from "expo-status-bar"

interface Props {
  visible: boolean
  message: string
  confirmText?: string
  onClose: () => void
  onConfirm: () => void
}

export default function CustomAlert({
  visible,
  message,
  confirmText,
  onClose,
  onConfirm,
}: Props) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <StatusBar style="dark" backgroundColor="rgba(0,0,0,0.5)" />
        <View style={styles.alertBox}>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttons}>
            <Button text="Cancelar" variant="outline" onPress={onClose} />
            <Button
              text={confirmText || "Confirmar"}
              onPress={() => {
                onConfirm()
                onClose()
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  alertBox: {
    gap: 32,
    width: "80%",
    alignItems: "center",
    paddingTop: 40,
    borderRadius: 8,
    paddingBottom: 24,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
  message: {
    fontSize: fonts.size.lg,
    textAlign: "center",
    fontFamily: fonts.family.bold,
  },
  buttons: {
    gap: 12,
    flexDirection: "row",
  },
})
