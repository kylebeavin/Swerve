import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { MapView } from "expo";

class KillaScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            markers: [],
        }
    }
    static navigationOptions = {
        title: 'Killa',
    };

    componentDidMount() {
        this.fetchMarkerData();
    }

    fetchMarkerData() {
        fetch('https://feeds.citibikenyc.com/stations/stations.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    markers: responseJson.stationBeanList,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return(
            <MapView
            style={{
              flex: 1
            }}
            initialRegion={{
              latitude: 39.768402,
              longitude: -86.158066,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
        );
    }
} 
export default KillaScreen;