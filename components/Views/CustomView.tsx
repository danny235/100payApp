import React, {ReactNode} from 'react';
import {View, Text, } from 'react-native';
import {Colors} from '../Colors';


interface CustomViewProps {
  children: ReactNode;
}

export default function CustomView({children}: CustomViewProps) {
  return (
    <View
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: Colors.white}}>
      {children}
    </View>
  );
}
