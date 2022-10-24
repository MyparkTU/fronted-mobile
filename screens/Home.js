import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from '../navigation';
import React from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const HeadImage = require('../assets/images/HeaderHome.png')

export default function Home() {
    return (
      <SafeAreaProvider>
        <View style={{flex: 1}}>
            <ImageBackground source={HeadImage} style={styles.image}>
              <View style={styles.viewHead}>
                <Text style={styles.textHead1}>
                  หาสถานที่จอดรถของ
                </Text>
                <Text style={styles.textHead1}>
                  คุณได้เลย!
                </Text>
              </View>
              <View style={{marginTop: 30}}/>
              <View style={styles.search}>
                <MaterialCommunityIcons
                    style={styles.icon}
                    name={'magnify'}
                    size={20}
                    color='#343434' 
                />
                <TextInput
                  placeholder='จอดไหนดี?'
                  placeholderTextColor={'#343434'}
                  paddingLeft={10}
                  style={styles.textInput}
                />
              </View>
            </ImageBackground>
            <View style={styles.contain}>
                <Text style={styles.text} />
            </View>
        </View>
      </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    contain: {
        height: SCREEN_HEIGHT,
        width: '100%',
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        top: SCREEN_HEIGHT / 3,
        borderRadius: 15
    },
    text: {
        alignSelf: 'center',
    },
    image: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 2.8
        // justifyContent: 'center',
    },
    viewHead: {
        alignItems: 'flex-start',
        marginLeft: SCREEN_WIDTH / 10,
        marginTop: SCREEN_HEIGHT / 15 
    },
    textHead1: {
        color: '#035397',
        fontSize: 24,
        fontWeight: 'bold',
    },
    search: {
        alignSelf: 'center',
        flexDirection: 'row',
        fontSize: 15,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#FAFAFA',
        width: '90%',
        justifyContent: 'center',
        top: SCREEN_HEIGHT / 100,
    },
    textInput: {
        alignSelf: 'stretch',
        fontSize: 16,
        color: '#035397',
        fontWeight: 'bold',
        width: '90%',
        left: -2
    },
    icon: {
        left: 4,
        alignSelf: 'center'
    },
})
