import { Text, View, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creaditsInterface';



interface Props {
    actor: Cast
}

export const CastItem = ({ actor }: Props) => {

    const imageUri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;


    return (
        <View style={styles.container}>
            {
                actor.profile_path
                    ? <Image source={{ uri: imageUri }} style={{ width: 50, height: 50, borderRadius: 10 }} />
                    : <Image source={{ uri: 'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-HD-Photo.png' }}
                        style={{ width: 50, height: 50, borderRadius: 10 }} />
            }

            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', opacity: 0.5 }}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 7,
        elevation: 10,
        marginTop: 10,
        marginRight: 10,
        paddingRight: 10,
    }
});