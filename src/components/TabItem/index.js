import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcAbout, IcAboutNoActive, IcHome, IcHomeNoActive, IcReport, IcReportNoActive, IcStatic, IcStaticNoActive} from '../../assets';
import {colors} from '../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  let icon = IcHome;
  if (title === 'Home') {
    icon = active ? IcHome : IcHomeNoActive;
  }
  if(title === 'Report'){
    icon = active ? IcReport : IcReportNoActive;
  }
  if(title === 'About'){
    icon = active ? IcAbout : IcAboutNoActive;
  }
  if(title === 'Statistic'){
    icon = active ? IcStatic  : IcStaticNoActive;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.button(active)}>
        <Image source={icon} style={styles.menuImg} />
      </View>
        <Text> {title} </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  menuImg: {
    width: 24,
    height: 24,
  },
  button: active=> ({
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: active ? colors.blue : colors.white,
    borderRadius: 50,
    height: 36,
    width: 56,
  }),
 
});
