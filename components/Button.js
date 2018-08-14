import React from 'react';

const Button = (props) => {
    console.log( 'oh yeah', props );
    let style;
    if ( props.style ) {
        style = styles[props.style];
    }
    return (
        <button style={{...styles.buttonStyle,...style}} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

const styles = {
    buttonStyle: {
        backgroundColor: '#702779',
        color: 'white',
        fontSize: 16,
        fontWeight: 600,
        padding: '10px 30px'
    },
    inverted: {
        backgroundColor: 'white',
        border: '1px solid #702779',
        color: '#702779'
    }
}

export default Button;
