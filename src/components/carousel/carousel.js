import React, {useRef} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native'

import NextBtn from '../buttons/nextBtn';
import PreviousBtn from '../buttons/previousBtn';


import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';


export default function CarouselDisplay({data, page, state, setState}) {
    const carouselRef = useRef(null);
    const { width: screenWidth } = Dimensions.get('window');

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
                <ParallaxImage
                    source={{ uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}` }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            )}
    return (
        <View style={{flex: 2}}>
        <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            itemWidth={screenWidth - 70}
            data={data[page]}
            renderItem={renderItem}
            hasParallaxImages={true}
            enableSnap={true}
            onSnapToItem={testFunction}        
        />
        <View style={styles.carouselButtonContainer}>
                    <PreviousBtn goBack={goBack} />
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
                    <NextBtn goForward={goForward} />
                    </View>
                    </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        borderRadius: 20,
        marginVertical: 45,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 20,  
        resizeMode: 'contain',
    },
    carouselButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})