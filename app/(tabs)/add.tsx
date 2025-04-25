"use client"

import { useState, useEffect } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { Camera } from "expo-camera"
import QRCode from 'react-native-qrcode-svg'

export default function ScanQRScreen() {
  const router = useRouter()
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === "granted")
    })()
  }, [])

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScanned(true)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
    // Navigate to appropriate screen based on QR data
  }

  if (hasPermission === null) {
    return (
        <View style={styles.container}>
          <Text>Requesting camera permission...</Text>
        </View>
    )
  }

  if (hasPermission === false) {
    return (
        <View style={styles.container}>
          <Text>No access to camera</Text>
        </View>
    )
  }

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="white" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Scan your QR Code</Text>

          <View style={styles.cameraContainer}>
            <View style={styles.qrFrame}>
              <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png",
                  }}
                  style={styles.qrImage}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.scanButton} onPress={() => setScanned(false)}>
            <Ionicons name="scan-outline" size={20} color="white" style={styles.scanIcon} />
            <Text style={styles.scanButtonText}>Scan QR Code</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 40,
  },
  cameraContainer: {
    width: "100%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  qrFrame: {
    width: "80%",
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  qrImage: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
  scanButton: {
    flexDirection: "row",
    backgroundColor: "#FF5722",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  scanIcon: {
    marginRight: 8,
  },
  scanButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})
