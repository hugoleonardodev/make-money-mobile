import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

import { fox, cat, background, element, lion } from './images';
// import { CustomPagination } from './CustomPagination';

const { width, height } = Dimensions.get('window');

const newImage = [lion, fox, cat, background, element];
const image = (index) => ({ image: newImage[index % newImage.length] });

const items = Array.from(Array(5)).map((_, index) => image(index));

export default () => {
  return (
    <SwiperFlatList
      autoplay
      //   autoplayDelay={0.5}
      index={3}
      autoplayLoop
      autoplayInvertDirection
      data={items}
      renderItem={({ item }) => (
        <Image style={styles.image} source={item.image} />
      )}
      //   showPagination
      //         PaginationComponent={CustomPagination}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 200,
  },
});
