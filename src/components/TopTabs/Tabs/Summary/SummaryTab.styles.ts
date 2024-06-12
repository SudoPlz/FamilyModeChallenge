import { StyleSheet } from 'react-native';
export const ProgressInactiveBarColor = '#143F99';
export const ProgressActiveBarColor = '#246AFF';
export const ProgressCircleRadius = 110;
export const ProgressValueFontSize = 60;

const HORIZONTAL_PADDING = 20;
const ABSOLUTE_VIEW_TEXT_LEFT_POSITION = '59%';
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 10,
    justifyContent: 'center',
  },
  percentageContainer: {
    flexDirection: 'row',
    paddingHorizontal: HORIZONTAL_PADDING,
    // justifyContent: 'center',
  },
  circularProgressContainer: {
    backgroundColor: 'black',
    borderRadius: ProgressCircleRadius,
  },
  circularProgressSuffixText: {
    top: 15,
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  descriptionParent: {
    right: HORIZONTAL_PADDING,
    height: ProgressCircleRadius * 2,
    width: '80%',
    justifyContent: 'center',
    position: 'absolute',
  },
  descriptionContentContainer: {
    borderWidth: 1,
    borderColor: '#3D45F6',
    borderRadius: 15,
    backgroundColor: '#151515',
    paddingVertical: 10,
  },
  descriptionTextContainer: {
    flexDirection: 'row',
  },
  totalHoursContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: ABSOLUTE_VIEW_TEXT_LEFT_POSITION,
    paddingVertical: 10,
  },
  heartRateContainer: {
    borderTopWidth: 1,
    borderTopColor: '#29292C',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: ABSOLUTE_VIEW_TEXT_LEFT_POSITION,
    paddingVertical: 10,
  },
  icon: {
    paddingRight: 10,
  },
  descriptionMainText: {
    top: -2,
    color: 'white',
    fontSize: 20,
  },
  descriptionSideText: {
    color: 'white',
    fontSize: 12,
  },
  noDataContainer: {
    flexGrow: 1,
    bottom: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataIconContainer: {
    top: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataIcon: {
    position: 'absolute',
  },
  noDataTitleText: {
    paddingVertical: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  noDataDescriptionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  particle: {
    color: '#FFFFFF55',
  },
});

export default styles;
