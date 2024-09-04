import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Features from '../components/Features';
import { dummyMessages } from '../constants';

function Home() {
  const [messages, setMessages] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);

  const handleRecording = () => {
    setRecording(!recording);
  }

  const handleClear = () => {}

  const handleStop = () => {}

  return (
    <View className='flex-1 bg-white'>
      <SafeAreaView className='flex-1 flex mx-5'>
        <View className='flex-row justify-center'>
          <Image source={require('../../assets/images/robot_icon.png')} style={{height: hp(15), width: hp(15) }} />
        </View>

        {
          messages.length > 0 ? (
            <View className='space-y-2 flex-1'>
              <Text style={{fontSize: wp(5)}} className='text-gray-700 font-semibold ml-1'>Assistant</Text>
              <View style={{height: hp(58)}} className='bg-neutral-200 rounded-3xl p-4'>
                <ScrollView bounces={false} showsVerticalScrollIndicator={false} className='space-y-4'>
                  {
                    messages.map((message, index) => {
                      if(message.role === 'assistant') {
                        if(message.content.includes('https')) {
                          // ai image
                          return (
                            <View key={index} className='flex-row justify-start'>
                              <View className='p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none'>
                                <Image source={{ uri: message.content}} className='rounded-2xl' resizeMode='contain' style={{ height: wp(60), width: wp(60)}} />
                              </View>
                            </View>
                          )
                        } else {
                          // ai text
                          return (
                            <View key={index} style={{width: wp(70)}} className='bg-emerald-100 rounded-xl p-2 rounded-tl-none'>
                              <Text>{message.content}</Text>
                            </View>
                          )
                        }
                      } else {
                        // user text
                        return (
                          <View key={index} className='flex-row justify-end'>
                            <View style={{width: wp(70)}} className='bg-white rounded-xl p-2 rounded-tr-none'>
                              <Text>{message.content}</Text>
                            </View>
  
                          </View>
                        )
                      }
                    })
                  }
                </ScrollView>
              </View>
            </View>
          ) : <Features />
        }

        <View className='flex flex-row justify-around items-center'>

          <TouchableOpacity onPress={handleStop} className='bg-red-400 rounded-3xl py-2 px-3'>
            <Text>Stop</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleRecording}>
            <View className={`rounded-full p-2 ${recording ? 'bg-red-200' : 'bg-emerald-200'}`}>
              <View className={`bg-emerald-700 rounded-full p-2 ${recording ? 'bg-red-700' : 'bg-emerald-700'}`}>
                <Image source={require('../../assets/images/recording_icon.png')} style={{width: hp(5), height: hp(5)}}/>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleClear} className='bg-neutral-400 rounded-3xl py-2 px-3'>
            <Text>Clear</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </View>
  )
}

export default Home