import React, {PropsWithChildren} from 'react';
import {Image, Text, View, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../../components/Colors';
import { BoldText, LightText } from '../../components/styles/styledComponents';

type OnboardingItemT = PropsWithChildren<{
  item: {
    id: number;
    heading: string;
    description: string;
    image: any;
  };
}>;

export default function OnboardingItem({
  item,
}: OnboardingItemT): React.JSX.Element {
  const {height, width, fontScale} = useWindowDimensions();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        width: width,
        paddingHorizontal: 14,
        paddingTop: insets.top,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: '100%', aspectRatio: 1.9 / 2}}
          resizeMode="contain"
          source={item.image}
        />
      </View>
      <View style={{padding: 20, gap: 10}}>
        <BoldText
          style={{
            fontSize: 25 / fontScale,
            color: Colors.primary,
            textAlign: 'center',
            flexShrink: 1,
            lineHeight: 40,
          }}>
          {item.heading}
        </BoldText>
        <LightText
          style={{
            
            fontSize: 16 / fontScale,
            color: Colors.black,
            textAlign: 'center',
            flexShrink: 1,
            lineHeight: 30,
          }}>
          {item.description}
        </LightText>
      </View>
    </View>
  );
}
