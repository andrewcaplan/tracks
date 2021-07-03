import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{track.name}</Text>
            <MapView
            initialRegion={{
                longitudeDelta: 0.01,
                latitudeDelta: 0.01,
                ...initialCoords
            }}
            style={styles.map}
            >
                <Polyline coordinates={track.locations.map(loc => loc.coords)} />
            </MapView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    map: {
        height: 300,
        width: "100%"
,    },
    name: {
        fontSize: 48,
        marginBottom: 20,
    }
});

export default TrackDetailScreen;