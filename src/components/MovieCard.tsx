import { CommonActions, useNavigation } from '@react-navigation/native';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';


interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}


export const MovieCard = ({ movie, height = 420, width = 300 }: Props) => {

    const navigation = useNavigation();

    const imageUri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            style={{ 
                width, 
                height, 
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7 
            }}
            onPress={() => navigation.dispatch(
                CommonActions.navigate('DetailScreen', movie)
            )}
        >

            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: imageUri
                    }}
                    style={styles.image}
                />
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 7,
        elevation: 10,
    }
});