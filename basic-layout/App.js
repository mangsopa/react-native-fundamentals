import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    // Jika pakai flexbox gunakan style flexdirection jika tidak hilangkan flexdirectionnya
    <View style={[styles.container, { flexDirection: 'row' }]}>
      {/* <View style={styles.textPertama}>
        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 30, textAlign: 'center' }}>Selamat datang di aplikasi pertamaku</Text>
      </View>
      <View style={styles.inputContatiner}>
        <TextInput style={styles.textInput} placeholder='Masukkan nama kamu' />
        <View style={styles.buttonStyle}>
          <Button title='Click Here' />
        </View>
      </View> */}

      <View style={{
        backgroundColor: 'red',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>One</Text>
      </View>
      <View style={{
        backgroundColor: 'brown',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Two</Text>
      </View>
      <View style={{
        backgroundColor: 'grey',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Three</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff'
  },
  // textPertama: {
  //   marginTop: 50,
  // },
  // inputContatiner: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between'
  // },
  // textInput: {
  //   borderWidth: 1,
  //   borderColor: '#cccccc',
  //   width: '70%',
  //   padding: 12
  // },
  // buttonStyle: {
  //   borderWidth: 1,
  //   backgroundColor: '#fff'
  // }
});
