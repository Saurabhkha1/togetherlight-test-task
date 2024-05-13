import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/deviceDimensions';
import {BLACK, GREY} from '../../utils/color';

export const styles = StyleSheet.create({
  button: disabled => ({
    backgroundColor: !disabled ? BLACK : GREY,
    margin: moderateScale(12),
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(48),
    marginHorizontal: moderateScale(16),
  }),
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
});
