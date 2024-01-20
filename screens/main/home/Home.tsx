import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleProp,
  View,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PayLogo from '../../../assets/images/payLogo.png';
import {Colors} from '../../../components/Colors';
import {
  BoldText,
  MediumText,
} from '../../../components/styles/styledComponents';
import {RootStackParamList} from '../../../routes/AppStacks';
import Action from './Action';
import Balance from './Balance';
import TransactionItem from './TransactionItem';

import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {TouchableOpacity, ViewStyle} from 'react-native';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface CustomBackdropProps {
  animatedIndex: SharedValue<number>;
  style: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const CustomBackdrop: React.FC<CustomBackdropProps> = ({
  animatedIndex,
  style,
  onPress,
}) => {
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle],
  );

  return (
    <Animated.View style={containerStyle}>
      <TouchableOpacity style={style} onPress={onPress} />
    </Animated.View>
  );
};

const trx = [
  {
    id: 1,
    title: 'recieved',
    from: '984340',
    date: '5:45 PM, Aug 1, 2022',
    amount: '10,000',
    status: 'successful',
  },
  {
    id: 2,
    title: 'sent',
    from: '984340',
    date: '5:45 PM, Aug 1, 2022',
    amount: '10,000',
    status: 'successful',
  },
  {
    id: 3,
    title: 'recieved',
    from: '984340',
    date: '5:45 PM, Aug 1, 2022',
    amount: '10,000',
    status: 'successful',
  },
  {
    id: 4,
    title: 'sent',
    from: '984340',
    date: '5:45 PM, Aug 1, 2022',
    amount: '10,000',
    status: 'failed',
  },
];

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

export default function Home({navigation}: HomeProps): React.JSX.Element {
  const {fontScale} = useWindowDimensions();
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  // state
  const [snapTo, setSnapTo] = useState(['38%', '40%']); //38%
  // variables
  const snapPoints = useMemo(() => snapTo, [snapTo]);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handlePresentModalClose = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

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
      <ScrollView>
        <Action
          onSendClick={handlePresentModalPress}
          
        />
        <FlatList
          data={trx}
          style={{flexGrow: 1}}
          contentContainerStyle={{flex: 1, gap: 20, paddingVertical: 20}}
          ListHeaderComponent={() => (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <BoldText style={{fontSize: 16 / fontScale}}>
                Recent transactions
              </BoldText>
              <Pressable>
                <MediumText style={{fontSize: 16 / fontScale}}>
                  See all
                </MediumText>
              </Pressable>
            </View>
          )}
          renderItem={({item}) => <TransactionItem item={item} />}
        />
      </ScrollView>

      {/* Send naira modal */}
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          handleIndicatorStyle={{
            borderWidth: 0,
            borderColor: '',
            width: '0%',
          }}
          enableContentPanningGesture={false}
          backdropComponent={({animatedIndex, style}) => (
            <CustomBackdrop
              onPress={handlePresentModalClose}
              animatedIndex={animatedIndex}
              style={style}
            />
          )}
          animateOnMount={true}>
          <Icon name="x" />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
}
