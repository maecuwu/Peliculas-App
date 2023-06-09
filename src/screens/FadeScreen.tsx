import { Animated, View, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

    const {opacity, fadeIn, fadeOut} = useFade();

    return (
        <View style={{ backgroundColor: 'grey', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={{
                backgroundColor: '#084F6A',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                opacity
            }}/>
            <Button
                title='Fade in'
                onPress={fadeIn}
            />
            <Button
                title='Fade out'
                onPress={fadeOut}
            />
        </View>
    )
}