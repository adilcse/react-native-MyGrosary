import React from 'react';
import {  StyleSheet,View,Text } from 'react-native';


const FavoriteScreen =()=>{
 
    return(
      <View style={styles.container}>
        <Text>
          Fav Screen
        </Text>
      </View>
    )
  
}
FavoriteScreen.navigationOptions = {
  title: 'Fav',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
export default FavoriteScreen;