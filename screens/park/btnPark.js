import { StyleSheet, Text, View, SafeAreaView, VirtualizedList, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const imageMap = require('../../assets/map/tsePark2.png');

function btnPark() {
    const navigation = useNavigation();
    return (
      <View style={styles.btn}>
        <TouchableOpacity onPress = {() => navigation.navigate('TSE_1', {}) } style={{flexDirection: 'row'}}>
          <Image source={imageMap} />
          <Text style={styles.btnMap}>
            ลานจอดรถคณะวิศวะ 2{"\n"}
            <Text style={{fontSize: 14, color: '#818181'}}>
                พื้นที่จอดรถสาธารณะ
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    )
}

export default btnPark;

const styles = StyleSheet.create({
    btnMap: {
      marginLeft: 10,
      alignSelf: 'stretch',
      color: '#343434',
      fontSize: 20
    },
    btn: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#FFF',
      height: 114.5,
      borderBottomColor: '#818181',
      marginTop: 10,
      width: '95%',
      alignSelf: 'center'
    }
});