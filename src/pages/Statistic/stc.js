import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import {VKGlassBottom, VKGrafik} from '../../assets';
import {Header} from '../../components';
import Gap from '../../components/Gap';
import {colors} from '../../utils';
var {height, width} = Dimensions.get('window');
const Statistic = () => {
  const [aktifCountry, setAktifCountry] = useState(true);
  const [aktifGlobal, setAktifGlobal] = useState(false);

  const aktifActionCountry = (params) => {
    setAktifCountry(true);
    setAktifGlobal(false);
  };
  const aktifActionGlobal = (params) => {
    setAktifCountry(false);
    setAktifGlobal(true);
  };
  return (
    <View style={styles.pages}>
      <Header />
      <View>
        <Text style={styles.title}> Statistics </Text>
        <VKGlassBottom width={"75%"} height={"15%"} style={styles.bgImages} />
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
        <Gap height={20} />
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
        <Gap height={20} />
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
      <View style={styles.content}>
        <Text style={styles.Daily}> Daily New Cases {aktifCountry}</Text>
        <Image source={VKGrafik} style={styles.images} />
      </View>
    </View>
  );
};

export default Statistic;
console.log(width)
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
  bgColor: (row) => ({
    backgroundColor: row === 'Death' ? colors.red : colors.yellow,
    width: "40%",
    height: 100,
    marginLeft: "2%",
    borderRadius: 15,
  }),
  bgColor2: (row) => ({
    backgroundColor:
      row === 'Serious'
        ? colors.Serious
        : row === 'Active'
        ? colors.Active
        : colors.green,
        width: "26%",
    height: 100,
    marginLeft: "2%",
    // marginLeft: 16,
    borderRadius: 15,
  }),
  contentDayTotal: {
    flexDirection: 'row',
    marginLeft: width <= 360 ? 2 : 50,
  },
  contentDay: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  day: (to) => ({
    marginTop: 20,
    fontSize: 14,
    color: to === 'total' ? colors.white : 'rgba(255, 255, 255, 0.5)',
    marginLeft: 24,
  }),
  title2: (aktifCountry) => ({
    color: aktifCountry ? colors.black : colors.white,
    marginLeft: width <= 360 ? 0 : 10,
  }),
  wrapperSection: {
    flexDirection: 'row',
  },
  coverTransparan: (aktifGlobal) => ({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: aktifGlobal ? colors.white : 'rgba(0, 0, 0, 0.0)',
    marginTop: "-12.5%",
    // marginLeft: 12,
    height: 41,
    width: "31%",
    borderRadius: 50,
  }),

  cover: (aktifCountry) => ({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: aktifCountry ? colors.white : 'rgba(0, 0, 0, 0.0)',
    marginTop: "-12.5%",
    marginLeft: "13%",
    marginRight: "4%",
    height: 41,
    width: 170,
    borderRadius: 50,
  }),

  bgImages: {
    marginLeft: "12%",
    // width: "80%",
    // height: 60,
    marginTop: 10,
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
    marginTop: 10,
    marginLeft: 24,
  },
  Daily: {
    marginTop: 20,
    marginLeft: 24,
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
    marginTop: '2%',
    // paddingTop: 1,
  },
});
