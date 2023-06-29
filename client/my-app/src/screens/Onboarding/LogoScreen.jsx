import { View, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { ActivityIndicator } from "@react-native-material/core";

const LogoScreen = ({ navigation }) => {

  const Delay3s = () => {
    setTimeout(() => {
      navigation.navigate('Welcome')
    }, 5000);
  }

  useEffect(() => {
    Delay3s();
  }, [])


  return (
    <>
      <View style={styles.container}>
        <Image source={require('../../../assets/logoScreen/logo.png')}
          style={styles.img}
        />
          <ActivityIndicator size="large" color='#E21121' style={styles.load}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A21',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 100,
    marginTop: 300
  },
  load:{
    position:'absolute',
    bottom:'30%'
  }
});

export default LogoScreen;
