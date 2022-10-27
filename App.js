import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import React from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image } from "react-native";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Provider } from 'react-redux';
import { Store } from './redux/store';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const HeadImage = require('./assets/images/HeaderHome.png');

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

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
  const parkPic = [
    {title: 'ลานจอดรถคณะวิศวะ 1', image: require('./assets/map/tsePark2.png')},
    {title: 'ลานจอดรถคณะวิศวะ 2', image: require('./assets/map/tsePark2.png')},
    {title: 'ลานจอดรถคณะวิศวะ 3', image: require('./assets/map/tsePark2.png')},
    {title: 'ลานจอดรถคณะ SIIT', image: require('./assets/map/siitPark.png')},
  ];

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={Store}>
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
            {/* <View style={styles.search}>
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
            </View> */}
            <View style={styles.search} >
                <SelectDropdown
                data={search}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText={'จอดไหนดี?'}
                
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
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
                  return <FontAwesome name={'search'} color={'#343434'} size={18} />;
                }}
                // renderCustomizedButtonChild={(selectedItem, index) => {
                //   return (
                //     <View style={styles.dropdown3BtnChildStyle}>
                //       <MaterialCommunityIcons name="magnify" color={'#343434'} size={20} />
                //     </View>
                //   );
                // }}
              />
            </View>
          </ImageBackground>
          <View style={styles.contain}>
            <View style={{marginTop: 14}}/>
            <Navigation />
          </View>
        </View>
      </Provider>
    );
  }
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
    search: {
      alignSelf: 'center',
      flexDirection: 'row',
      fontSize: 15,
      height: 50,
      marginLeft: 50,
      marginRight: 50,
      marginBottom: 12,
      borderRadius: 10,
    },
    dropdown1BtnStyle: {
      width: SCREEN_WIDTH / 1.1,
      height: 50,
      backgroundColor: '#FAFAFA',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#035397',
    },
    dropdown1BtnTxtStyle: {color: '#343434', textAlign: 'left'},
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF', borderRadius: 10},
    dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#B3B3B3'},
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
    dropdown1SelectedRowStyle: {backgroundColor: '#B3B3B3'},
    dropdown1searchInputStyleStyle: {
      backgroundColor: '#EFEFEF',
      borderRadius: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#444',
    },
})
