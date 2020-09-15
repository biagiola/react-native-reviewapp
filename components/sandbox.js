import React from  'react'
import { StyleSheet, Text, View } from 'react-native'

export default function sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box One</Text>
      <Text style={styles.box2}>Box Two</Text>
      <Text style={styles.box3}>Box Three</Text>
      <Text style={styles.box4}>Box Four</Text>
    </View>
  )  
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',// x axis
    alignItems: 'stretch', // y axis
    paddingTop: 40,
    backgroundColor: '#ddd'
  },
  box1: {
    flex: 1,
    backgroundColor: 'coral',
    padding: 10
  },
  box2: {
    flex: 1,
    backgroundColor: 'lightgreen',
    padding: 15
  },
  box3: {
    flex: 2, // this flex prop is acorder to the parent (row in this case)
    backgroundColor: 'gold',
    padding: 20
  },
  box4: {
    flex: 1,
    backgroundColor: 'salmon',
    padding: 25
  }
})