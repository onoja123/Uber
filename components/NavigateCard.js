import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { GOOGLE_MAPS_APIKEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}> 
      <Text style={tw` text-center py-5 text-xl`}>NavigateCard</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
         <GooglePlacesAutocomplete 
          placeholder="Where to?"
          style={styles}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          debounce={400}
            />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 10
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})