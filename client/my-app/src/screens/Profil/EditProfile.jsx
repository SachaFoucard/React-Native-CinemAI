import { View, Text,StyleSheet,TextInput,TouchableOpacity,Image  } from 'react-native'
import React, { useContext, useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { UserContext } from '../../context/UserContext';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function EditProfile({navigation}) {

    const {setFullName, setPhone, setGender, setCountry, setImage, image, country, gender, phone, fullName,mail, setmail,SaveEditProfile} = useContext(UserContext)
    // name, mail, gender, phone, country
    
  return (
    // name, mail, gender, phone, country 
    <View style={styles.container}>

          <TouchableOpacity style={styles.header}  onPress={() => { navigation.navigate('TabMenu')}}>
            <Ionicons  style={styles.icon}  name="chevron-back-outline"/>
            <Text style={styles.title}>Help Center</Text>
          </TouchableOpacity>


        <View style={styles.userDisplay}>
        <TouchableOpacity>
          <Image source={(require('../../../assets/setUpProfil/blankPp.webp'))} style={styles.profileImg} />
        </TouchableOpacity>
        <Text style={styles.text}>{mail}</Text>
      </View>

<View style={styles.inputContainer}>

    <TextInput
      style={styles.input}
      value={fullName}
      onChangeText={setFullName}
      placeholder="Enter your name"
      placeholderTextColor="white"
    />

    <TextInput
      style={styles.input}
      value={mail}
      onChangeText={setmail}
      placeholder="Enter your mail"
      placeholderTextColor="white"
    />

    <Picker
      style={styles.input}
      selectedValue={gender}
      onValueChange={(itemValue) => setGender(itemValue)}
      dropdownIconColor="white"
    >
      <Picker.Item label="Male" value="male" />
      <Picker.Item label="Female" value="female" />
    </Picker>

    <TextInput
      style={styles.input}
      value={phone}
      onChangeText={setPhone}
      placeholder="Enter your phone number"
      placeholderTextColor="white"
    />

    <TextInput
      style={styles.input}
      value={country}
      onChangeText={setCountry}
      placeholder="Enter your country"
      placeholderTextColor="white"
    />
</View>

      <TouchableOpacity style={styles.saveButton} onPress={() => SaveEditProfile(navigation)}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181A21',
        padding: 20,
      },
      label: {
        color: 'white',
        fontSize: 16,
        marginBottom: 5,
      },
      input: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 15,
        marginBottom: 25,
        backgroundColor:"#2D353A",
        color:"white",
        borderRadius:12,
      },
      inputContainer:{
        paddingTop:17,
      },
      header: {
        flexDirection: 'row',
        margin: 15,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left', // Align the text to the left 
        alignItems:"center",
        padding:10,  
      },
      icon: {
        fontSize: 30,
        color: 'white',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginLeft:10,
      },
      userDisplay: {
        alignItems: 'center',
        marginTop: 25,
      },
      text: {
        color: 'white',
        fontSize: 30,
      },
      profileImg: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 50,
      },
      saveButton:{
        padding:20,
        borderRadius:30,
        backgroundColor:"red",
        alignItems:"center",
      },
      saveButtonText:{
        color:"white"
      }
  });

  