import { View, Text } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import * as Progress from "react-native-progress"

const InfoRow = ({id, name, description, price, image }) => {
  return (
    <View style={tw`bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md`}>
                <View style={tw`flex-row justify-between`}>
                    <View>
                        
                        <Text style={tw`text-4xl text-black font-bold`}>{name}</Text>
                        <Text style={tw`text-lg text-gray-400`}>
                            {description}
                        </Text>
                    </View>
                        
                  </View>
                  <Progress.Bar size={30} color="green" indeterminate={true} />
                  <Text style={tw`mt-3 text-gray-500`}>
                      
                  </Text>
            </View>
  )
}

export default InfoRow