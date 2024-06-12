import { StyleSheet } from 'react-native';
export const BED_ICON_SIZE = 220;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: 'white',
  },
  titleContainer: {
    paddingTop: 40,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
  },
  subTitleText: {
    fontSize: 14,
    color: '#ADB3C5',
  },
  body: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {
    // width: '50%',
  },
  bedTemperatureContainer: {},
  bedIcon: {
    // backgroundColor: 'black',
  },
  bedTemperatureTextContainer: {
    position: 'absolute',
    bottom: '32%',
    left: BED_ICON_SIZE * 0.35,
  },
  bedTemperatureText: {
    fontSize: 25,
  },
  roomTemperatureTextContainer: {
    position: 'absolute',
    left: BED_ICON_SIZE * 0.7,
    top: -40,
    borderRadius: 50,
    minWidth: BED_ICON_SIZE * 0.5,
    minHeight: BED_ICON_SIZE * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#151515',
  },
  roomTemperatureText: {
    fontSize: 20,
  },
});

export default styles;
