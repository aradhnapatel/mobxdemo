// Mobx
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  LogBox,
} from 'react-native';
import store from './SimpleStore';
import SimpleComponent from './SimpleComponents';

LogBox.ignoreAllLogs();

export default class MobxSimpleExample extends Component {
  render() {
    // Initializing counter with the default stored value
    let counter = parseInt(store.someValue);
    return (
      <>
        <ScrollView style={{flex: 1}}>
          <View style={styles.container}>
            <Text style={styles.title}>Mobx Demo</Text>
            <Text style={styles.value}>Stored value:</Text>
            {/* Here we pass the store to the component as prop */}
            <SimpleComponent store={store} />
          </View>
        </ScrollView>
        <View style={styles.bottom}>
          <Button
            title="Add Count"
            onPress={() => store.add((counter += 1))}
            style={styles.button}
          />
          <Button
            title="Delete last"
            onPress={() => store.delete(counter)}
            style={styles.button}
          />
          <Button
            title="Reset count"
            onPress={() => store.reset((counter = 0))}
            style={styles.button}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  message: {
    marginTop: 6,
    fontSize: 12,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
  bottom: {
    marginBottom: 10,
  },
  value: {
    margin: 10,
  },
});

AppRegistry.registerComponent('MobxSimpleExample', () => MobxSimpleExample);