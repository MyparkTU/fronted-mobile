import * as React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

const buttonImageReport = require('../../assets/button/btnProblem.png');
const buttonImageNavi = require('../../assets/button/btnRoute.png');
const imageMap = require('../../assets/map/fullTsePark2.png');

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default function App() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={imageMap} />
            <Text style={{fontSize: 20, color: '#343434'}}>
                ลานจอดรถคณะวิศวะ 1
            </Text>
            <Text style={{fontSize: 14, color: '#818181', marginBottom: 40}}>
                พื้นที่จอดรถสาธารณะ
            </Text>
            <View style={styles.btn}>
                <TouchableOpacity onPress = {() => navigation.navigate('Map', {}) }>
                    <Image source={buttonImageNavi}/>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => navigation.navigate('Report', {}) }>
                    <Image source={buttonImageReport}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        alignSelf: 'center',
        flexDirection: 'row'
    }
});