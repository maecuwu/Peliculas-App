import { Animated } from 'react-native';
import { useRef } from 'react';


export const useFade = () => {

    const opacity = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {

        Animated.timing(
            opacity, { toValue: 1, duration: 1000, useNativeDriver: true }
        ).start();

    }

    const fadeOut = () => {

        Animated.timing(
            opacity, { toValue: 0, duration: 1000, useNativeDriver: true }
        ).start();

    }

    return {
        opacity,
        fadeIn,
        fadeOut
    }
}
