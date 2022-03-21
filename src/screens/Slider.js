import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { FONTS } from '../constants/themes';
const {height, width} = Dimensions.get('window');

const Slider = ({ navigation }) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: item.backgroundColor,
        }}>

        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
        <Text style={styles.introText}>
          {item.textview}
        </Text>
      </View>

    );
  };
  const ButtonItem = () => {
    setShowRealApp(true);

    return (
      <View style={{ borderWidth: 1 }}>
        <TouchableOpacity onPress={navigation.navigate('HomeScreen')} >
          <Text>Vinay</Text>
        </TouchableOpacity>
      </View>
    )
  }
  const slides = [

    {
      key: 's1',
      text: 'Scan Anything in HD,\n Where You are... ',
      textview: '\nSimply launch the AirScan app and scan any \n documnet, papers or real world photographs in \nseconds.',
      image: require('../../assets/images/Frameone.jpg'),
      backgroundColor: '#e6ffff',

    },
    {
      key: 's2',
      text: 'Navigate work documents \n like a Pro ',
      textview: '\nScan and organize your work documents in \n structured folders. Scan single or multiple \n documents in one swift go. Merge scans into \n PDFs, records pages and share them on the fly.',
      image: require('../../assets/images/Frametwo.png'),
      backgroundColor: '#ccffff',

    },
    {
      key: 's3',
      text: 'Less time scanning homework \n =more time for fun',
      textview: '\nScanning of homework and assignments are a \n breeze with AirScan. Capture scans, generate \n PDFs and push them to any app installed on \n your phone. Its that easy!',
      image: require('../../assets/images/Framethree.png'),
      backgroundColor: '#b3ffff',

    },
    {
      key: 's4',
      text: 'Convert Pictures to Text with our \n next generation offline OCR ',
      textview: '\nLeverage our cutting edge machine learning \n OCR to convert documents to text in seconds \n with accurate results. Share OCR scans as Doc \n files or PDFs in seconds.',
      image: require('../../assets/images/Framefour.png'),
      backgroundColor: '#99ffff',

    },

  ];
  return (
    <>

      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={ButtonItem}
        showSkipButton={true}
        onSkip={onSkip}
      />

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },

  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width:width-50,
    height: height / 3.2,
    top: '10%'
  },
  introTextStyle: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    bottom: '10%',
    fontWeight: 'bold',
    ...FONTS.appFontBold
  },

  introText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    bottom: '35%',
    ...FONTS.appFontSemiBold
  },

});
export default Slider;

