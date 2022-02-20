import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {superheroStore} from './store/superheroes';

const AddScreen = observer(() => {
  const [name, setName] = useState('');
  const [power, setPower] = useState('');
  const [age, setAge] = useState('');
  const navigation = useNavigation();

  const onClear = () => {
    setName('');
    setPower('');
    setAge('');
  };

  useEffect(() => {
    superheroStore.count;
  });

  const handelList = () => {
    navigation.navigate('List');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> store data in mobx </Text>
      <View style={styles.rows}>
        <TouchableOpacity>
          <Text>{`Total add:${superheroStore.count}`}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onClear()}>
          <Text>Clear</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        value={name}
        placeholder="Name"
        onChangeText={nm => setName(nm)}
        style={styles.textInput}
        placeholderTextColor={'grey'}
      />

      <TextInput
        value={power}
        placeholder="Mobile no"
        onChangeText={nm => setPower(nm)}
        style={styles.textInput}
        placeholderTextColor={'grey'}
      />

      <TextInput
        value={age}
        placeholder="age"
        onChangeText={nm => setAge(nm)}
        style={styles.textInput}
        placeholderTextColor={'grey'}
      />

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btnWrapper}
          onPress={() => superheroStore.addHero({name, power, age})}>
          <Text> Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnWrapper}
          onPress={() => handelList()}>
          <Text>View List</Text>
        </TouchableOpacity>
      </View>
      {/* Observer is used for update  */}
      {/* <Observer>
        {() => (
          <> */}

      <FlatList
        data={superheroStore.superheroes}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.line} />}
        ListEmptyComponent={() => (
          <View style={styles.flex}>
            <Text style={styles.noDataText}>No list found :</Text>
          </View>
        )}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onLongPress={() => superheroStore.deleteHero(item.id)}
              style={styles.listWrapper}>
              <Text style={styles.text}>{`Name: ${item.name}`}</Text>
              <Text style={styles.text}>{`Phone: ${item.power}`}</Text>
              <Text style={styles.text}>{`Age: ${item.age}`}</Text>
            </TouchableOpacity>
          );
        }}
      />
      {/* </>
        )}
      </Observer> */}
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  clear: {
    alignSelf: 'flex-end',
  },
  clearText: {
    color: 'grey',
  },
  textInput: {
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    margin: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    color: 'black',
    alignSelf: 'center',
    elevation: 4,
    shadowOffset: {height: 2, width: 2},
    shadowRadius: 6,
    shadowOpacity: 0.4,
    shadowColor: '#C1F4C5',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginHorizontal: 5,
  },
  btnWrapper: {
    backgroundColor: '#C1F4C5',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '45%',
    marginTop: 20,
    elevation: 4,
    shadowOffset: {height: 2, width: 2},
    shadowRadius: 3,
    shadowOpacity: 0.6,
    shadowColor: '#C1F4C5',
  },
  line: {
    borderWidth: 0.5,
    borderColor: 'white',
  },
  listWrapper: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 12,
    borderRadius: 2,
  },
  text: {
    color: 'white',
    padding: 5,
  },
  flex: {
    alignItems: 'center',
    margin: 100,
  },
  noDataText: {
    color: 'grey',
    fontSize: 18,
  },
});

export default AddScreen;
