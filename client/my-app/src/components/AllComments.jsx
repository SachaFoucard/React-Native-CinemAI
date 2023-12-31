import { View, Text, ScrollView, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Comment from './Comments';
import Ionicons from '@expo/vector-icons/Ionicons';
import { UserContext } from '../context/UserContext';
import AddComment from './AddComment';

const AllComments = ({ route, navigation }) => {
  const { itemId } = route.params;
  const { allcomments, getAllcomments } = useContext(UserContext);


  useEffect(() => {
    getAllcomments(itemId);
  }, [allcomments]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >

      <View style={styles.container}>
        {!allcomments || !Array.isArray(allcomments) ? (
          <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center', alignSelf: 'center' }}>

            <Text style={styles.txt}>0 comments</Text>
          </View>
        ) : (
          <View style={styles.comments}>
            <View style={styles.headerBar}>
              <Ionicons
                name='arrow-back-outline'
                color='white'
                size={40}
                style={styles.icon}
                onPress={() => navigation.goBack()}
              />
              <Text style={styles.nbrscomm}>{allcomments.length} comments</Text>

            </View>
            <FlatList
              style={styles.flatlist}
              data={allcomments.reverse()}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Comment username={item.username} text={item.text} date={item.date} style={styles.txt} />
              )}
            />
          </View>
        )}

        <View style={styles.addCommentContainer}>
          <AddComment idFilm={itemId}  />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A21',
  },
  txt: {
    color: 'white',
    fontSize: 30,
    marginTop: 15,
    marginLeft: 30
  },
  flatlist: {
    flexDirection: 'column'
  },
  comments: {
    marginTop: 100,
    marginLeft: 10,
    flex: 1, // Make the comments section take the available space
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nbrscomm: {
    fontSize: 25,
    color: 'white',
    marginLeft: 15,
  },
  icon: {
    margin: 10
  },
  addCommentContainer: {
    backgroundColor: '#181A21',
    borderWidth: 1,
    borderColor: '#34363D',
    borderRadius: 30,
    padding: 30,
    paddingBottom: 50,
    position: 'absolute',
    bottom: '0%', // Position the AddComment component at the bottom of the screen
    left: 0,
    right: 0,
  },
});

export default AllComments;
