import React, {useRef} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native'

import NextButton from '../buttons/NextButton';
import PreviousButton from '../buttons/PreviousButton';


import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

export default function CarouselDisplay({data, page, state, setState}) {
    const carouselRef = useRef(null);

    function testFunction(index) {
        setState(index)
    }

    const goForward = () => {
        carouselRef.current.snapToNext();
      };
    
    const goBack = () => {
        carouselRef.current.snapToPrev();
      }


    function renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    resizeMode={'contain'}
                    {...parallaxProps}
                />
            </View>
                )}
        return (
            <View style={{flex: 2}}>
                <Carousel
                    ref={carouselRef}
                    sliderWidth={screenWidth}
                    sliderHeight={screenWidth} 
                    itemWidth={screenWidth - 110}
                    data={data[page]}
                    renderItem={renderItem}
                    hasParallaxImages={true}
                    enableSnap={true}
                    onSnapToItem={testFunction}
    
                />
            <View style={styles.carouselButtonContainer}>
                    <PreviousButton goBack={goBack} />
                    <Pagination
                        dotsLength={data[page].length}
                        activeDotIndex={state}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: 'rgba(255, 255, 255, 0.92)'
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                    <NextButton goForward={goForward} />
            </View>
            </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        borderRadius: 20,
        marginBottom: Platform.select({ios: 0, android: 1}),
        marginTop: 30,
    },
    image: {
        resizeMode: 'contain',
        borderWidth: 6
    },
    item: {
        width: screenWidth - 110,
        height: screenWidth,
      },
    carouselButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})