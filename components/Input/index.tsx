import React from 'react';
import {View, Text, StyleSheet, TextInputProps} from 'react-native';
import {useWindowDimensions} from 'react-native';
import styled from "styled-components/native"
import { Colors } from '../Colors';
import { RegularText } from '../styles/styledComponents';


const StyledInput = styled.TextInput<TextInputProps>`
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  aspect-ratio: 2 / 0.3;
  font-family: DMSans-Medium;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.white};
`;

export interface InputProps {
  label: string;
  formikProps: any; // Adjust the type as per your Formik props
  formikKey: string;
  onChangeText?: (text: string) => void;
} 

const Input: React.FC<InputProps> = ({
  label,
  formikProps,
  formikKey,
  onChangeText,
  ...rest
}) => {
  const inputStyles: {borderColor?: string} = {};
  const {fontScale} = useWindowDimensions();

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = 'red';
  }

  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps} label={label}>
      <StyledInput
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
  children: React.ReactNode;
  label: string;
  formikProps: any; // Adjust the type as per your Formik props
  formikKey: string;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({
  children,
  label,
  formikProps,
  formikKey,
}) => {
  const {fontScale} = useWindowDimensions();

  return (
    <View>
      <RegularText style={{fontSize:15 / fontScale}}>
        {label}
      </RegularText>
      {children}
      <Text style={styles.error}>
        {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
      </Text>
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
