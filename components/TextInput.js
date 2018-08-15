import React from 'react';

const TextInput = (props) => {
    return (
        <input id={props.id} style={styles.inputStyle} type="text" />
     )
};

const styles = {
    inputStyle: {
        fontSize: 16,
        padding: '6px 10px'
    }
}

export default TextInput;
