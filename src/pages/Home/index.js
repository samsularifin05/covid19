import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  ICAmerika,
  ICArrowDown,
  ICMessage,
  ICPhone,
  VKbanner,
  VKCuciTangan,
  VKJagaJarak,
  VKPakaiMasker,
} from '../../assets';
import {Header} from '../../components';
import {colors} from '../../utils';

const Home = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.pages}>
        <Header />
        <View style={styles.wrappercontent}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
              <View style={styles.wrapperSection}>
                <View style={{flex: 1}}>
                  <Text style={styles.title}>Covid 19</Text>
                </View>
                <View style={styles.botton}>
                  <Image source={ICAmerika} style={styles.logoAmerika} />
                  <Text style={styles.usa}>USA</Text>
                  <Image source={ICArrowDown} style={styles.arrowDown} />
                </View>
              </View>
              <View style={styles.wrapperSection}>
                <Text style={styles.title2}> Are you feeling sick? </Text>
              </View>
              <Text style={styles.title3}>
                If you feel sick with any of covid-19 symptoms please call or
                SMS us immediately for help.
              </Text>
              <View style={styles.wrapperSection}>
                <TouchableOpacity
                  style={styles.buttonCall}
                  onPress={() => navigation.navigate('Statistic')}>
                  <View style={styles.wrapperSection}>
                    <Image source={ICPhone} style={styles.ICPhone} />
                    <Text style={styles.callnow}> Call Now </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMessage}>
                  <View style={styles.wrapperSection}>
                    <Image source={ICMessage} style={styles.ICPhone} />
                    <Text style={styles.callnow}> Send Message</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 16,
              }}>
              <Text style={styles.title4}>Prevention</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categoris}>
                  <Image source={VKJagaJarak} style={styles.imageKategori} />
                  <Text style={styles.title5}>Jaga Jarak</Text>
                </View>
                <View style={styles.categoris}>
                  <Image source={VKCuciTangan} style={styles.imageKategori} />
                  <Text style={styles.title5}>Cuci Tangan</Text>
                </View>
                <View style={styles.categoris}>
                  <Image source={VKPakaiMasker} style={styles.imageKategori} />
                  <Text style={styles.title5}>Pakai Masker</Text>
                </View>
              </ScrollView>
              <Image
                source={VKbanner}
                style={styles.imageBanner}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  imageBanner:{
    marginTop: 14,
    height: 130,
    width: 360,
    marginBottom: 16,
  },
  categoris: {
    justifyContent: 'center',
    marginRight: 30,
  },
  imageKategori: {
    width: 100,
    height: 100,
    marginTop: 24,
  },

  ICPhone: {
    height: 18,
    width: 18,
  },
  callnow: {
    color: colors.white,
    marginLeft: 12,
  },
  buttonMessage: {
    marginLeft: 30,
    borderRadius: 50,
    backgroundColor: colors.blue2,
    width: 150,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCall: {
    borderRadius: 50,
    backgroundColor: colors.red,
    width: 150,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowDown: {
    height: 11,
    width: 11,
    marginTop: -16,
    marginLeft: 85,
  },
  usa: {
    marginLeft: 50,
    marginTop: -20,
  },
  logoAmerika: {
    marginLeft: 10,
    marginTop: 7,
  },
  botton: {
    width: 116,
    height: 40,
    backgroundColor: colors.white,
    marginTop: 50,
    borderRadius: 50,
  },
  wrapperSection: {
    flexDirection: 'row',
    paddingBottom: 12,
    paddingTop: 16,
  },

  pages: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: colors.white,
    fontSize: 25,
    marginTop: 50,
  },
  title2: {
    color: colors.white,
    fontSize: 20,
  },
  title3: {
    color: colors.white2,
    fontSize: 14,
    opacity: 0.8,
  },
  title4: {
    color: colors.black,
    fontSize: 20,
    marginTop: 20,
  },
  title5: {
    color: colors.black,
    fontSize: 15,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: colors.primary,
    height: 300,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    // flex : 1,
  },
  wrappercontent: {
    flex: 1,
  },
});
