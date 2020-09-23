import React from 'react'
import { StyleSheet, Button, TextInput, View } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'

export default function ReviewForm({ addReview }) {
  return(
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values) => {
          actions.resetForm();
          addReview(values)
        }}
      >
        {(props) => (
          <View>
            <TextInput 
              id='title'
              name='title'
              style={globalStyles.input}
              placeholder='Enter a title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <TextInput 
              id='body'
              name='body'
              multiline
              style={globalStyles.input}
              placeholder='Enter a body'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <TextInput 
              id='rating'
              name='rating'
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
            />
            <Button id='submit' name='submit' title='submit' color='salmon' onPress={props.handleSubmit} />
          </View>
        )}

      </Formik>
    </View>
  )
}