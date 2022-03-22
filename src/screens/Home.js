import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  View,
  Image,
  ScrollView,
} from 'react-native';
import Tabs from '../components/Tabs';
import LinearGradient from 'react-native-linear-gradient';
const { height, width } = Dimensions.get('window');
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS, FONTS, IMAGES } from '../constants/themes';

const Home = () => {
  const [searchq, setsearchq] = useState('');
  const onChangeSearch = query => setsearchq(query);
  return (
    <SafeAreaView>
      <ScrollView>
        <LinearGradient
          colors={['#aeaeae', 'white']}
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <View>
            <Image
              style={styles.crownImageStyle}
              source={IMAGES.crown}
            />
            <Text
              style={styles.textStyleEvening}>
              Good Evening
            </Text>
            <Text
              style={styles.textWelcome}>
              Welcome back
            </Text>
          </View>
          <Image
            style={styles.bannerImageStyle}
            source={IMAGES.PremiumBanner}
          />
          <Searchbar
            placeholder="Search through your scans"
            onChangeText={onChangeSearch}
            style={styles.searchStyle}
            value={searchq}
         
          >
          </Searchbar>
     
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column', flex: 1, bottom: 20, right: 28 }}>
              <Image
                style={styles.singleImageStyle}
                source={IMAGES.single}
              />

              <Text
                style={styles.singleTextStyle}>
                Single Scan
              </Text>
            </View>
            <View style={{ flexDirection: 'column', flex: 1, bottom: 20, right: 28 }}>
              <Image
                style={styles.batchSingleImage}
                source={IMAGES.single}
              />
              <Image
                style={styles.scanStyle}
                source={IMAGES.batch}
              />

              <Text
                style={styles.batchTextStyle}>
                Batch Scan
              </Text>
            </View>
            <View style={{ flexDirection: 'column', flex: 1, bottom: 20 }}>
              <Image
                style={styles.scanImageStyle}
                source={IMAGES.single}
              />

              <Image
                style={styles.scanImage}
                source={IMAGES.scan}
              />
              <Text
                style={styles.textScan}>
                Scan to Text
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={styles.recentText}>
              Recent Scans
            </Text>
          </View>
          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'space-around',
              }}>
              <Image
                style={styles.logoStyle}
                source={IMAGES.logo}
              />
              <View
                style={styles.logoView}>
                <Text
                  style={{
                    color: 'white',
                    alignSelf: 'center',
                    top: 5,
                  }}>
                  2d ago
                </Text>
              </View>
              <Image
                style={styles.songImage}
                source={IMAGES.song}
              />
              <View
                style={styles.logoView}>
                <Text
                  style={{
                    color: 'white',
                    alignSelf: 'center',
                    top: 5,
                  }}>
                  2d ago
                </Text>

              </View>
            </View>
          </ScrollView>
          <Tabs />

        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  crownImageStyle: {
    width: 40,
    height: 40,
    position: 'relative',
    left: width / 1.3,
    top: 80,
  },
  textStyleEvening:
  {
    fontSize: 35,
    color: COLORS.black,
    fontWeight: 'bold',
    position: 'relative',
    left: 30,
  },
  textWelcome: {
    ...FONTS.appFontBold,
    color: COLORS.grey,
    fontWeight: 'bold',
    position: 'relative',
    left: 35,
  },
  bannerImageStyle: {
    width: width - 70,
    height: height / 6,
    borderRadius: 5,
    position: 'relative',
    left: 30,
    resizeMode: 'contain',
  },
  searchStyle: {
    position: 'relative',
    top: 5,
    left: 30,
    borderRadius: 20,
    width: width / 1.22,
    height: height / 17,
  },
  scanStyle: {
    resizeMode: 'contain',
    width: 35,
    height: 35,
    position: 'relative',
    left: width / 5.3,
    top: width / 20,
  },
  singleImageStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    position: 'relative',
    left: width / 6,
    top: width / 8,
  },
  singleTextStyle: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'relative',
    left: width / 7,
    top: width / 6,
  },
  batchTextStyle: {
    color: COLORS.black,
    fontSize: 15,
    fontWeight: 'bold',
    position: 'relative',
    left: width / 9,
    top: width / 7.7,
  },
  batchSingleImage: {
    resizeMode: 'contain',
    width: 35,
    height: 35,
    position: 'relative',
    left: width / 6,
    top: width / 7,
  },
  scanImage: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
    position: 'relative',
    left: width / 8,
    top: width / 20,
  },
  scanImageStyle: {
    resizeMode: 'contain',
    width: 35,
    height: 35,
    position: 'relative',
    left: width / 10,
    top: width / 7,
  },
  textScan: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'relative',
    left: width / 18,
    top: width / 7,
  },
  recentText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    position: 'relative',
    left: width / 12,
    top: width / 6.9,
  },
  logoStyle: {
    width: width / 2.0,
    height: height / 4,
    position: 'relative',
    left: width / 10,
    top: width / 6,
    borderRadius: 10,
  },
  logoView: {
    backgroundColor: 'skyblue',
    width: 80,
    height: 30,
    top: width / 1.8,
    right: width / 3.5,
    borderRadius: 10,
  },
  songImage: {
    width: width / 2.0,
    height: height / 4,
    position: 'relative',
    top: width / 6,
    borderRadius: 10,
  },
  songView: {
    backgroundColor: 'skyblue',
    width: width / 20,
    height: height / 2,
    top: width / 1.7,
    right: width / 8,
    borderRadius: 10,
  }
});
export default Home;