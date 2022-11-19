import React, { useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  LogBox
} from "react-native";
import { useSelector } from 'react-redux';
import MapViewDirections from "react-native-maps-directions";
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

const alertcar = require("../assets/icon/AlertCar.png");
const alertre = require("../assets/icon/ReportAlert.png");
const GOOGLE_API_KEY = "AIzaSyCH9insydnCX6StGLAx-TzqG-VXhHRQeR0"

const buttonImageReport = require('../assets/button/problem.png');
const buttonImageOut = require('../assets/button/out.png');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const {width: SCREEN_WIDTH} = Dimensions.get('window');

function App() {
  const navigation = useNavigation();
  const { park, parkInfo, parkLatitude, parkLongtitude, parkEmptyslot, currentLatitude, currentLongtitude } = useSelector(state => state.dbReducer);
  const { width, height } = Dimensions.get("window");
  LogBox.ignoreLogs(['MapViewDirections Error: Missing API Key'])
  LogBox.ignoreLogs(['Warning: Failed prop type: The prop `apikey` is marked as required in `MapViewDirections`, but its value is `undefined`.'])

  const [destination] = useState({
    latitude: Number(parkLatitude),
    longitude: Number(parkLongtitude),
  });

  const [origin, setOrigin] = useState({ 
    latitude: Number(currentLatitude),
    longitude: Number(currentLongtitude),
  });
 
  const LATITUDE_DELTA = 0.015
  const LONGITUDE_DELTA = 0.015
  const INITIAL_POSITION = {
    latitude: origin.latitude,
    longitude: origin.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };


  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState(0);
  const [car, setCar] = useState(0);
  const [directionsResponse, setDirectionsResponse] = useState(null)

  const traceRouteOnReady = (args) => {
    if (args) {
      setDistance(args.distance)
      setDuration(args.duration)
    }

  }

  React.useEffect(() => {
    getLocationPermission();
  }, [])


  const getLocationPermission = async() => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted') {
      alert('Permission denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const current = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    }
    setOrigin(current);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
      >
        <Marker 
          coordinate={origin}
          onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
        >
          <Image source={require('../assets/icon/UserLocation.png')} style={{height: 35, width:35 }} />
        </Marker>
        <MapViewDirections origin={origin} destination={destination}/>
        <MapView.Marker
          coordinate={destination}
          title={park}
          description={parkInfo}
        />

        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey= {GOOGLE_API_KEY}
          strokeColor="#5086EC"
          strokeWidth={5}
          onReady={traceRouteOnReady}
        />
      </MapView>

      


      <View style={styles.bottom}>
        <Text style={styles.texttime}>{Math.ceil(duration)} นาที {" "}
        <Text style={styles.textdis}>({distance.toFixed(2)} กม.) {" "}
        <Text style={styles.emptylot}>จอดได้ {parkEmptyslot} ที่</Text></Text></Text>
        
        
        {/* <Text style={styles.textsame}>
          <Image source={alertcar} style={styles.alertim} />
          {"  "}มีรถ {car} คันกำลังมายังลานจอดนี้
        </Text> */}
        <View style={styles.btn}>
          <TouchableOpacity onPress = {() => navigation.navigate('Car') }>
            <Image source={buttonImageOut} style={{width: 150, height: 85.55, marginRight: 10}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => navigation.navigate('Report') }>
              <Image source={buttonImageReport} style={{width: 150, height: 86.69}}/>
          </TouchableOpacity>
          {/* <TouchableOpacity  onPress = {() => navigation.navigate('Car')}>
            <Text style={styles.textbtn}>ออกจากการนำทาง</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => navigation.navigate('Report')}>
            <Image source={alertre} style={styles.alertre} />
            <Text style={styles.reportbtn}>แจ้งปัญหา</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  bottom: {
    position: "absolute",
    top: SCREEN_HEIGHT/1.8,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#FFFFFF",
  },

  texttime: {
    top: 25,
    left: 30,
    fontSize: 22,
    color: "#50C377",
  },
  textdis: {
    color: "black",
    left: 100,
    fontSize: 22,
    paddingLeft:10
  },

  emptylot: {
    fontSize: 16,
  },
  alertim: {
    top: 5,
    width: 15,
    height: 15,
  },
  textsame: {
    paddingLeft: 10,
    top: 37,
    left: 20,
    fontSize: 15,
    color: "#818181",
  },

  btnview: {
    top: SCREEN_HEIGHT/10,
    left: SCREEN_WIDTH/13,
    width: SCREEN_WIDTH/2.5,
    height: SCREEN_HEIGHT/9,
    borderRadius: 10,
    backgroundColor: "#045497",
  },
  textbtn: {
    top: SCREEN_HEIGHT/25,
    justifyContent: 'center',
    textAlign: "center",
    color: "#FFFFFF",
  },
  btnreport: {
    position: 'absolute',
    top: SCREEN_HEIGHT/6.2,
    left: SCREEN_WIDTH/1.9,
    width: SCREEN_WIDTH/2.5,
    height: SCREEN_HEIGHT/9,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
  },
  reportbtn: {
    top: SCREEN_HEIGHT/25,
    textAlign: "center",
    color: "#045497",
  },
  alertre: {
    top: 15,
    left: 50,
    width: 50,
    height: 40,
  },
  btn: {
    alignSelf: 'center',
    flexDirection: 'row',
    top: SCREEN_HEIGHT/10
  }
});

export default App;