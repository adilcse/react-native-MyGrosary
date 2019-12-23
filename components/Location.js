import React from 'react';
import { TouchableOpacity,View,Text,StyleSheet} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import LocationIcon from './locationIcon';
import SearchIcon from './SearchIcon';
import Colors from '../constants/Colors';

const Location = props =>{
    return(
        <View style = {styles.container}>
             <Ionicons
             style={styles.navIcon}
      name="md-menu"
      size={32}
      color="black"
      onPress={() => props.navigation.openDrawer()}
    />
             <TouchableOpacity  style={styles.location}  onPress={() => props.navigation.navigate('LocationScreen')}>
          
         
          <View style={styles.locationText}>
              
            <Text style={styles.upperText}> Location</Text>
            <LocationIcon width='15' height = '15'/>
  </View >
            <Text style={styles.Address} numberOfLines={1}>  Gudgudjore,Bisra ,Sundargarh,Odisha,India,Home ggj address </Text>
           
           </TouchableOpacity>
        <TouchableOpacity style={styles.searchContainer}onPress={() => props.navigation.navigate('SearchScreen')}>
        <SearchIcon width='45' height = '40'/>
            </TouchableOpacity>    
        </View>
    )
}
const styles= StyleSheet.create({
container:{
    flex : 1,
    flexDirection : 'row',
      padding : 10,
   width : '100%',
    backgroundColor : Colors.tintColor,

},
location:{
    width : '80%',
},
locationText:{
flex : 1,
flexDirection : 'row',


},
upperText : {
 
    fontSize : 15,
    textDecorationColor :  '#000000'
},
Address:{
   width : '95%'
},
searchContainer : {
    marginTop :6,

},
navIcon : {
    alignItems : 'center'
}
})
export default Location;