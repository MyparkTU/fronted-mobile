import React, { useEffect, useState }  from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Button,
  Alert
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';


const pb = ["ที่จอดรถไม่เพียงพอ", "จอดคร่อมเลน", "จอดรถซ้อนคัน","การเฉี่ยวชน","ที่จอดชำรุด"];
const imageMap = require('../assets/map/fullTsePark2.png');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const aleartforsubmit = () => {
  Alert.alert('รายงานสำเร็จ!', 'ดำเนินการรายงานไปยังเจ้าหน้าที่เรียบร้อย')
};



export default function Report() {
  const navigation = useNavigation();
  const { park, parkInfo, park2, parkInfo2, parkLatitude, parkLongtitude, parkImage } = useSelector(state => state.dbReducer);
  const [head, setHead] = useState("");
  const [type, setType] = useState("");
  const [des, setDes] = useState("");
  const [data, setData] = useState([des + type + head]);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic: head, type:  type, description: des, img: park })
  };

  const postReport = async () => {
    try {
      await fetch('http:/172.20.10.6:3001/reports/create', requestOptions)
        .then(response => {
          response.json()
              .then(data => {
                Alert.alert('รายงานสำเร็จ!', 'ดำเนินการรายงานไปยังเจ้าหน้าที่เรียบร้อย')
              });
      })
    } catch (error) {
        console.error(error);
    }
  }

  return (
    
    <View style={styles.view}>
        <View style={styles.container}>
        <Image style={{width: 300, height: 180, borderRadius: 10}} source={{uri: parkImage}} />
          
        </View>
        
        <Text style={styles.textPet}>{park + "\n"}
          <Text style={{fontSize: 14, color: '#818181'}}>
            {parkInfo}
          </Text>
        </Text>
        <Text style={styles.textSub}>หัวข้อเรื่อง</Text>
        <Text style={styles.textCourse}>เลือกประเภทปัญหาที่พบ</Text>
        {/* <View style={styles.addIMG}>
                    <Button 
                        color='#14AAF5'
                        title="+ รูปภาพ"
                    />
        </View> */}
        <Text style={styles.textDes}>อธิบายปัญหาเพิ่มเติมจากที่คุณพบ</Text>
        <View style={styles.textInput}>
          <TextInput
            placeholder=""
            placeholderTextColor={"lightgrey"}
            paddingLeft={10}
            style={styles.subject}
            onChangeText={newText => setHead(newText)}
          />
        </View>
       
        <SelectDropdown
          data={pb}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setType(selectedItem);
          }}
          defaultButtonText={" "}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdownCourseBtnStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#C1C1C1"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          selectedRowStyle={styles.dropdown1SelectedRowStyle}
          search
          searchInputStyle={styles.dropdown1searchInputStyleStyle}
          searchPlaceHolderColor={"darkgrey"}
          renderSearchInputLeftIcon={() => {
            return <FontAwesome name={"search"} color={"#C1C1C1"} size={18} />;
          }}
        />
        <View style={styles.Description}>
          <TextInput
            placeholder=""
            placeholderTextColor={"lightgrey"}
            paddingLeft={10}
            style={styles.textInputDescription}
            onChangeText={newText => setDes(newText)}
          />
        </View>
        <View style={styles.btnSubmit}>
          <Button 
              color='#035397'
              title="รายงาน"
              onPress={postReport}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: SCREEN_HEIGHT,
    alignSelf: 'center'
  },
  image: {
    flex: 1,
  },
  textPet: {
    position: "absolute",
    top: 210,
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#100F0F",
  },
  textSub: {
    position: "absolute",
    top: 260,
    width: 178,
    height: 26,
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#100F0F",
  },
  textTerm: {
    position: "absolute",
    top: 240,
    width: 178,
    height: 26,
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#100F0F",
  },
  textCourse: {
    position: "absolute",
    top: 340,
    width: 300,
    height: 26,
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#100F0F",
  },
  textDes: {
    position: "absolute",
    top: 430,
    width: 300,
    height: 26,
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#100F0F",
  },
  textInput: {
    position: "absolute",
    top: 290,
    width: 294,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  subject: {
    fontSize: 20,
    width: "80%",
    top: 5,
    left: -2,
  },
  icon: {
    alignSelf: "center",
    left: 4,
  },
  

  dropdownCourseBtnStyle: {
    position: "absolute",
    top: 380,
    width: 200,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
  },

  dropdown1RowTxtStyle: { color: "#444" },
  dropdown1SelectedRowStyle: { backgroundColor: "#B3B3B3" },
  dropdown1searchInputStyleStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  Description: {
    position: "absolute",
    top: 470,
    width: 294,
    height: 90,
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  textInputDescription: {
    position: "absolute",
    top: 6,
  },
  iconTopLeft: {
    top: 4,
    left: 4,
    alignSelf: "flex-start",
  },
  btnSent: {
    left: -50,
    top: 570,
  },
  bottomView: {
    top: 670,
    flex: 1,
    width: "100%",
    height: 100,
    backgroundColor: "#FFBD59",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  btnRoom: {
    height: 26.04,
    width: 25,
    alignSelf: "center",
    top: 7,
  },
  btnPetition: {
    height: 26.48,
    width: 24,
    alignSelf: "center",
    top: 7,
  },
  btnCalendar: {
    height: 54,
    width: 54,
    alignSelf: "center",
    bottom: 20,
  },
  btnNoti: {
    height: 26,
    width: 24,
    alignSelf: "center",
    top: 7,
  },
  btnProblem: {
    height: 25,
    width: 28,
    alignSelf: "center",
    top: 7,
  },
  addIMG: {
    width: 118,
    height: 40,
    top: 405,
    borderRadius:10
  },
  btnSubmit: {
    width: 300,
    height: 50,
    top: 412,
    borderRadius:10
  },
  container: {
    paddingTop:20,
    alignSelf: 'center'
  },
  sizeIMG:{
    width:300,
    height:150,
  },
  btnMap: {
    alignSelf: 'stretch',
    color: '#343434',
    fontSize: 20
  }
});