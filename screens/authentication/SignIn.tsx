import {Formik} from 'formik';
import React, {useState} from 'react';
import {Image, Pressable, View, useWindowDimensions} from 'react-native';
import * as yup from 'yup';
import PayLogo from '../../assets/images/payLogo.png';
import {Button} from '../../components/Button/Button';
import {Colors} from '../../components/Colors';
import {ArrowBackwardIcon, ArrowRightIcon, EyeIcon, EyeLineIcon} from '../../components/SvgAssets';
import CustomView from '../../components/Views/CustomView';
import {MediumText, RegularText} from '../../components/styles/styledComponents';
import { NavigationProp } from '@react-navigation/native';
import Input from '../../components/Input';
import { TextInput } from 'react-native-gesture-handler';

const loginSchema = yup.object().shape({
  email: yup.string().required().label('Email').email(),
  password: yup
    .string()
    .required()
    .label('Password')
    .min(8, 'Seems a bit short'),
});

interface RootAuthI {
  navigation: NavigationProp<any>;
}

export default function SignIn({navigation}: RootAuthI): React.JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {fontScale} = useWindowDimensions();
  return (
    <CustomView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 60,
        }}>
        <Pressable onPress={()=>navigation.goBack()}>
          <ArrowBackwardIcon />
        </Pressable>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          <Image
            resizeMode="contain"
            source={PayLogo}
            style={{
              width: '30%',
              aspectRatio: 2.4 / 0.9,
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          />
        </View>
      </View>

      <MediumText>Sign In To Your Account</MediumText>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
        }}
        validationSchema={loginSchema}>
        {formikProps => (
          <View style={{gap: 20}}>
            <View>
              
                {/* <Input
                  placeholder="johndoe@example.com"
                  formikProps={formikProps}
                  formikKey="email"
                  value={formikProps.values.email}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  label="Email"
                /> */}
              
              <View style={{position: 'relative'}}>
                {/* <Input
                  formikProps={formikProps}
                  formikKey="password"
                  placeholder="*********"
                  value={formikProps.values.password}
                  secureTextEntry={showPassword ? false : true}
                  // style={{paddingRight: 80}}
                  label="Password"
                /> */}
                <TextInput />
                <Pressable
                  style={{
                    position: 'absolute',
                    bottom: 52,
                    right: 30,
                  }}
                  onPress={() =>
                    setShowPassword(!showPassword)
                  }>
                  {showPassword ? <EyeLineIcon /> : <EyeIcon />}
                </Pressable>
              </View>
              <Pressable
                // onPress={() => navigation.navigate('EmailVerification')}
                style={{marginLeft: 'auto'}}>
                <RegularText style={{fontSize: 15 / fontScale, color: Colors.primary}}>
                  Forgot password?
                </RegularText>
              </Pressable>
            </View>
            <View style={{marginLeft: "auto"}}>
              {/* <View style={{flexDirection: 'row', gap: 5}}>
                <MediumText fontSize={15 / fontScale}>
                  Don't have an account?
                </MediumText>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}>
                  <MediumText
                    style={{color: COLORS.tomato}}
                    fontSize={15 / fontScale}>
                    Sign up
                  </MediumText>
                </TouchableOpacity>
              </View> */}
              <Button
                variant="primary"
                isLarge={false}
                isWide={false}
                onPress={() => {
                  formikProps.handleSubmit();
                }}>
                <MediumText
                  style={{color: Colors.white, fontSize: 15 / fontScale}}>
                  Continue
                </MediumText>
                <ArrowRightIcon />
              </Button>
            </View>
          </View>
        )}
      </Formik>
    </CustomView>
  );
}
