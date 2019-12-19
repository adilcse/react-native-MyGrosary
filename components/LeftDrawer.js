import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
const LeftDrawer = (props)=> {
return(
    <View style={styles.container}>
    <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
  </View>

)
}
const styles= StyleSheet.create({
container : {
    marginTop : 27,


}
})
export default LeftDrawer;