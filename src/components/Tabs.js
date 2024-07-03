import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Toast from 'react-native-simple-toast';

import {Color} from '../utils/Themes';
import {
  fingerprint,
  waterdrop,
  history,
  health,
  cards,
  flight,
} from '../../assets';

export default Tabs = ({route, navigation, title, options}) => {
  const handleToastMessage = message => {
    Toast.showWithGravity(message, Toast.LONG, Toast.BOTTOM);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            handleToastMessage('You have clicked the Finger print!');
          }}>
          <Image source={fingerprint} style={styles.tabsIcons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleToastMessage('You have clicked the Flight mode!');
          }}>
          <Image source={flight} style={styles.tabsIcons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleToastMessage('You have clicked the Water drop!');
          }}>
          <Image source={waterdrop} style={styles.tabsIcons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleToastMessage('You have clicked the Health!');
          }}>
          <Image source={health} style={styles.tabsIcons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleToastMessage('You have clicked the History!');
          }}>
          <Image source={history} style={styles.tabsIcons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleToastMessage('You have clicked the Card view!');
          }}>
          <Image source={cards} style={styles.tabsIcons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  row: {
    // margin: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabsIcons: {
    height: moderateScale(30),
    width: moderateScale(25),
  },
});
