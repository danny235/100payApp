import React, { useState } from 'react';
import {Image, Pressable, View, useWindowDimensions} from 'react-native';
import PayLogo from '../../assets/images/payLogo.png';
import CustomView from '../../components/Views/CustomView';
import { ArrowBackwardIcon, ArrowRightIcon, EyeIcon, EyeLineIcon } from '../../components/SvgAssets';
import { MediumText, RegularText } from '../../components/styles/styledComponents';
import * as yup from 'yup';
import { Button } from '../../components/Button/Button';
import Input from '../../components/Input';
import { Formik } from 'formik';
import { Colors } from '../../components/Colors';

const loginSchema = yup.object().shape({
  email: yup.string().required().label('Email').email(),
  password: yup
    .string()
    .required()
    .label('Password')
    .min(8, 'Seems a bit short'),
});

export default function SignIn(): React.JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const {fontScale} = useWindowDimensions()
  return (
    <CustomView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 60,
        }}>
        <ArrowBackwardIcon />
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
          <View>
            <View>
              <View>
                <Input
                  placeholder="johndoe@example.com"
                  formikProps={formikProps}
                  formikKey="email"
                  value={formikProps.values.email}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  label="Email"
                />
              </View>
              <View style={{position: 'relative'}}>
                <Input
                  formikProps={formikProps}
                  formikKey="password"
                  placeholder="*********"
                  value={formikProps.values.password}
                  secureTextEntry={showPassword ? false : true}
                  style={{paddingRight: 80}}
                  label="Password"
                />
                <Pressable
                  style={{
                    position: 'absolute',
                    bottom: 52,
                    right: 30,
                  }}
                  onPress={() =>
                    setShowPassword(prevState => {
                      return !prevState;
                    })
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
            <View style={{gap: 40}}>
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
