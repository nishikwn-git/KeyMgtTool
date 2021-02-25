import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import LineExample from './Line';

Amplify.configure(awsconfig);

const App = () => (
  <AmplifyAuthenticator>
    <div className='App'>
      <LineExample />
      <AmplifySignOut/>
    </div>
  </AmplifyAuthenticator>
);

export default App;
