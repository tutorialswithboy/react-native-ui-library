import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Slider } from "tamagui";
import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Button>Hello</Button>
        <Slider defaultValue={  } />
        <StatusBar style="auto" />
      </View>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
