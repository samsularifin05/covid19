import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {MyProfil} from '../../assets';
import Gap from '../../components/Gap';
import {colors} from '../../utils';

const Static = () => {
  return (
    <View style={styles.pages}>
      <View>
        <Gap height={20} />
        <Gap height={20} />
        <View style={styles.contentDayTotal}>
          <Image source={MyProfil} style={styles.images} />
        </View>
        <View style={styles.myname}>
          <Text style={styles.judul}> Samsul Arifin </Text>
        </View>
      </View>
      <View style={styles.content}></View>
    </View>
  );
};

export default Static;

const styles = StyleSheet.create({
  myname: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  judul: {
    marginLeft: 12,
    marginTop: 12,
    fontSize : 28,
    color: colors.white,
  },

  contentDayTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    width: 150,
    height: 150,
    borderRadius: 70,
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
    marginTop: '10%',
    paddingTop: 1,
  },
});
