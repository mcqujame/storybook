import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import Card from '../components/Card';
import TextInput from '../components/TextInput';
import FieldLabel from '../components/FieldLabel';
import FormGroup from '../components/FormGroup';

storiesOf('Atoms', module)
  .add('Button', () => (
      <div>
        <h2>Default Button</h2>
        <Button onClick={action('clicked')}>Hello Button</Button>
        <h2>Inverted Button</h2>
        <Button style="inverted" onClick={action('clicked')}>Hello Button</Button>
      </div>
  ))
  .add('Card', () => (
      <div>
          <h2>Default Card</h2>
          <Card>This is a card style</Card>
          <h2>Inverted Card</h2>
          <Card style="inverted">This is an inverted card style</Card>
      </div>
  ))
  .add('FieldLabel', () => (
      <div>
          <FieldLabel>Sample Text</FieldLabel>
      </div>
  ))
  .add('TextInput', () => (
      <div>
          <TextInput id="test"></TextInput>
      </div>
  ))

storiesOf('Molecules', module)
    .add('FormField', () => (
        <div>
            <FormGroup>First Name</FormGroup>
        </div>
    ))
