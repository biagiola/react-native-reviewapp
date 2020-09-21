import React from 'react'
import { View, StyleSheet, Text, Dimensions, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation, title}) {
  const openMenu =()=>{
    navigation.openDrawer();
  }
 
  return (
    <View style={styles.header}>
      <MaterialIcons name="menu" size={28} onPress={openMenu}  style={styles.icon}/>
      <View style={styles.headerTitle}>
        <Image style={styles.headerImage} source={require(
            '../assets/heart_logo.png'
        )} />
        <Text style = {styles.headerText}>
            {title}
        </Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    marginTop:15,
    letterSpacing: 1,
    height: '100%',
    alignItems:"center",
  },
  icon: {
    position: 'relative',
    flexDirection:'column',
    flex:0.5,
    marginTop:10,
    marginHorizontal: -100,
  },
  headerImage:{
    width: 26,
    height: 26,
    marginHorizontal:10,
    marginTop:15,
  },
  headerTitle: {
    flexDirection:'row',
    marginTop: -5
  }
});