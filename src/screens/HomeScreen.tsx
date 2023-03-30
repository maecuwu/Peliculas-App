import { Text, View, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';


const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const { nowPlaying, isLoading, popular, topRated, upcoming } = useMovies();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={50} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>

                {/* Carrusel principal */}
                <View style={{ height: 440 }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }) => <MovieCard movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>

                {/* Peliculas populares */}
                
                <HorizontalSlider movies={popular} title="Populares"/>
                <HorizontalSlider movies={topRated} title="Top Rated"/>
                <HorizontalSlider movies={upcoming} title="Upcoming"/>

            </View>
        </ScrollView>
    )
}