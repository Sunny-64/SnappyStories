import { View, Text, ImageBackground, FlatList, ListRenderItem, NativeUIEvent, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import styles from './style'
import { book1, book2, book3 } from '../../assets/jpg'


interface ICarousel {
  title: string
  description: string
  image: any
}

const DATA: ICarousel[] = [
  {
    title: 'Hello world',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    image: book1,
  },
  {
    title: 'Hello world',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    image: book2,
  },
  {
    title: 'Hello world',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    image: book3,
  },
]

const Carousel = () => {
  const [activeIndicator, setActiveIndicator] = useState<number>(0);
  const { width } = Dimensions.get("window");
  const flatListRef = useRef<FlatList<ICarousel>>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const nextIndex = (activeIndicator + 1) % DATA.length;

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      setActiveIndicator(nextIndex);
    }, 2000);

    return () => {
      clearInterval(intervalRef.current!);
    };
  }, [activeIndicator]);

  const getItemLayout = (data: ICarousel[] | null | undefined, index: number) => ({
    length: width,
    offset: width * index,
    index,
  });


  const renderItem: ListRenderItem<ICarousel> = ({ item }: { item: ICarousel }) => {
    return (
      <View style={styles.container}>
        <ImageBackground source={item?.image} style={styles.img}>
          <View style={styles.overlay}>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.description}>{item?.description}</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }

  const scrollIndicators = () => {
    return (
      <View style={styles.indicatorsContainer}>
        {DATA.map((item, index) => (
          index === activeIndicator ?
            <View key={index} style={styles.activeIndicator}></View> :
            <View key={index} style={styles.indicator}></View>
        ))}
      </View>
    )
  }

  const handleScroll = (event: { nativeEvent: { contentOffset: { x: number } } }) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const activeSlide = Math.ceil(scrollPosition / width);
    setActiveIndicator(activeSlide);
  }

  return (
    <View>
      <FlatList
        data={DATA}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        // getItemLayout={getItemLayout}
        getItemLayout={getItemLayout}
        onScroll={handleScroll}
        ref={flatListRef}
      />

      {scrollIndicators()}
    </View>

  )
}

export default Carousel