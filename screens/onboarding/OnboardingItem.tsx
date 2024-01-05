import React, { PropsWithChildren } from 'react';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../../components/Colors';

type OnboardingItemT =  PropsWithChildren<{
    item: {
        id: number;
        heading: string;
        description: string;
        image: any;

    }
}>

export default function OnboardingItem({item}: OnboardingItemT):React.JSX.Element {
    const { height, width, fontScale } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  return (
    <View style={{
        width: width,
        paddingHorizontal: 14,
        paddingVertical: 14,
        paddingTop: insets.top,
      }}>
      <View
        style={{
          marginTop: 40,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          style={{ width: "100%", aspectRatio: 1.5 / 1 }}
          resizeMode="contain"
          source={item.image}
        />
      </View>
      <View style={{ padding: 20, gap: 10}}>
        <Text style={{ fontFamily: "Inter-Bold", fontSize: 25 / fontScale, color: Colors.primary,
    textAlign: "center",  flexShrink: 1, lineHeight: 40 }}>
          {item.heading}
        </Text>
          <Text
            style={{
              fontFamily: "Inter-Thin",
              fontSize: 16 / fontScale,
              color: Colors.black,
              textAlign: "center",
              flexShrink: 1,
              lineHeight: 30
            }}
          >
            {item.description}
          </Text>
      </View>
    </View>
  )
}