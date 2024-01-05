import React, { useRef, useState } from 'react';
import { Animated, FlatList, Pressable, Text, View, useWindowDimensions } from 'react-native';
import slides from '../../assets/slides';
import { Colors } from '../../components/Colors';
import { PrimaryButton } from '../../components/styles/styledComponents';
import OnboardingItem from './OnboardingItem';



export default function Onboarding(): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);
  // const dispatch = useDispatch();
  const { width, height, fontScale } = useWindowDimensions();
  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: Array<any> }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("last item");
    }
  };
  return (
    <View style={{ position: "relative", backgroundColor: Colors.white, flex: 1 }}>
      <View >
        <Pressable style={{alignItems: "flex-end", paddingHorizontal: 20, paddingVertical: 20}}>
        <Text style={{fontFamily: "Inter-Bold", color: Colors.primary}}>Skip</Text>
        </Pressable>

      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
        {currentIndex === 3 ? (<View style={{paddingHorizontal: 20}}><PrimaryButton>
          <Text style={{fontFamily: "Inter-Bold",}}>Get Started</Text>
        </PrimaryButton></View>) : <View><Text>Hi</Text></View>}
      </View>

    </View>
  )
}