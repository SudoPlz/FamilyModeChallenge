import { StyleSheet } from 'react-native';
export const BED_ICON_SIZE = 220;
export const DESCRIPTOR_SIZE = BED_ICON_SIZE * 0.5;
const styles = StyleSheet.create({
  scrollView: { flex: 1 },
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
    minWidth: DESCRIPTOR_SIZE,
    minHeight: DESCRIPTOR_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#151515',
  },
  roomTemperatureText: {
    fontSize: 20,
  },
  particle: {
    color: 'white',
  },
});

export default styles;
