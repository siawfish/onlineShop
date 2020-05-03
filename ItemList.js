import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, ScrollView, FlatList } from 'react-native'
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons'
import Item from './components/Item'


export default class ItemList extends Component {
    render() {
        const jackets = [
            {image:'', rating:'4', price:''},
            {image:'', rating:'2', price:''},
            {image:'', rating:'5', price:''},
            {image:'', rating:'3', price:''}
        ]

        return (
            <View style={styles.container}>

                <View style={styles.topIconsContainer}>
                    <View style={styles.backIcon}>
                        <Ionicons name="ios-arrow-round-back" size={32} color="#ffcc33" />
                    </View>
                    <View style={styles.cartBtn}>
                        <Feather name="shopping-cart" size={20} color="#ffcc33" />
                    </View>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Men's Jackets</Text>
                </View>
                    
                <View style={styles.searchContainer}>
                    <TextInput placeholder='Seacrh' placeholderTextColor='#333'/>
                    <Text style={styles.filter}>Filter</Text>
                </View>

                <ScrollView style={styles.listContainer} showsHorizontalScrollIndicator={false}>
                    <FlatList
                    data={jackets}
                    renderItem={({item})=><Item item={item}/>}
                    keyExtractor={(item)=>item.rating}
                    />
                </ScrollView>

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

    topIconsContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:50
    },

    backIcon: {
        backgroundColor:'#000',
        height:40,
        width:40,
        alignItems:'center',
        borderRadius:25,
        padding:4

    },

    cartBtn: {
        backgroundColor:'#000',
        width:40,
        height:40,
        borderRadius:20,
        padding:10
    },

    titleContainer: {
        marginVertical:30
    },

    title: {
        color: '#ffcc33',
        fontWeight:'600',
        fontSize:20
    },

    searchContainer: {
        backgroundColor:'#000',
        paddingVertical: 20,
        paddingHorizontal:20,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    filter: {
        color:'#ffcc33',
        opacity:0.6
    },

    listContainer: {
        marginTop:20
    }
})
