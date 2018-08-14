import React from 'react';

const Card = (props) => {
    let style;
    if ( props.style ) {
        style = styles[props.style];
    }
    return (
        <div style={{...styles.cardStyle,...style}}>{ props.children }</div>
    );
}

const styles = {
    cardStyle: {
        boxShadow: '0px 0px 4px #818385',
        padding: 20
    },
    inverted: {
        color: 'white',
        backgroundColor: '#702779'
    }
};

export default Card;
