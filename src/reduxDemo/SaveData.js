import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {Add_LIST, UPDATE_USER_DATA} from './Keys';

import {styles} from './styles';

const SaveData = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handelSave = () => {
    const data = {
      name: name,
      lastName: lastName,
    };
    let newArray = [];
    newArray.push(data);
    dispatch({
      type: UPDATE_USER_DATA,
      payload: data,
    });
    dispatch({
      type: Add_LIST,
      payload: newArray,
    });
    if (data.name === '' || data.lastName === '') {
      Alert.alert('Please filled all data');
    } else {
      navigation.navigate('Get');
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Save data in Redux</Text> */}

      <TextInput
        placeholder="name"
        value={name}
        style={styles.textInput}
        onChangeText={nm => setName(nm)}
      />

      <TextInput
        placeholder="last name"
        value={lastName}
        style={styles.textInput}
        onChangeText={ln => setLastName(ln)}
      />

      <TouchableOpacity style={styles.btnWrapper} onPress={() => handelSave()}>
        <Text style={styles.btnTxt}>Save data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SaveData;
