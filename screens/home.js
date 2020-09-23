import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Modal, FlatList,
  TouchableWithoutFeedback, Keyboard  } from 'react-native'
//import Modal from 'modal-react-native-web';
import { globalStyles } from '../styles/global'
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './reviewForm'

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ])
  
  const [modalOpen, setModalOpen] = useState(false)

  const addReview = (review) => {
    review.key = Math.random().toString() // ?
    setReviews((currentReview) => {
      return [review, ...currentReview]
    })
    setModalOpen(false)
  }

  return (
    <View style={globalStyles.container}>
  
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{/* kayboard.dismiss or () => keyboard.dismiss() */}
          <View style={styles.modalContent}>
            <MaterialIcons 
              name='close'
              size={24} 
              style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)} 
            />
            <ReviewForm addReview={addReview}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* open modal */}  
      <MaterialIcons 
        name='add' 
        size={24} 
        style={styles.modalToggle}
        onPress={()=>setModalOpen(true)} 
      />

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </Card>
        </TouchableOpacity>
      )} />

    </View>
  )
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
})