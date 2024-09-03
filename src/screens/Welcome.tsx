import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

function Welcome() {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView className='flex-1 flex justify-around bg-white'>
      <View className='space-y-2'>
        <Text style={{ fontSize: wp(10) }} className='text-center font-bold text-gray-700'>
          Jarvis
        </Text>
        <Text style={{ fontSize: wp(4) }} className="text-center tracking-wider text-gray-600 font-semibold">
          The future is here, powered by AI.
        </Text>
      </View>
        <View className='flex-row justify-center'>
          <Image source={require('../../assets/images/welcome2.png')} style={{ width: wp(75), height: wp(75) }}/>
        </View>
      <TouchableOpacity onPress={handleGetStarted} className='bg-emerald-600 mx-5 p-4 rounded-2xl'>
        <Text style={{ fontSize: wp(6) }} className='text-center font-bold text-white'>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Welcome;