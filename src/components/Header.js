import React from 'react';
import {View, SafeAreaView, Image, StyleSheet, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {Color} from '../utils/Themes';
import {linearGradient, tips} from '../../assets';

export default Header = ({route, navigation, title, options}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={linearGradient} style={styles.gradient} />
          <View style={styles.tipsView}>
            <Image source={tips} style={styles.tipsImg} />
            <Text style={styles.textStyle}>Tips</Text>
          </View>
        </View>
        <Text style={styles.titleText}>All your credit cards</Text>
        <Text style={styles.subTitleText}>Find all your credit cards here</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.secondarBGColor,
  },
  row: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gradient: {
    width: moderateScale(60),
    height: moderateScale(60),
  },
  tipsView: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: Color.primaryBGColor,
  },
  tipsImg: {
    height: 18,
    width: 13,
  },
  textStyle: {
    margin: 4,
    color: Color.whiteColor,
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
  },
  titleText: {
    margin: 8,
    color: Color.whiteColor,
    fontSize: 37,
    fontFamily: 'Roboto-bold',
  },
  subTitleText: {
    margin: 8,
    marginBottom: 24,
    color: Color.whiteColor,
    fontSize: 21,
    fontFamily: 'Roboto-Regular',
  },
});
