import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 10,
    justifyContent: 'center',
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
});

export default styles;
