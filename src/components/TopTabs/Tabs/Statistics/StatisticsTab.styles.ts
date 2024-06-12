import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollView: { flex: 1 },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  body: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  chart: {
    // width: '50%',
    paddingLeft: '20%',
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
  chartLabelsContainer: {
    position: 'absolute',
    height: '100%',
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderRightColor: '#9F1777',
  },
  chartLabelsTextContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    // borderWidth: 1,
    // borderTopColor: 'blue',
  },
  chartLabelsText: {
    // backgroundColor: 'pink'
  },
});

export default styles;
