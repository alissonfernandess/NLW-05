import React, {useEffect, useState} from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import AsyncStorage from '@react-native-async-storage/async-storage';


import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Header = () => {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');

      setUserName(user || '');
    }

    loadStorageUserName();
  },[])

  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image source={{uri: 'https://blog.hotmart.com/blog/2019/01/BLOG_Perfil-empreendedor.png'}} style={styles.image}  />

    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight()
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily:fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading,
    lineHeight: 40,
  },
  image:{
    width: 70,
    height: 70,
    borderRadius: 40,
  }
});