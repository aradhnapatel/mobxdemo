import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react';
/******************* /IMPORT COMPONENTS *******************/

@observer
export default class SimpleComponent extends Component {
  render() {
    return (
      <View>
        {this.props.store.someValue.map(item=>{
          return(
            <View style={styles.listItem}>
              <Text>{item}</Text>
            </View>
            )})
          }
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  textValue: {
    fontSize: 20,
  },
  listItem:{
    margin:5,
    backgroundColor:'lightgrey',
    width:150,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
    
  }
});
