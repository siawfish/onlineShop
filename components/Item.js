import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons'


export default class Item extends Component {
    render() {
        const { item } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <View style={styles.imgcard}>
                        <Image style={styles.img} source={item.image}/>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <View style={styles.rating}>
                        <Ionicons name='md-star' size={16} color='#3498db'/>
                        <Ionicons name='md-star' size={16} color='#3498db'/>
                        <Ionicons name='md-star' size={16} color='#3498db'/>
                        <Ionicons name='md-star-half' size={16} color='#3498db'/>
                        <Ionicons name='md-star-outline' size={16} color='#3498db'/>
                    </View>
                    <Text style={styles.amt}>${item.price}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        flex:1,
        marginVertical:10,
        alignItems:'center'
    },

    imgcard: {
        width:120,
        height:120,
        backgroundColor:'#000',
        borderRadius:25,
        padding:10,
        transform: [{rotateX: '2deg'}, {rotateZ: '0.10rad'}]
    },

    img: {
        position:'absolute',
        width:120,
        height:120,
        top:-10
    },

    infoContainer: {
        marginHorizontal:20,
    },

    rating: {
        flexDirection:'row',
        marginTop:10
    },

    amt: {
        marginVertical:20,
        color:'#ffcc33',
        fontSize:20,
        fontWeight:'400'
    },

    itemName: {
        color:'#ffcc33',
        fontWeight:'bold',
        fontSize:20,
        marginTop:20
    }
})
