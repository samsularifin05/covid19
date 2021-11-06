import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {VKGlassBottom, VKGrafik} from '../../assets';
import {Header} from '../../components';
import Gap from '../../components/Gap';
import {colors} from '../../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

var {height, width} = Dimensions.get('window');
const Statistic = () => {
  const [aktifCountry, setAktifCountry] = useState(true);
  const [aktifGlobal, setAktifGlobal] = useState(false);

  const aktifActionCountry = params => {
    setAktifCountry(true);
    setAktifGlobal(false);
  };
  const aktifActionGlobal = params => {
    setAktifCountry(false);
    setAktifGlobal(true);
  };
  return (
    <View style={styles.pages}>
      <Header />
      <ScrollView>
        <View>
          {/* <VKGlassBottom width={wp("90%")} height={hp("10%")} style={styles.bgImages} /> */}
          <Text style={styles.title}> Statistics </Text>
          {/* <Gap height={40} /> */}
          <View style={styles.bgImages}></View>
          <View style={styles.wrapperSection}>
            <TouchableOpacity
              onPress={() => aktifActionCountry()}
              style={styles.cover(aktifCountry)}>
              <Text style={styles.title2(aktifCountry)}>My Country </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => aktifActionGlobal()}
              style={styles.coverTransparan(aktifGlobal)}>
              <Text style={styles.title2(aktifGlobal)}>Global</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentDay}>
            <Text style={styles.day('total')}> Total </Text>
            <Text style={styles.day('today')}> Today </Text>
            <Text style={styles.day('yesterday')}> Yesterday </Text>
          </View>
          <Gap height={10} />
          <View style={styles.contentDayTotal}>
            <View style={styles.bgColor('Affected')}>
              <Text style={styles.judul}> Affected </Text>
              <Text style={styles.isi}> 336,851 </Text>
            </View>
            <View style={styles.bgColor('Death')}>
              <Text style={styles.judul}> Death </Text>
              <Text style={styles.isi}> 100,000 </Text>
            </View>
          </View>
          <Gap height={10} />
          <View style={styles.contentDayTotal}>
            <View style={styles.bgColor2('Recovered')}>
              <Text style={styles.judul}> Recovered </Text>
              <Text style={styles.isi}> 17,977 </Text>
            </View>
            <View style={styles.bgColor2('Active')}>
              <Text style={styles.judul}> Active </Text>
              <Text style={styles.isi}> 301,251 </Text>
            </View>
            <View style={styles.bgColor2('Serious')}>
              <Text style={styles.judul}> Serious </Text>
              <Text style={styles.isi}> 8,702 </Text>
            </View>
          </View>
        </View>
        <Gap height={10} />
        <View style={styles.content}>
          <Text style={styles.Daily}> Daily New Cases {aktifCountry}</Text>
          <Image source={VKGrafik} style={styles.images} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Statistic;
const styles = StyleSheet.create({
  isi: {
    marginLeft: 12,
    marginTop: 30,
    fontSize: 20,
    color: colors.white,
  },
  judul: {
    marginLeft: 12,
    marginTop: 12,
    color: colors.white,
  },
  bgColor: row => ({
    backgroundColor: row === 'Death' ? colors.red : colors.yellow,
    width: '40%',
    height: 100,
    marginLeft: '2%',
    borderRadius: 15,
  }),
  bgColor2: row => ({
    backgroundColor:
      row === 'Serious'
        ? colors.Serious
        : row === 'Active'
        ? colors.Active
        : colors.green,
    width: '26%',
    height: 100,
    marginLeft: '2%',
    // marginLeft: 16,
    borderRadius: 15,
  }),
  contentDayTotal: {
    flexDirection: 'row',
    marginLeft: hp('2%'),
    marginRight: hp('-6%'),
  },
  contentDay: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  day: to => ({
    marginTop: hp('1%'),
    fontSize: hp('2%'),
    color: to === 'total' ? colors.white : 'rgba(255, 255, 255, 0.5)',
    marginLeft: wp('5%'),
  }),
  title2: aktifCountry => ({
    color: aktifCountry ? colors.black : colors.white,
    marginLeft: hp('1%'),
  }),
  wrapperSection: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  coverTransparan: aktifGlobal => ({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: aktifGlobal ? colors.white : 'rgba(0, 0, 0, 0.0)',
    marginTop: hp('-8%'),
    marginLeft: wp('4%'),
    height: hp('6%'),
    width: wp('40%'),
    borderRadius: 50,
  }),

  cover: aktifCountry => ({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: aktifCountry ? colors.white : 'rgba(0, 0, 0, 0.0)',
    marginTop: hp('-8%'),
    marginLeft: hp('3.5%'),
    marginRight: hp('2%'),
    height: hp('6%'),
    width: wp('40%'),
    borderRadius: 50,
  }),

  bgImages: {
    marginLeft: hp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: wp('85%'),
    opacity: 0.2,
    borderRadius: 50,
    height: 50,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    marginTop: 50,
    marginLeft: width <= 360 ? 20 : 50,
  },
  images: {
    width: width <= 360 ? 300 : 450,
    height: width <= 360 ? 100 : 200,
    marginTop: hp('3%'),
    marginLeft: wp('8%'),
  },
  Daily: {
    marginTop: hp('5%'),
    marginLeft: wp('5%'),
    fontSize: 17,
  },
  pages: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: '4%',
    // paddingTop: 1,
  },
});
