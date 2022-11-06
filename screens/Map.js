import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSelector } from 'react-redux';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapViewDirections from "react-native-maps-directions";
import * as Location from 'expo-location';

const alertcar = require("../assets/icon/AlertCar.png");
const alertre = require("../assets/icon/ReportAlert.png");
const carlocation = require("../assets/icon/CarLocation.png");
const GOOGLE_API_KEY = "AIzaSyCH9insydnCX6StGLAx-TzqG-VXhHRQeR0"

function App() {
  const { park, parkInfo, parkLatitude, parkLongtitude, parkEmptyslot } = useSelector(state => state.dbReducer);
  const { width, height } = Dimensions.get("window");

  const [destination, setdes] = useState({
    latitude: Number(parkLatitude),
    longitude: Number(parkLongtitude),
  });

  const [origin, setOrigin] = useState({ 
    latitude: 0,
    longitude: 0,
  });
 
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = (destination.latitude - origin.latitude)* 2.5
  const LONGITUDE_DELTA = (destination.longitude - origin.longitude)* 2.5
  const INITIAL_POSITION = {
    latitude: (destination.latitude  + origin.latitude)/2,
    longitude: (destination.latitude  + origin.longitude)/2,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };


  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState(0);
  const [lot, setLot] = useState(0);
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


  async function getLocationPermission() {
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
        <MapView.Marker 
          Image={carlocation}
          draggable
          coordinate={origin}
          onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
        />
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
        <Text style={styles.emptylot}>ว่าง {lot} ที่</Text></Text></Text>
        
        
        <Text style={styles.textsame}>
          <Image source={alertcar} style={styles.alertim} />
          มีรถ {car} คันกำลังมายังลานจอดนี้
        </Text>
        <TouchableOpacity style={styles.btnview}>
          <Text style={styles.textbtn}>ออกจากการนำทาง</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnreport}>
          <Image source={alertre} style={styles.alertre} />
          <Text style={styles.reportbtn}>แจ้งปัญหา</Text>
        </TouchableOpacity>
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
    top: 520,
    width: 430,
    height: 295,
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
    width: 20,
    height: 20,
  },
  textsame: {
    paddingLeft: 5,
    top: 32,
    left: 30,
    fontSize: 15,
    color: "#818181",
  },

  btnview: {
    position: "absolute",
    top: 100,
    left: 45,
    width: 150,
    height: 85,
    borderRadius: 10,
    backgroundColor: "#045497",
  },
  textbtn: {
    top: 29,
    textAlign: "center",
    color: "#FFFFFF",
  },
  btnreport: {
    position: "absolute",
    top: 100,
    left: 230,
    width: 150,
    height: 85,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
  },
  reportbtn: {
    top: 20,
    textAlign: "center",
    color: "#045497",
  },
  alertre: {
    top: 15,
    left: 50,
    width: 50,
    height: 40,
  },
});

export default App;