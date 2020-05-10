import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default class Shop extends Component {
    next = () => {
      const { navigation } = this.props
      navigation.navigate('AddToCart')
    }

    skip = () => {
      const { navigation } = this.props
      navigation.navigate('Success')
    }

    render() {
        
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>

                    <Text style={styles.title}>ONLINE SHOPPING</Text>

                    <Text style={styles.para}>Nisi aliquip ut ullamco consequat officia enim do. 
                    Sit qui incididunt sit enim magna in. Minim sit anim elit dolor officia irure. 
                    Lorem cupidatat ut nisi tempor do officia fugiat. 
                    Laboris elit voluptate adipisicing occaecat. 
                    Dolore aliqua Lorem qui anim exercitation sit officia incididunt occaecat pariatur.
                    </Text>

                    <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/shopping.png')}/>  
                    </View>

                    <TouchableOpacity onPress={this.next} style={styles.btn}>
                    <Text style={styles.btnText}>Next</Text>
                    </TouchableOpacity>

                    <View style={styles.bottomLayout}>
                    <View style={styles.dotsContainer}>
                        <View style={styles.doubleDot}></View><View style={styles.dot}></View><View style={styles.dot}></View>
                    </View>
                    <TouchableOpacity onPress={this.skip} style={styles.bottomTextCon}>
                        <Text style={styles.bottomText}>Skip</Text>
                    </TouchableOpacity>
                    </View>   

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      
    },
  
    contentContainer: {
      marginTop: 30,
      marginHorizontal:30,
      justifyContent: 'space-between'
    },
  
    title: {
      color: '#ffcc33',
      fontSize: 30,
      fontWeight: '100'
    },
  
    para: {
      marginVertical:30,
      color: "#aaa",
      fontSize: 16,
      fontWeight:'200'
    },
  
    img: {
      width:280,
      height:280,
    },
  
    imgContainer: {
      alignItems: 'center'
    },
  
    btn: {
      backgroundColor: '#ffcc33',
      marginVertical: 20,
      paddingVertical:10,
      borderRadius:25,
      alignItems:"center",
      marginHorizontal:100,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5
    },
  
    btnText: {
      fontWeight:'bold'
    },
  
    bottomLayout: {
      flexDirection:'row',
      alignItems:"center",
      justifyContent: 'center',
      marginTop:115,
    },
  
    dotsContainer: {
      flexDirection:'row'
    },
  
    bottomText: {
      color:'#aaa',
    },
  
    bottomTextCon: {
      position:'absolute',
      right:0
    },
  
    dot: {
      width:8,
      height:8,
      backgroundColor:'#ffcc33',
      borderRadius:4,
      marginStart:3
    },
  
    doubleDot: {
     width:16,
     height:8 ,
     borderRadius:8,
     backgroundColor:'#ffcc33',
    }
  
    
  });
  
