import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import Card from '../components/Card';

storiesOf('Button', module)
  .add('with text', () => (
      <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('inverted style', () => (
      <Button style="inverted" onClick={action('clicked')}>Hello Button</Button>
  ))

 storiesOf('Card', module)
    .add('with text', () => (
        <Card>This is a card style</Card>
    ))
    .add('inverted', () => (
        <Card style="inverted">This is an inverted card style</Card>
    ))
