import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ware } from './assets/ware.png';
import PostList from './component/stock';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{padding:12}}>
        <Text style={{color: '#33c', fontSize: 42}}>Lager-Appen</Text>
        <PostList />
        <Image source={ ware } style={{ width: 320, height: 240 }} />

        <StatusBar style="auto" />

      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  base: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
  }
});
//167cf21bd2ad31089ba25b3955e9c28b
