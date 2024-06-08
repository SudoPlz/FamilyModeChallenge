import { StyleSheet } from 'react-native';
export const ITEM_SIZE = 200;
export const EXTRA_VERTICAL_PADDING = 40;
const ITEM_RADIOUS = 80;
const styles = StyleSheet.create({
  carousel: {
    flexShrink: 1,
    // alignItems: 'center',
  },
  itemContainer: {
    // flex: 1,
    // backgroundColor: 'white',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ITEM_RADIOUS,
  },
  itemTextContainer: {
    // minHeight: '100%',
    justifyContent: 'center',
  },
  itemText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default styles;
