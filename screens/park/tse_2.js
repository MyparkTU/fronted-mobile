import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import ImagesSwiper from "react-native-image-swiper";

const buttonImageReport = require('../../assets/button/btnProblem.png');
const buttonImageNavi = require('../../assets/button/btnRoute.png');
const imageMap = require('../../assets/map/fullTsePark2.png');

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default function App() {

    const navigation = useNavigation();
    const { park, parkInfo, parkImage, parkImage2, parkEmptyslot } = useSelector(state => state.dbReducer);
    const parkImageStack = [String(parkImage), String(parkImage2)]
    return (
        <View style={styles.container}>
            <View style={{top: 30, borderRadius: 40, borderColor: 'black'}}>
                <ImagesSwiper 
                    images={parkImageStack}
                    autoplay={true}
                    autoplayTimeout={4} 
                    showsPagination={true}
                    width={SCREEN_WIDTH - 40} 
                    height={(SCREEN_HEIGHT / 2)}
                />
            </View>
            <View style={{bottom: SCREEN_HEIGHT/3, alignItems: 'center'}}>
                <Text style={{fontSize: 20, color: '#343434', fontFamily: 'Prompt-Regular'}}>
                    {park}
                </Text>
                <Text style={{fontSize: 14, color: '#818181', marginBottom: 40, fontFamily: 'Prompt-Regular'}}>
                    {parkInfo + " จอดได้ " + parkEmptyslot + " ที่"}
                </Text>
                <View style={styles.btn}>
                    <TouchableOpacity onPress = {() => navigation.navigate('Map') }>
                        <Image source={buttonImageNavi} style={{width: 150, height: 93, marginRight: 10}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => navigation.navigate('Report') }>
                        <Image source={buttonImageReport} style={{width: 150, height: 93}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    btn: {
        alignSelf: 'center',
        flexDirection: 'row'
    }
});