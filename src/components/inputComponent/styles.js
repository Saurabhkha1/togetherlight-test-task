import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/deviceDimensions';
import {RED} from '../../utils/color';
export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(5),
    width: '100%',
  },
  input: {
    paddingHorizontal: moderateScale(24),
    height: moderateScale(50),
    borderWidth: 1,
    borderRadius: moderateScale(12),
    paddingVertical: moderateScale(15),
    fontWeight: '500',
    marginHorizontal: moderateScale(16),
  },
  label: {
    fontWeight: '500',
    fontSize: moderateScale(14),
    marginHorizontal: moderateScale(16),
    marginVertical: moderateScale(6),
  },
  error_text: {
    marginTop: moderateScale(5),
    color: RED,
    fontSize: moderateScale(14),
    fontWeight: 500,
    marginHorizontal: moderateScale(20),
  },
});
