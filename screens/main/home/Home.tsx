import React from 'react';
import {Image, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PayLogo from '../../../assets/images/payLogo.png';
import {Colors} from '../../../components/Colors';
import Balance from './Balance';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/AppStacks';
import Action from './Action';
import Transactions from './Transactions';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

export default function Home({navigation}: HomeProps): React.JSX.Element {

  return (
    <View
      style={{
        backgroundColor: Colors.white,
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Pressable>
          <Image
            style={{borderRadius: 40, height: 40, width: 40}}
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1703617663829-ac7430988118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
            }}
          />
        </Pressable>
        <Image
          style={{width: '30%', aspectRatio: 2.4 / 0.5}}
          source={PayLogo}
        />
        <Pressable>
          <Icon name="notifications" color={Colors.neutral8} size={24} />
        </Pressable>
      </View>

      <Balance />
      <Action />
      <Transactions />
    </View>
  );
}
