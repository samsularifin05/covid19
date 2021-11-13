import {PixelRatio, Dimensions} from 'react-native';

const windowsWidth = Dimensions.get('window').width;

const ratio = windowsWidth / 360;

export function Normalize(size) {
  const newSize = size * ratio;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}