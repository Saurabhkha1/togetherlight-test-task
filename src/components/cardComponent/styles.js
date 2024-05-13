import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/deviceDimensions';
import {BLACK, LIGHTGREY} from '../../utils/color';

export const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    borderRadius: moderateScale(16),
    padding: moderateScale(20),
    marginVertical: moderateScale(8),
    marginHorizontal: moderateScale(16),
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  title: {
    fontSize: moderateScale(18),
    color: BLACK,
    textAlign: 'center',
  },
  body: {
    fontSize: moderateScale(12),
    textAlign: 'center',
    color: BLACK,
    padding: moderateScale(8),
  },
  subText: {
    height: moderateScale(140),
    backgroundColor: LIGHTGREY,
    padding: moderateScale(4),
    borderRadius: moderateScale(8),
  },
  hrline: {
    height: 1,
    backgroundColor: LIGHTGREY,
    marginVertical: moderateScale(8),
  },
});
