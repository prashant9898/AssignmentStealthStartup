import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

import {Color} from '../utils/Themes';
import {chip, wifi, visa} from '../../assets';

const Card = ({number, name, expiry, cardheaderImage, cardFooterImage}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <ImageBackground source={cardheaderImage} style={{borderRadius: 10}}>
          <Text style={styles.text}>Bank of Dessigners</Text>
          <View style={styles.row}>
            <Image source={chip} style={styles.imageStyle} />
            <Image source={wifi} style={styles.imageStyle} />
          </View>
          <Text style={styles.numberText}>{number}</Text>
        </ImageBackground>
      </View>
      <View style={styles.imageFooterContainer}>
        <ImageBackground source={cardFooterImage}>
          <View style={styles.row}>
            <View>
              <Text style={styles.staticNameText}>Card Holder Name</Text>
              <Text style={styles.nameText}>{name}</Text>
            </View>
            <View>
              <Text style={styles.staticNameText}>Expiry date</Text>
              <Text style={styles.nameText}>{expiry}</Text>
            </View>
            <Image source={visa} style={styles.imageStyle} />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 10,
  },
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  imageFooterContainer: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
  },
  text: {
    margin: 16,
    color: Color.whiteColor,
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
  },
  row: {
    marginTop: -16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageStyle: {
    resizeMode: 'contain',
  },
  numberText: {
    margin: 16,
    marginTop: 0,
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    color: Color.whiteColor,
  },
  staticNameText: {
    marginTop: 8,
    fontSize: 9,
    fontFamily: 'Roboto-Regular',
    color: Color.whiteColor,
  },
  nameText: {
    marginTop: 8,
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: Color.whiteColor,
  },
});

export default Card;
