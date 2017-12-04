import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({
   keyboardType,
   label,
   onChangeText,
   placeholder,
   secureTextEntry,
   value
}) => {
   const {
      containerStyle,
      inputStyle,
      labelStyle
   } = styles;

   return (
      <View style={containerStyle}>
         <Text style={labelStyle}>{label}</Text>
            <TextInput
               autoCorrect={false}
               keyboardType={keyboardType}
               onChangeText={onChangeText}
               placeholder={placeholder}
               secureTextEntry={secureTextEntry}
               style={inputStyle}
               value={value}
            />
      </View>
   );
};

const styles = {
   containerStyle: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',  
      height: 40
   },
   
   inputStyle: {
      color: '#000',
      flex: 2,
      fontSize: 18,
      lineHeight: 23,
      paddingLeft: 5,
      paddingRight: 5      
   },
   
   labelStyle: {
      flex: 1,
      fontSize: 18,
      paddingLeft: 20,
   }
};

export { Input };
