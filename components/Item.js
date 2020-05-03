import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default class Item extends Component {
    render() {
        const { item } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <View style={styles.imgcard}>
                        <Image style={styles.img} source={require('../assets/hoodie.png')}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        flex:1,
        marginVertical:10
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
    }
})
