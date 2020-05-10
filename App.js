import React from 'react'
import Shop from './src/screens/Shop'
import AddToCart from './src/screens/AddToCart';
import Success from './src/screens/Success';
import Item from './src/screens/Item';
import ItemList from './src/screens/ItemList';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor:'#ffcc33',
            borderBottomColor:'#ffcc33'
          },
          headerTitleStyle: {
            fontSize:20,
            fontWeight:'400'
          },
          headerBackTitleVisible:false
        }}>
        <Stack.Screen 
          options={{
           title:'Shop Online'
          }}
          name="Shop" 
          component={Shop}
        />
        <Stack.Screen 
          options={{
            title:'Add To Cart'
           }}
          name="AddToCart" 
          component={AddToCart}
        />
        <Stack.Screen 
          options={{
            title:'Payment Successful'
          }}
          name="Success" 
          component={Success}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}