import React from 'react';
import {  StyleSheet,View,Text } from 'react-native';


const HistoryScreen =()=>{
 
    return(
      <View style={styles.container}>
        <Text>
          History Screen
        </Text>
      </View>
    )
  
}
HistoryScreen.navigationOptions = {
  title: 'History',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
export default HistoryScreen;