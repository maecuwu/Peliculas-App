import { Text, View } from 'react-native';
import { MovieById } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creaditsInterface';
import Icon from 'react-native-vector-icons/Ionicons'
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';


interface Props {
    movieById: MovieById;
    cast: Cast[];
}


export const MovieDetails = ({ movieById, cast }: Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>

                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name='star-outline'
                        color="grey"
                        size={20}
                    />

                    <Text style={{ marginHorizontal: 6, fontSize: 17 }}>{movieById.vote_average}</Text>

                    <Text style={{ fontSize: 17 }}>
                        - {movieById.genres.map(g => g.name).join(", ")}
                    </Text>

                </View>

                <View>
                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black' }}>
                        Historia
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                        {movieById.overview}
                    </Text>

                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black' }}>
                        Presupuesto
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                        {
                            new Intl.NumberFormat('en-US',
                                { style: 'currency', currency: 'USD' }).format(movieById.budget)
                        }
                    </Text>
                </View>

                <View style={{ marginTop: 10, marginBottom: 100 }}>
                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black' }}>
                        Actores
                    </Text>

                    <FlatList
                        data={cast}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <CastItem actor={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ height: 65 }}
                    />
                </View>

            </View>
        </>
    )
}