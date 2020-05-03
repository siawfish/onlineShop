import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

export default class Item extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBtnsContainer}>
                    <View style={styles.backBtn}>
                        <Ionicons name="ios-arrow-round-back" size={32} color="#ffcc33" />
                    </View>
                    <View style={styles.colAlignedBtn}>
                        <View style={styles.cartBtn}>
                            <Feather name="shopping-cart" size={20} color="#ffcc33" />
                        </View>
                        <View style={styles.heartBtn}>
                            <FontAwesome5 name="heart" size={20} color="#ffcc33" />
                        </View>
                    </View>
                </View>

                <View style={styles.skewedCard}>
                <LinearGradient
                    colors={['#171616', 'transparent']}
                    style={styles.gradient}
                />
                <Image style={styles.hoodie} source={require('./assets/hoodie.png')}/>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Grey Men's Hoodie</Text>
                </View>

                <View style={styles.ratings}>
                    <Text style={styles.ratingsText}>Review : </Text>
                    <View style={styles.starContainer}>
                        <Ionicons name='md-star' size={16} color='#3498db'/>
                        <Ionicons name='md-star' size={16} color='#3498db'/>
                        <Ionicons name='md-star' size={16} color='#3498db'/>
                        <Ionicons name='md-star-half' size={16} color='#3498db'/>
                        <Ionicons name='md-star-outline' size={16} color='#3498db'/>
                    </View>
                </View>

                <View style={styles.underline}></View>

                <View style={styles.captionContainer}>
                    <Text style={styles.caption}>
                        Dolor eu quis enim ad minim minim minim non ut.
                        Dolor eu quis enim ad minim minim minim non ut.
                    </Text>
                </View>

                <View style={styles.materialsContainer}>
                    <Text style={styles.materials}>Material: 91% polyester, 9% elastane</Text>
                    <LinearGradient
                    colors={['#171616', 'transparent']}
                    style={styles.gradientMat}
                    start={[0.8, 0.145]}
                    locations={[0.156, 1.0]}
                    />
                </View>

                <View style={styles.sizesContainer}>
                    <View style={styles.sizes}>
                        <Text style={styles.size}>XS</Text>
                    </View>
                    <View style={styles.sizes}>
                        <Text style={styles.size}>S</Text>
                    </View>
                    <View style={styles.sizesSelect}>
                        <Text style={styles.sizeSelect}>M</Text>
                    </View>
                    <View style={styles.sizes}>
                        <Text style={styles.size}>L</Text>
                    </View>
                    <View style={styles.sizes}>
                        <Text style={styles.size}>XL</Text>
                    </View>
                </View>

                <View style={styles.summaryContainer}>
                    <View style={styles.summary}>
                        <Text style={styles.total}>Total Amount</Text>
                        <Text style={styles.amt}>$100</Text>
                    </View>
                    <View style={styles.addToCart}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#171616',
        flex:1,
        paddingHorizontal:30
    },

    topBtnsContainer: {
        flexDirection:'row',
        marginTop:50,
        justifyContent:'space-between',
        alignItems:'center'
    },

    backBtn: {
        backgroundColor:'#000',
        height:40,
        width:40,
        alignItems:'center',
        borderRadius:25,
        padding:4
    },

    heartBtn: {
        marginTop:20,
        backgroundColor:'#000',
        width:40,
        height:40,
        borderRadius:20,
        padding:10
    },

    cartBtn: {
        backgroundColor:'#000',
        width:40,
        height:40,
        borderRadius:20,
        padding:10
    },

    colAlignedBtn: {
        flexDirection: 'column',
    },

    skewedCard: {
        width:280,
        height:280,
        backgroundColor:'#000',
        borderRadius:25,
        position:'absolute',
        top:80,
        left:33,
        transform: [{rotateX: '2deg'}, {rotateZ: '0.10rad'}]
    },

    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },

    gradientMat: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        top: 0,
        width: 350,
    },

    hoodie: {
        width:250,
        height:250,
        margin:15
    },

    titleContainer: {
        marginTop:230,
    },

    title: {
        color: '#ffcc33',
        fontWeight:'600',
        fontSize:20
    },

    ratings: {
        marginVertical:5,
        flexDirection:'row'
    },

    ratingsText: {
        color: '#aaa',
        fontSize:16
    },

    star: {
        backgroundColor:'#000'
    },

    starContainer: {
        flexDirection:'row'
    },

    underline: {
        width:50,
        borderBottomWidth: 4,
        borderBottomColor: '#ffcc33',
        marginVertical:15
    },

    captionContainer: {
        marginVertical:5
    },

    caption: {
        color:'#aaa'
    },

    materialsContainer: {
        marginVertical:20,
        backgroundColor:'#000',
        marginHorizontal:-30,
        paddingVertical:25,
        flexDirection:'row'
    },

    materials: {
        color:'#ffcc33',
        marginHorizontal:30
    },

    sizesContainer: {
        marginVertical:5,
        flexDirection:'row'
    },

    sizes: {
        width:30,
        height:30,
        backgroundColor:'#000',
        borderRadius:5,
        marginHorizontal:5,
        alignItems:"center",
        justifyContent:'center'
    },

    size: {
        color:'#ffcc33'
    },

    sizesSelect: {
        width:30,
        height:30,
        backgroundColor:'#ffcc33',
        borderRadius:5,
        marginHorizontal:5,
        alignItems:"center",
        justifyContent:'center'
    },

    summaryContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:20,
        backgroundColor:'#ffcc33',
        paddingVertical:20,
        paddingHorizontal:20,
        borderRadius:10,
        alignItems:'center'
    },

    total: {
        fontSize:18,
        fontWeight:'200',
    },

    amt: {
        fontSize:30,
        fontWeight:'900',
    },

    btn: {
        backgroundColor:'#000',
        paddingVertical:10,
        borderRadius:8
    },

    btnText: {
        color:'#ffcc33',
        fontWeight:'bold',
        paddingHorizontal:10
    }


})
