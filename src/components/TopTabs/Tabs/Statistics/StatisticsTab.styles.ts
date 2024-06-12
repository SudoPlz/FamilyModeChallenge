import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  chart: {
    // width: '50%',
    paddingLeft: '20%',
  },
  titleText: {
    paddingBottom: 50,
    fontSize: 30,
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
