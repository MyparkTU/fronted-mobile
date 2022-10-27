import { StyleSheet, Text, View, SafeAreaView, VirtualizedList, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setPark, setParkInfo } from '../redux/action';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const navigation = useNavigation();
  const { park, parkInfo } = useSelector(state => state.dbReducer);
  const dispatch = useDispatch();
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
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Enter park name'
        placeholderTextColor={'#aa0022'}
        onChangeText={(value) => dispatch(setPark(value))}
      />
      <TextInput
        style={styles.input}
        placeholder='Enter park info'
        placeholderTextColor={'#aa0022'}
        onChangeText={(value) => dispatch(setParkInfo(value))}
      />
      <TouchableOpacity onPress = {() => navigation.navigate('Car', {}) } style={styles.button}>
        <Text style={styles.input}>
            set data
        </Text>
      </TouchableOpacity>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  }
});
