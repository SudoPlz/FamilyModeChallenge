import React, { useState, useEffect } from 'react';
import { Dimensions, ScaledSize, StyleProp, ViewStyle } from 'react-native';
import { interpolate } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import styles, {
  EXTRA_VERTICAL_PADDING,
  ITEM_SIZE,
} from './UserCarousel.styles';
import UserCarouselItem from './UserCarouselItem';
import type { TAnimationStyle } from 'react-native-reanimated-carousel/src/layouts/BaseLayout';
import type { User } from '../../../store/state/user/user.types';

type UserCarouselProps = {
  users?: Array<User> | null;
  style?: StyleProp<ViewStyle>;
  onUserSelected: (aUser: User) => void;
};

const UserCarousel = ({ users, style, onUserSelected }: UserCarouselProps) => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  useEffect(() => {
    const handleChange = ({
      window,
    }: {
      window: ScaledSize;
      screen: ScaledSize;
    }) => {
      setDimensions(window);
    };

    const subscription = Dimensions.addEventListener('change', handleChange);

    // Cleanup the subscription on component unmount
    return () => {
      subscription?.remove();
    };
  }, []);

  const PAGE_WIDTH = dimensions.width;
  const centerOffset = PAGE_WIDTH / 2 - ITEM_SIZE / 2;

  const animationStyle: TAnimationStyle = React.useCallback(
    (value: number) => {
      'worklet';

      const itemGap = interpolate(
        value,
        [-3, -2, -1, 0, 1, 2, 3],
        [-30, -15, 0, 0, 0, 15, 30],
      );

      const translateX =
        interpolate(value, [-1, 0, 1], [-ITEM_SIZE, 0, ITEM_SIZE]) +
        centerOffset -
        itemGap;

      const translateY = interpolate(
        value,
        [-1, -0.5, 0, 0.5, 1],
        [
          EXTRA_VERTICAL_PADDING + 20,
          EXTRA_VERTICAL_PADDING + 5,
          EXTRA_VERTICAL_PADDING,
          EXTRA_VERTICAL_PADDING + 5,
          EXTRA_VERTICAL_PADDING + 20,
        ],
      );

      const scale = interpolate(
        value,
        [-1, -0.5, 0, 0.5, 1],
        [0.8, 0.85, 1.1, 0.85, 0.8],
      );

      return {
        transform: [
          {
            translateX,
          },
          {
            translateY,
          },
          { scale },
        ],
      };
    },
    [centerOffset],
  );

  return (
    <Carousel
      width={ITEM_SIZE}
      height={ITEM_SIZE}
      style={[
        styles.carousel,
        { width: PAGE_WIDTH, height: ITEM_SIZE + EXTRA_VERTICAL_PADDING * 2 },
        style,
      ]}
      loop={false}
      autoPlay={false}
      data={users ?? []}
      renderItem={({ index, item }: { index: number; item: User }) => (
        <UserCarouselItem
          index={index}
          item={item}
          onUserSelected={onUserSelected}
        />
      )}
      customAnimation={animationStyle}
    />
  );
};

export default UserCarousel;
