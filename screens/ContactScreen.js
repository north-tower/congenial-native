import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native'
import React, {useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectResturant } from '../features/resturantSlice';
import { useNavigation, useRoute } from "@react-navigation/native"
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/solid'

import tw from "tailwind-react-native-classnames"
import { setResturant } from '../features/resturantSlice'
import DishRow from '../components/DishRow';
import ContactRow from '../components/ContactRow';



const ContactScreen = () => {
  
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const { params: 
      {id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat,},
  } = useRoute();

  useEffect(() => {
    dispatch(
      setResturant({
          id,
          imgUrl,
          title, rating, genre, address, short_description, dishes, long, lat,
      })
    )

  }, [dispatch])
  

  

  return (
    <SafeAreaView style={tw` bg-white h-full pt-5`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <View style={tw`p-5 bg-white `}>
          <View>
            <Text style={tw`text-lg text-black font-bold text-center`}>{title}</Text>

          </View>
          <TouchableOpacity onPress={navigation.goBack} 
          style={tw`rounded-full bg-gray-100 absolute top-3 right-5`}>
            <XCircleIcon color="#00ccbb" height={50} width={50} />
          </TouchableOpacity>
        </View>   
  {/* {Object.entries(groupedItemsInBasket).map(([key, items], index) => (
  
      
      <View key={key} style={tw`relative`}>      
              <Image source={{ uri: items[0]?.image }}
             style={tw`w-full h-56 bg-gray-300 p-4`} />
               <View style={tw`bg-white`}>
                <View style={tw`px-4 pt-4`}>
                    <Text style={tw`text-3xl text-black font-bold`}>{items[0]?.name}</Text>
                    
                    <Text style={tw`text-gray-500 mt-2 pb-4`}>{items[0]?.description}</Text>

                </View>
              
            </View>
            </View>
          ))} */}
       
       <View style={tw`p-5 mt-1 bg-white `}>        
            <Text style={tw`text-gray-500`}>{short_description}
            </Text>
    
        
      </View>
       
      <View style={tw`pb-36`} >
                <Text style={tw`px-4 pt-6 mb-3 text-black font-bold text-xl`}>
                    Contacts
                </Text>

                {dishes.map(dish=>
                (
                    <ContactRow
                    key={dish.name}
                    id={dish.id}
                    name={dish.name}
                    description={dish.description}
                    price={dish.price}
                    image={dish.image} />
                ))}
            </View>
      </View>
    </SafeAreaView>
  )
}

export default ContactScreen

const styles = StyleSheet.create({})