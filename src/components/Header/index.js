import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { ICBel, ICMenu } from '../../assets';
import { colors } from '../../utils';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.wrapperSection}>
        <View style={styles.HeaderMenu}>
          <Image style={styles.menu} source={ICMenu} />
        </View>
        <Image style={styles.bell} source={ICBel} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    zIndex: 3,
    paddingHorizontal: 16,
  },
  wrapperSection: {
    flexDirection: 'row',
    paddingBottom: 12,
    paddingTop: 16,
  },
  menu: {
    top: 30,
    height: 18,
    width: 24,
    maxWidth: '20%',
  },
  bell: {
    top: 30,
    height: 20,
    width: 24,
  },
  HeaderMenu: {
    flex: 1,
  },
});
