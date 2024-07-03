import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import routes from '../../navigation/Routes';
import {Color} from '../../utils/Themes';

import {logo} from '../../../assets';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(routes.home);
    }, 2000); // Show splash screen for 2 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.whiteColor,
  },
});

export default SplashScreen;
