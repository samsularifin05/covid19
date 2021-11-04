import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {MyProfil} from '../../assets';
import Gap from '../../components/Gap';
import {colors} from '../../utils';

const Static = () => {
  return (
    <View style={styles.pages}>
      <View>
        <Gap height={20} />
      </View>
      <View style={styles.content}>
        <View style={styles.contentDayTotal}>
          <Image source={MyProfil} style={styles.images} />
        </View>
        <View style={styles.myname}>
          <Text style={styles.judul}> Samsul Arifin </Text>
          <Gap height={20} />
          <Button
            title="Git : samsularifin05"
            color="#000000"
            style={styles.button}
          />
          <Gap height={20} />
          <Button
            style={styles.button}
            title="FB : samsularifin30"
            color="#1095F4"
          />
          <Gap height={20} />
          <Button
            title="LinkIn : samsularifin05"
            style={styles.button}
            color="#7FB3FF"
          />
        </View>
      </View>
    </View>
  );
};

export default Static;

const styles = StyleSheet.create({
  button: {
    borderRadius: 60,
  },
  myname: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  judul: {
    marginTop: 12,
    fontSize: 28,
  },

  contentDayTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    marginTop: -80,
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
    marginTop: '90%',
    paddingTop: 1,
  },
});
