import { StyleSheet, Text, View, SafeAreaView, VirtualizedList, ScrollView, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { setPark, setParkInfo, setParkImage, setParkImage2, setParkEmptyslot, setParkLatitude, setParkLongtitude } from '../redux/action';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState, useCallback } from 'react';
import { useFonts } from 'expo-font';

const HeadImage = require('../assets/images/HeaderHome.png');
const imageMap = require('../assets/map/tsePark2.png');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default function App() {
  const [fontsLoaded] = useFonts({
    'Prompt-Regular': require('../assets/fonts/Prompt-Regular.ttf'),
  });
  const navigation = useNavigation();
  const { park, parkInfo, park2 } = useSelector(state => state.dbReducer);
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getPark = async () => {
     try {
      // const response = await fetch('http:/192.168.1.132:3001/places/All');
      const response = await fetch('http:/172.20.10.3:3001/places/All');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPark();
    loadFont();
  }, []);

  const loadFont = async() => {
    try {
      fontsLoaded
    } catch (error) {
      console.error(error);
    }
  }

  if (!fontsLoaded) {
    return null;
  }

  const search = [
    "ลานจอดรถคณะวิศวะ 1", 
    "ลานจอดรถคณะวิศวะ 2", 
    "ลานจอดรถคณะวิศวะ 3", 
    "ลานจอดรถคณะ SIIT",
    "ลานจอดรถยิม 4",
    "ลานจอดรถหลังสระว่ายน้ำ",
    "ลานจอดรถหลังClass",
    "ลานจอดรถหน้ายิม 7",
    "ลานจอดรถหลังยิม 7",
    "ลานจอดรถหลังโรงอาหาร sc",
    "ลานจอดรถใต้สวนป๋วย",
    "ลานจอดรถหลังสวนป๋วย",
    "ลานจอดรถข้างบร.5",
    "ลานจอดรถตรงข้ามบร.4",
    "ลานจอดรถหลังโรงอาหารgreen",
    "ลานจอดรถข้างตึกหอใน M"
  ]

  return (
    <SafeAreaView style={{flex: 0.5}}>
      <ImageBackground source={HeadImage} style={styles.image}>
        <View style={styles.viewHead}>
          <Text style={styles.textHead1}>
            หาสถานที่จอดรถของ
          </Text>
          <Text style={styles.textHead1}>
            คุณได้เลย!
          </Text>
        </View>
        <View style={styles.search} >
          <MaterialCommunityIcons 
            style={styles.icon}
            name={'magnify'}
            size={20}
            color='#343434'
          />
            <SelectDropdown
            data={data}
            onSelect={(selectedItem, index) => {
              // console.log(selectedItem, index);
              navigation.navigate('TSE_1',
                dispatch(setPark(selectedItem.name)), 
                dispatch(setParkInfo(selectedItem.description)), 
                dispatch(setParkEmptyslot(selectedItem.quantity)),
                dispatch(setParkLatitude(selectedItem.latitude)),
                dispatch(setParkLongtitude(selectedItem.longtitude)),
                dispatch(setParkImage(selectedItem.img)))
            }}
            defaultButtonText={'จอดไหนดี?'}
            buttonTextAfterSelection={(item, index) => {
              return  item.name;
            }}
            rowTextForSelection={(item, index) => {
              return item.name;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#035397'} size={15} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            selectedRowStyle={styles.dropdown1SelectedRowStyle}
            search
            searchInputStyle={styles.dropdown1searchInputStyleStyle}
            searchPlaceHolder={'Search here'}
            searchPlaceHolderColor={'darkgrey'}
            renderSearchInputLeftIcon={() => {
              return <FontAwesome name={'search'} color={'#343434'} fontFamily='Prompt-Regular' size={18} />;
            }}
          />
        </View>
        </ImageBackground>
        <View style={{backgroundColor: '#fff', borderTopLeftRadius: 50, borderTopRightRadius: 50, height: 5, width: '100%'}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 3,
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
        fontFamily: 'Prompt-Regular'
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
        left: 3,
        alignSelf: 'center'
    },
    search: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
        width: SCREEN_WIDTH / 1.1,
        height: 50,
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#035397',
        alignSelf: 'center',
        flexDirection: 'row',
        fontFamily: 'Prompt-Regular'
    },
    dropdown1BtnStyle: {
        width: SCREEN_WIDTH / 1.1,
        height: 48,
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FAFAFA',
        width: '93%',
    },
    dropdown1BtnTxtStyle: {color: '#343434', textAlign: 'left', bottom: 2, left: 10, fontFamily: 'Prompt-Regular'},
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF', borderRadius: 10},
    dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#B3B3B3'},
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'left', fontFamily: 'Prompt-Regular'},
    dropdown1SelectedRowStyle: {backgroundColor: '#B3B3B3'},
    dropdown1searchInputStyleStyle: {
        backgroundColor: '#EFEFEF',
        borderRadius: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
    }
});