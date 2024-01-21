import React, { ReactNode } from 'react';
import {View, Text, StyleSheet, TextInputProps, TextInput} from 'react-native';
import {useWindowDimensions} from 'react-native';
import styled from "styled-components/native"
import { Colors } from '../Colors';
import { MediumText, RegularText } from '../styles/styledComponents';

interface InputProps extends TextInputProps {
  label: string;
  formikProps: any; // Adjust the type as per your Formik props
  formikKey: string;
  onChangeText?: (text: string) => void;
} 

const StyledInput = styled.TextInput`
  // border-radius: 5px;
  // width: 100%;
  // padding: 10px;
  // font-family: SpaceGrotesk-Medium;
  // font-size: 15px;
  
  // background-color: ${Colors.white};
`;


function Input({
  label,
  formikProps,
  formikKey,
  onChangeText,
  ...rest
}: InputProps): React.JSX.Element {
  const inputStyles: {borderColor?: string} = {};
  const {fontScale} = useWindowDimensions();

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = 'red';
  }

  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps} label={label}>
      <TextInput
        onChangeText={
          onChangeText ? onChangeText : formikProps.handleChange(formikKey)
        }
        onBlur={formikProps.handleBlur(formikKey)}
        style={inputStyles}
        // selectionColor={Colors.secondary}
        {...rest}
      />
    </FieldWrapper>
  );
};

interface FieldWrapperProps {
  children: ReactNode;
  label: string;
  formikProps: any; // Adjust the type as per your Formik props
  formikKey: string;
}

function FieldWrapper ({
  children,
  label,
  formikProps,
  formikKey,
}: FieldWrapperProps): React.JSX.Element {
  const {fontScale} = useWindowDimensions();

  return (
    <View>
      <MediumText style={{fontSize:15 / fontScale}}>
        {label}
      </MediumText>
      {children}
      <RegularText style={styles.error}>
        {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
      </RegularText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    marginBottom: 20,
    height: 17.5,
    color: 'red',
    fontFamily: 'DMSans-Regular',
  },
  input: {
    padding: 10,
    marginBottom: 3,
  },
  inputContainer: {
    marginBottom: 20,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default Input;
