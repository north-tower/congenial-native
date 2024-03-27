import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames"
import ResturantCard from './ResturantCard'

const FeaturedRow = ({id, title, description }) => {
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
        <ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1509732344995-2397751a0061?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9saWNlJTIwc3RhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
         title="Law Enforcement Services" rating={4.5} genre="European"  
         short_description="Police stations serve as essential hubs for law enforcement, ensuring public safety and upholding justice within communities. They provide a vital link between citizens and law enforcement officers, offering support, resources, and a sense of security to residents." 
         dishes={[
          {
            name: "Juja Police",
            description: "Ready to serve.",
            price: 12.99,
            id: "1",
            image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXJuJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          },
          {
            name: "DCI Juja",
            description: "Best in the game.",
            price: 9.99,
            id: "2",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
        ]}
          long={10} lat={0} address={78}/>
         <ResturantCard id={14} imgUrl="https://images.unsplash.com/photo-1606613816768-63888be4a54f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVtZXJnZW5jeSUyMHNlcnZpY2VzfGVufDB8fDB8fHww"
         title="Fire and Rescue Services" rating={7.5} genre="Earthy" address="56"
            short_description="Fire departments are the cornerstone of community safety, responding swiftly to emergencies and protecting lives and property from the ravages of fire. With their courage and expertise, they stand as guardians against the destructive forces of nature, offering reassurance and support to those in need." 
            dishes ={[ {
                name: "Fire Station Central",
                description: "Fire Warriors.",
                id: "3",
                image: "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
              },
              {
                name: "Fire Station Outpost",
                description: "Experience the charm of a rustic kitchen with vintage elements and natural textures. ",
                price: 10.99,
                id: "4",
                image: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
              },
              ]}
              long={10} lat={0} />
              <ResturantCard id={14} imgUrl="https://images.unsplash.com/photo-1619025873875-59dfdd2bbbd6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGVtZXJnZW5jeSUyMHNlcnZpY2VzfGVufDB8fDB8fHww"
                    title="Emergency Medical Services (EMS)" rating={7.5} genre="Earthy" address="56"
                    short_description="Hospitals stand as beacons of healing and hope, providing essential medical care and support to individuals in times of illness and injury. With their skilled healthcare professionals and state-of-the-art facilities, they offer comfort and compassion to patients and their families, ensuring that everyone receives the care they need to recover and thrive." 
                    dishes ={[
              {
                name: "EMS AMBULANCE",
                description: "Commited to serve.",
                id: "3",
                image: "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
              },
              {
                name: "ST JOHN AMBULANCE",
                description: "24/7 open. ",
                price: 10.99,
                id: "4",
                image: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
              },
            ]}
            long={10} lat={0} />
            <ResturantCard id={14} imgUrl="https://images.unsplash.com/photo-1611839699701-5cd5f18c25a4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29hc3QlMjBndWFyZHN8ZW58MHx8MHx8fDA%3D"
                    title="Search and Rescue (SAR):" rating={7.5} genre="Earthy" address="56"
                    short_description="Search and rescue teams specialize in locating and rescuing individuals who are lost, injured, or in distress in remote or inaccessible areas such as mountains, forests, or bodies of water."
                    dishes ={[
              {
                name: "Marina One",
                description: "Eastside.",
                id: "3",
                image: "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
              },
              {
                name: "Likoni",
                description: "Here to stay. ",
                price: 10.99,
                id: "4",
                image: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
              },
            ]}
            long={10} lat={0} />
            <ResturantCard id={14} imgUrl="https://images.unsplash.com/photo-1644567103258-6da3857faab4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHV0aWxpdHklMjBjb21wYW5pZXN8ZW58MHx8MHx8fDA%3D"
                    title="Utilities" rating={7.5} genre="Earthy" address="56"
                    short_description="Utilities are the backbone of modern society, providing essential services such as electricity, water, and gas that sustain our daily lives. With their reliable infrastructure and expertise, they ensure that homes, businesses, and industries have access to the vital resources needed for comfort, productivity, and progress." 
                    dishes ={[
              {
                name: "KPLC",
                description: "Powering people for better lives by innovatively securing business sustainability.",
                id: "3",
                image: "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
              },
              {
                name: "Water company",
                description: "Water is life. ",
                price: 10.99,
                id: "4",
                image: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
              },
            ]}
            long={10} lat={0} />

      </ScrollView>
    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})