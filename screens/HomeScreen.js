import { View, Text, Button ,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react'
import {useNavigation} from "@react-navigation/native"
import tw from "tailwind-react-native-classnames"
import { SafeAreaView } from 'react-native-safe-area-context';
import  { MagnifyingGlassCircleIcon } from 'react-native-heroicons/outline';
// import { AdjustmentsHorizontalIcon } from 'react-native-heroicons/solid';
import { ScrollView } from 'react-native'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import FeaturedRow2 from '../components/FeaturedRow2'
import FeaturedRow3 from '../components/FeaturedRow3'

const HomeScreen = () => {
  
    const navigation = useNavigation();
    const [ featuredCategories, setFeaturedCategories ] = useState([]);
    const [data, setData] = useState(null);

  return (
    <SafeAreaView style={tw`bg-white pt-5`}>
    {/* <View style={tw`flex-row pb-3 items-center mx-4  `}>
       <Image 
       source={{
           uri: "https:links.papareact.com/wru/"
       }}
       style={tw`h-7 w-7 bg-gray-500 p-4 rounded-full`}
       />
       <View style={tw`flex-1`}>
           <Text style={tw`font-bold text-gray-300 text-xs`}>
               Deliver Now!
           </Text>
           <Text style={tw`font-bold text-xl`}>Current Location
               <ChevronDownIcon  color="#00CCBB" />
           </Text>
       </View>
       <UserIcon  color="#00CCBB" />
    </View> */}
        <View style={tw`flex-row items-center pb-2 mx-4`}>
          <View style={tw`flex-row flex-1 bg-gray-200 p-3 rounded-full `}>
                <MagnifyingGlassCircleIcon color="gray"  />
                <TextInput placeholder='Emergency Services' />
           </View>
           <TouchableOpacity onPress={() => navigation.navigate("message")}>
           {/* <AdjustmentsHorizontalIcon  color="#00CCBB" /> */}
           </TouchableOpacity>
          </View>
          <ScrollView style={tw`bg-gray-100`} contentContainerStyle={{ paddingBottom: 100,}}>
            <Categories />
            <FeaturedRow title="Emergency Services" description="
                Emergency services are the frontline heroes, providing immediate assistance and saving lives in critical situations. Their swift response and unwavering dedication ensure the safety and well-being of communities in times of crisis."
            id="1" />
            <FeaturedRow2 title="Emergency Contacts" 
            description="Community Emergency Response Teams (CERT) serve as crucial emergency contacts, comprising trained volunteers who assist first responders during disasters or large-scale emergencies. They provide immediate support, aid in search and rescue operations, and help with disaster response and recovery efforts, enhancing overall community resilience and preparedness."
            id="2" />
            <FeaturedRow3 title="Information Page" 
            description="Welcome to our Emergency Information Page. Here, you'll find essential guidance on what to do in various emergency situations, including natural disasters and medical emergencies. It's important to familiarize yourself with this information to help you stay safe and prepared."
            id="3" />
            
          </ScrollView>
      </SafeAreaView>
  )
}

export default HomeScreen