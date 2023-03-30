import { StackScreenProps } from '@react-navigation/stack';
import { Text, View, ScrollView, Image, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigation/NavigationController';
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';



const { height: screenHeight } = Dimensions.get('screen')


export interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };


export const DetailScreen = ({ route: { params: movie }, navigation }: Props) => {

    const imageUri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const { isLoading, movieById, cast } = useMovieDetails(movie.id);

    return (
        <ScrollView>

            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri: imageUri }}
                        style={styles.posterImage}
                    />
                </View>
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>

            {
                (isLoading)
                    ? <ActivityIndicator size={40} color="grey" style={{ marginTop: 20 }} />
                    : <MovieDetails cast={cast} movieById={movieById!}/>
            }

            <TouchableOpacity 
                style={styles.backButton}
                onPress={() => navigation.pop()}
            >
                <Icon 
                    color='white'
                    name='chevron-back-outline'
                    size={50}
                />
            </TouchableOpacity>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    posterImage: {
        flex: 1,
    },
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 7,
        elevation: 10
    },
    imageBorder: {
        flex: 1,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        overflow: 'hidden'
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black'
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.9
    },
    backButton : {
        position: 'absolute',
        top: 20,
        zIndex: 999,
        elevation: 5
    }
});