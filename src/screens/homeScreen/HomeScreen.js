import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from 'react-native';
import Toast from 'react-native-simple-toast';

import Header from '../../components/Header';
import {Color} from '../../utils/Themes';
import Tabs from '../../components/Tabs';
import Card from '../../components/Card';

import {
  plus,
  cardfooter1,
  cardheader1,
  cardfooter2,
  cardfooter3,
  cardheader2,
  cardheader3,
  cardfooter4,
  cardfooter5,
  cardheader4,
  cardheader5,
} from '../../../assets';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const cardsData = [
  {
    id: 1,
    number: '3234 8678 4234 7628',
    name: 'Maya Singh',
    expiry: '08/24',
    headerImage: cardheader1,
    footerImage: cardfooter1,
  },
  {
    id: 2,
    number: '8678 3234 4234 7628',
    name: 'Apurv Rathod',
    expiry: '10/25',
    headerImage: cardheader2,
    footerImage: cardfooter2,
  },
  {
    id: 3,
    number: '4234 8678 3234 7628',
    name: 'Manish Kumar',
    expiry: '01/27',
    headerImage: cardheader3,
    footerImage: cardfooter3,
  },
  {
    id: 4,
    number: '7628 8678 4234 3234',
    name: 'Prashant Sidd',
    expiry: '10/28',
    headerImage: cardheader4,
    footerImage: cardfooter4,
  },
  {
    id: 5,
    number: '3234 7628 8678 4234',
    name: 'Rohit Seth',
    expiry: '12/27',
    headerImage: cardheader5,
    footerImage: cardfooter5,
  },
  // Add more cards as needed
];

const HomeScreen = ({navigation}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  const handleGesture = Animated.event(
    [{nativeEvent: {translationX: translateX}}],
    {useNativeDriver: false},
  );

  const handleStateChange = event => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationX < -100) {
        // Swipe left
        setCurrentCardIndex(prevIndex => (prevIndex + 1) % cardsData.length);
      } else if (event.nativeEvent.translationX > 100) {
        // Swipe right
        setCurrentCardIndex(
          prevIndex => (prevIndex - 1 + cardsData.length) % cardsData.length,
        );
      }

      // Animate back to center
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  };

  const fabPress = () => {
    Toast.showWithGravity('You can add the new card', Toast.LONG, Toast.BOTTOM);
  };
  return (
    <View style={styles.container}>
      <Header />
      <Tabs />
      <PanGestureHandler
        onGestureEvent={handleGesture}
        onHandlerStateChange={handleStateChange}>
        <Animated.View
          style={[
            styles.cardContainer,
            {
              transform: [{translateX}],
            },
          ]}>
          <Card
            number={cardsData[currentCardIndex].number}
            name={cardsData[currentCardIndex].name}
            expiry={cardsData[currentCardIndex].expiry}
            cardheaderImage={cardsData[currentCardIndex].headerImage}
            cardFooterImage={cardsData[currentCardIndex].footerImage}
          />
        </Animated.View>
      </PanGestureHandler>
      <TouchableOpacity style={styles.fab} onPress={fabPress}>
        <Image source={plus} style={styles.fabImg} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primaryBGColor,
  },
  fab: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
    right: 10,
  },
  fabImg: {
    height: 90,
    width: 90,
  },
});

export default HomeScreen;
