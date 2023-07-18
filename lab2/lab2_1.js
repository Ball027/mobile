import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.Image}
          source={require('./assets/IT_Logo.png')}/>
        <Text style={{fontSize:24}} >คณะเทคโนโลยีสารสนเทศ</Text>
        <Text style={{fontSize:16}}>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
      </View>
      <View style={styles.container2}>
            <Button  title='PROGRAMS' ></Button>
            <Button  title='ABOUT US' ></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:10,
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    margin:10,
    backgroundColor: '#fff',
    paddingHorizontal:20,
    gap:5,

  },
  Image:{
    width:80,
    height:70,
  },

});
