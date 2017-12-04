import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({ size }) => {
   const { spinnerStyle } = styles;
   
   return (
      <View style={spinnerStyle}>
         <ActivityIndicator size={size || 'large'} />
      </View>
   );
};

const styles = {
   spinnerStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'        
    }
};

export { Spinner };
