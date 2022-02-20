import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';

const GetData = () => {
  const myData = useSelector(state => state?.allUsersState?.userData);

  useEffect(() => {
    // console.log('------myData', myData.usersData);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>get data</Text>
      <FlatList
        data={myData}
        renderItem={({item}) => {
          return (
            <View style={styles.blackBg}>
              <Text style={styles.txtColor}> {item?.lastName}</Text>
              <Text style={styles.txtColor}> {item?.lastName}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default GetData;
