import { StyleSheet, Text, View, SafeAreaView, VirtualizedList, ScrollView, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { setPark, setParkInfo } from '../redux/action';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HeadImage = require('../assets/images/HeaderHome.png');
const imageMap = require('../assets/map/tsePark2.png');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default function App() {
  const navigation = useNavigation();
  const { park, parkInfo } = useSelector(state => state.dbReducer);
  const dispatch = useDispatch();

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

  //body
  const data = [
    {
      id: 1,
      title: "Item 1"
    },
    {
      id: 2,
      title: "Item 2"
    },
    {
      id: 3,
      title: "Item 3"
    },
    {
      id: 4,
      title: "Item 4"
    },
    {
      id: 5,
      title: "Item 5"
    }
  ];

  const getItem = (data, index) => {
    return data[index]
  };

  const loadMoreItems = () => {
    data.push({
      title: `New Item ${data.length}`,
      id: data.length
    });
  }
  
  const Item = (item) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  const Separator = () => (
    <View style={styles.divider}></View>
  );

  const EmptyList = () => <Text style={styles.title}>No items :(</Text>;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.btn}>
          <TouchableOpacity onPress = {() => navigation.navigate('TSE_1', {}) } style={{flexDirection: 'row'}}>
            <Image source={imageMap} />
            <Text style={styles.btnMap}>
              {park + "\n"}
              <Text style={{fontSize: 14, color: '#818181'}}>
                  {parkInfo}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        {/* <VirtualizedList
          style={styles.list}
          data={data}
          initialNumToRender={4}
          ListEmptyComponent={EmptyList}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => <Item title={item.title} key={item.id} />}
          keyExtractor={item => item.key}
          getItemCount={data => data.length}
          getItem={getItem}
          onEndReached={loadMoreItems}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    height: 100,
    alignSelf: 'stretch',
    padding: 16,
    margin: 16,
    backgroundColor: "#aa0022",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20
  },
  list: {
    alignSelf: "stretch"
  },
  divider: {
    height: 2,
    backgroundColor: "#EBEBEB"
  },
  btnMap: {
    marginLeft: 10,
    alignSelf: 'stretch',
    color: '#343434',
    fontSize: 20
  },
  btn: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#FFF',
    height: 114.5,
    borderBottomColor: '#EBEBEB',
    marginTop: 10,
    width: '95%',
    alignSelf: 'center'
  },
  image: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 3,
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
    borderRadius: 10,
    marginTop: 10
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
});

// import React from "react";
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';

// const imageMap = require('../assets/map/tsePark2.png');

// export default function Car() {
//     const navigation = useNavigation();
//     return (
//         <ScrollView style={styles.contain}>
//             <View style={styles.btn}>
//                 <TouchableOpacity onPress = {() => navigation.navigate('TSE_1', {}) } style={{flexDirection: 'row'}}>
//                     <Image source={imageMap} />
//                     <Text style={styles.btnMap}>
//                         ลานจอดรถคณะวิศวะ 2{"\n"}
//                         <Text style={{fontSize: 14, color: '#818181'}}>
//                             พื้นที่จอดรถสาธารณะ
//                         </Text>
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//         </ScrollView>
//     )
// }

// const styles = StyleSheet.create({
//     contain: {
//         flex: 1,
//         backgroundColor: '#FFF'
//     },
//     text: {
//         color: 'black',
//         alignSelf: 'center',
//         top: 53,
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     btnMap: {
//         marginLeft: 10,
//         alignSelf: 'stretch',
//         color: '#343434',
//         fontSize: 20
//     },
//     btn: {
//         flexDirection: 'row',
//         borderWidth: 1,
//         borderColor: '#FFF',
//         height: 114.5,
//         borderBottomColor: '#818181'
//     }
// })