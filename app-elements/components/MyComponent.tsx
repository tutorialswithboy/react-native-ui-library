import { View } from "react-native";
import { makeStyles, Text, Button, useThemeMode, Card ,SearchBar} from "@rneui/themed";

export default function App() {
  const styles = useStyles();
  const { setMode, mode } = useThemeMode();

  const handleOnPress = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <View style={styles.container}>
      <Text h3>Start Using RNE </Text>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
      <Button onPress={handleOnPress}>Switch Theme</Button>
      <Card containerStyle={styles.card}>
        <Text style={styles.text}>
          Open up App.tsx to start working on your app!
        </Text>

      </Card>
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginVertical: theme.spacing.lg,
  },
  card: {
    borderRadius: 10,
    borderColor:"blue"
  }
}));
