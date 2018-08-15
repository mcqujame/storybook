import React from 'react';

const FieldLabel = (props) => {
    return (
        <label for={props.for} style={styles.labelStyle}>{ props.children }</label>
    )
}

const styles = {
    labelStyle: {
        color: '#313335',
        fontSize: 14,
        textTransform: 'uppercase',
        fontFamily: 'sans-serif',
        fontWeight: 600,
        marginBottom: 10
    }
}

export default FieldLabel;
