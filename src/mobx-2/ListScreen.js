import {observer} from 'mobx-react';
import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {superheroStore} from './store/superheroes';

const ListScreen = observer(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get listData</Text>
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
              onPress={() => superheroStore.deleteHero(item.id)}
              style={styles.listWrapper}>
              <Text style={styles.text}>{`Name: ${item.name}`}</Text>
              <Text style={styles.text}>{`Phone: ${item.power}`}</Text>
              <Text style={styles.text}>{`Age: ${item.age}`}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  line: {
    borderWidth: 0.5,
    borderColor: 'white',
  },
  listWrapper: {
    backgroundColor: 'rgba(0,0,0,0.4)',
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

export default ListScreen;
