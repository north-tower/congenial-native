import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames"
import ResturantCard2 from './ResturantCard2'

const FeaturedRow2 = ({id, title, description }) => {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>
            {title}
        </Text>
        <ArrowRightIcon color="#00bbcc" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>
      <ScrollView horizontal contentContainerStyle={{
        paddingHorizontal: 15,
      }} showsHorizontalScrollIndicator={false} style={tw`pt-4`} >
        <ResturantCard2 id={23} imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtezLr215Si9sbwAePBjHgm9qMWU0JNH8nJA&usqp=CAU"
         title="Emergency Services Hotline" rating={9.5} genre="Material" 
         short_description="Ready to help." dishes ={[
          {
            name: "911",
            description: "24/7 Service",
            id: "3",
            image: "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
          {
            name: "999",
            description: "Alternative ",
            price: 10.99,
            id: "4",
            image: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
        ]} long={10} lat={0} />
         
        <ResturantCard2 id={24} imgUrl="https://images.unsplash.com/photo-1606022831434-91293aebf25a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvbGljZXxlbnwwfHwwfHx8MA%3D%3D"
         title="Police" rating={9.0} genre="Simple"
         short_description="Here to serve."  dishes ={[
          {
            name: "999",
            description: "National Police Service",
            id: "3",
            image: "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
          {
            name: "112",
            description: "National Police Service",
            price: 10.99,
            id: "4",
            image: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
        ]} long={10} lat={0} />
        <ResturantCard2 id={24} imgUrl="https://images.unsplash.com/photo-1554734867-bf3c00a49371?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         title="Medical Emergency Services" rating={9.0} genre="Simple"
         short_description="Here to serve."  dishes ={[
          {
            name: "999",
            description: "Medical Service",
            id: "3",
            image: "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
          {
            name: "112",
            description: "Ambulance",
            price: 10.99,
            id: "4",
            image: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
        ]} long={10} lat={0} />
         <ResturantCard2 id={24} imgUrl="https://images.unsplash.com/photo-1606613816768-63888be4a54f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVtZXJnZW5jeSUyMHNlcnZpY2VzfGVufDB8fDB8fHww"
         title="Fire Department" rating={9.0} genre="Simple"
         short_description="Fire and Rescue"  dishes ={[
          {
            name: "999",
            description: "Fire",
            id: "3",
            image: "https://images.unsplash.com/photo-1542718311-3bba3adc74ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVtZXJnZW5jeSUyMHNlcnZpY2VzfGVufDB8fDB8fHww",
          },
          {
            name: "112",
            description: "Rescue",
            price: 10.99,
            id: "4",
            image: "https://images.unsplash.com/photo-1586470202424-a6f766679b45?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ]} long={10} lat={0} />
        <ResturantCard2 id={24} imgUrl="https://plus.unsplash.com/premium_photo-1661306409866-18a31687d71b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvYWQlMjBzaWRlJTIwYXNzaXRhbmNlfGVufDB8fDB8fHww"
         title="Road Side Assitance" rating={9.0} genre="Simple"
         short_description="Garage"  dishes ={[
          {
            name: "Brothers and Co",
            description: "Ready to help-0756565757",
            id: "3",
            image: "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
          {
            name: "Highway Maintance",
            description: "Rescue",
            price: 10.99,
            id: "4",
            image: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
        ]} long={10} lat={0} />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow2

const styles = StyleSheet.create({})