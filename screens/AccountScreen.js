import React from 'react';
import {  StyleSheet,View,Text } from 'react-native';


const AccountScreen =()=>{
 
    return(
      <View style={styles.container}>
        <Text>
          Account Screeen
        </Text>
      </View>
    )
  
}
AccountScreen.navigationOptions = {
  title: 'Account',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
export default AccountScreen;