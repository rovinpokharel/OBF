import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['DebuggingOverlay']);


export default function App() {
  return (
    <View style={styles.container}>
      <Text>One Bites Food</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
