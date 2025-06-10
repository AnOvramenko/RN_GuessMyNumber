import { Platform } from 'react-native';
import AndroidScreenTitle from './ScreenTitle.android';
import IOSScreenTitle from './ScreenTitle.ios';

export default Platform.select({
  android: AndroidScreenTitle,
  ios: IOSScreenTitle,
  default: AndroidScreenTitle,
});