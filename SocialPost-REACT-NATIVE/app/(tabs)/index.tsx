import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default function SocialPost() {
  return (
    <View style={styles.postConteiner}>
    <Text style={styles.userName}>Maria Silva</Text>
    <Image source={{ uri:'https://via.placeholder.com/300x200'}}
    style={styles.postImage}/>
    <Text style={styles.postDescription}>Este é um post de exemplo em uma rede social mostrando uma foto com uma breve descrição.
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postConteiner:{
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor:'#000',
    shadowOffset:{ width:0, height:2},
    shadowOpacity:0.3,
    shadowRadius: 4,
    elevation:5,
    margin:20,
  },
  userName:{
    fontSize:18,
    fontWeight: 'bold',
    marginBottom:10,
    textAlign: 'center',
  },
  postImage:{
    width:'100%',
    height:200,
    borderRadius:10,
    marginBottom:10,
  },
  postDescription:{
    fontSize:16,
    color:'#666',
    textAlign: 'justify',
  },
});