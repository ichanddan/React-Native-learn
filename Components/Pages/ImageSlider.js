import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SLIDE_WIDTH = SCREEN_WIDTH * 0.8;
const SLIDE_SPACING = (SCREEN_WIDTH - SLIDE_WIDTH) / 2;

const useSlider = (data) => {
  const flatListRef = useRef(null);
  const scrollX = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event) => {
    scrollX.value = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(scrollX.value / SLIDE_WIDTH);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };

  return { flatListRef, scrollX, currentIndex, onScroll, scrollToIndex };
};

const Slide = ({ item, index, scrollX }) => {
  const inputRange = [(index - 1) * SLIDE_WIDTH, index * SLIDE_WIDTH, (index + 1) * SLIDE_WIDTH];

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.8, 1, 0.8],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <Animated.View style={[styles.slideContainer, animatedStyle]}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </Animated.View>
  );
};

const ImageSlider = ({ data }) => {
  const { flatListRef, scrollX, currentIndex, onScroll } = useSlider(data);

  const renderItem = ({ item, index }) => (
    <Slide item={item} index={index} scrollX={scrollX} />
  );

  const NextSlide = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    const nextItem = data[nextIndex];

    const animatedStyle = useAnimatedStyle(() => {
      const inputRange = [currentIndex * SLIDE_WIDTH, (currentIndex + 1) * SLIDE_WIDTH];
      const translateX = interpolate(
        scrollX.value,
        inputRange,
        [SCREEN_WIDTH * 0.3, 0],
        Extrapolate.CLAMP
      );

      const scale = interpolate(
        scrollX.value,
        inputRange,
        [0.8, 0.6],
        Extrapolate.CLAMP
      );

      const opacity = interpolate(
        scrollX.value,
        inputRange,
        [1, 0],
        Extrapolate.CLAMP
      );

      return {
        transform: [{ translateX }, { scale }],
        opacity,
      };
    });

    return (
      <Animated.View style={[styles.nextSlideContainer, animatedStyle]}>
        <Image source={{ uri: nextItem.image }} style={styles.nextImage} />
        <Text style={styles.nextTitle}>{nextItem.title}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={SLIDE_WIDTH}
        decelerationRate="fast"
        contentContainerStyle={styles.flatListContent}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
      <NextSlide />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContent: {
    paddingHorizontal: SLIDE_SPACING,
  },
  slideContainer: {
    width: SLIDE_WIDTH,
    alignItems: 'center',
  },
  image: {
    width: SLIDE_WIDTH,
    height: SLIDE_WIDTH * 1.5,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  nextSlideContainer: {
    position: 'absolute',
    right: -SCREEN_WIDTH * 0.2,
    top: '50%',
    alignItems: 'center',
  },
  nextImage: {
    width: SLIDE_WIDTH * 0.5,
    height: SLIDE_WIDTH * 0.75,
    borderRadius: 5,
  },
  nextTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ImageSlider;