import {StyleSheet} from 'react-native';
import {BLACK} from '../../utils/color';
import {moderateScale} from '../../utils/deviceDimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: moderateScale(24),
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'lightgray',
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    width: '100%',
    borderRadius: moderateScale(30),
    padding: moderateScale(18),
    alignItems: 'center',
  },
  description: {
    fontSize: moderateScale(18),
    fontWeight: '400',
    lineHeight: 20,
    color: BLACK,
    paddingTop: moderateScale(24),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '600',
    lineHeight: 24,
    color: BLACK,
  },
  idText: {
    marginBottom: moderateScale(20),
    paddingTop: moderateScale(16),
    fontSize: moderateScale(28),
    fontWeight: '700',
    color: BLACK,
  },
});
