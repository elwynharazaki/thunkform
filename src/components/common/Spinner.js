import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    const { spinnerStyle } = styles;

    return (
        <View style={spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

// 9-4
// Create a styling for View that containing ActivityIndicator
const styles = {
    spinnerStyle: {
        // 9-8
        // There's a big ground-breaking changes in React Native library starting
        //   from September 2017 release
        // The flex style is not working as expected like before in displaying the 
        //   container to full area available
        // To resolve it, we change the flex to width property and give it a 100% value
        // flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };
