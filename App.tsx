import 'react-native-gesture-handler';
import { NavigationController } from './src/navigation/NavigationController';
import { NavigationContainer } from '@react-navigation/native';
//import { FadeScreen } from './src/screens/FadeScreen';


export const App = () => {
    return (
        <NavigationContainer>
            <NavigationController />
        </NavigationContainer>
    )
}