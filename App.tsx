import 'react-native-gesture-handler';
import { NavigationController } from './src/navigation/NavigationController';
import { NavigationContainer } from '@react-navigation/native';


export const App = () => {
    return (
        <NavigationContainer>
            <NavigationController />
        </NavigationContainer>
    )
}