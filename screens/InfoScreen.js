import { View, Text, SafeAreaView, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import {useNavigation, useRoute } from "@react-navigation/native"
import { selectResturant } from '../features/resturantSlice';
import tw from "tailwind-react-native-classnames"
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from "react-native-progress"
import { setResturant } from '../features/resturantSlice'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import InfoRow from '../components/InfoRow';

const InfoScreen = () => {
  
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
    <View style={tw`bg-green-400  flex-1`}> 
        <SafeAreaView style={tw`z-50 pt-5`}>
            <View style={tw`flex-row justify-between items-center p-5`}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <XMarkIcon color="white" size={30} />
                </TouchableOpacity>
                <Text style={tw`font-light text-white text-lg`}>
                  {title}
                </Text>
                <Text style={tw`font-light text-white text-lg`}>
                      Help
                </Text>

            </View>


            
            {dishes.map(dish=>
                (
                    <InfoRow
                    key={dish.name}
                    id={dish.id}
                    name={dish.name}
                    description={dish.description}
                    price={dish.price}
                    image={dish.image} />
                ))}
            

        </SafeAreaView>
        {/* <MapView
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
/> */}
    </View>
  )
}

export default InfoScreen