import React from 'react';
import { View } from 'react-native';

// Card can receive any kind of component as an input
// So we can use props as a variable to hold the input
const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {/* We can access the component that's being inputted asprops.children */}
            {/* props.children, for example, is equal with <Text>Some Text</Text> */}
            {props.children}
        </View>
    );
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }
};

// 8-3
// Because we use index.js as a single point of exporting component,
//   (the export statement run there), we can't use the usual "export default"
//   statement here
// So instead, we export the component as an object
export { Card };
