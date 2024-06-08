import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../Button';
import Text from '../Text';
import GradientBorder from '../GradientBorder';
import styles from './UserCarousel.styles';
import type { User } from '../../../store/state/user/user.types';

type UserCarouselItemProps = {
  item: User;
  index: number;
  onUserSelected: (aUser: User) => void;
};

const UserCarouselItem = ({
  index,
  item,
  onUserSelected,
}: UserCarouselItemProps) => {
  const onUserSelect = useCallback(() => {
    onUserSelected(item);
  }, [item, onUserSelected]);
  return (
    <GradientBorder thickness={7} borderRadius={90}>
      <Button
        mode="highlight"
        key={item.id ?? index}
        style={styles.itemContainer}
        onPress={onUserSelect}>
        <Icon name="person-circle-outline" size={75} color="white" />
        <Text style={styles.itemText}>{item.name}</Text>
      </Button>
    </GradientBorder>
  );
};
export default UserCarouselItem;
