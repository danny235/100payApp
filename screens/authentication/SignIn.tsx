import React from 'react';
import {Image, View} from 'react-native';
import PayLogo from '../../assets/images/payLogo.png';
import CustomView from '../../components/Views/CustomView';

export default function SignIn(): React.JSX.Element {
  return (
    <CustomView>
      <View style={{flexDirection: 'row'}}>
        <Image
          resizeMode="contain"
          source={PayLogo}
          style={{
            width: '30%',
            aspectRatio: 2.4 / 0.9,
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 60,
          }}
        />
      </View>
    </CustomView>
  );
}
