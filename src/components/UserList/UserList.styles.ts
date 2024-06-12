import { StyleSheet } from 'react-native';
import { themes } from 'src/theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingIndicator: {
    padding: 20,
  },

  carousel: {
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    top: '20%',
    fontSize: 24,
    color: 'white',
  },
  noUsersFoundTitle: {
    fontSize: 24,
    color: 'white',
  },
  retryButton: {
    marginVertical: 20,
    backgroundColor: '#246AFF',
    borderRadius: 6,
  },
  noUsersFoundSubtitle: {
    fontSize: 14,
    color: 'white',
  },
});

export default styles;
