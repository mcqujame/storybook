import React from 'react';
import FieldLabel from './FieldLabel';
import TextInput from './TextInput';

const FormGroup = (props) => {
    const fieldVal = props.children.split(' ').join('-').toLowerCase();
    return (
        <div style={styles.formGroup}>
            <FieldLabel for={fieldVal}>{ props.children }</FieldLabel>
            <TextInput id={fieldVal}></TextInput>
        </div>
     )
};

const styles = {
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
}

export default FormGroup;
