import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './components/navigator/Navigator';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <StatusBar style="auto" />
      <Navigator/>
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
  footer: {
    height: 10,
    flexDirection: 'row',
    alignSelf: "baseline"
  }
});
