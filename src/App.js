import React from 'react'
import Amplify from 'aws-amplify'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import awsconfig from './aws-exports'
import LineExample from './Line'
import { Route, MemoryRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Button from 'react-bootstrap/Button'
import './style.css'

Amplify.configure(awsconfig);

const App = () => (
  <AmplifyAuthenticator>
    <div className='App'>
      <h1>メニュー画面（テスト用）</h1>
      <table border="0" align="center" >
        <div class="container">
          <div class="row">
            <button type="submit" class="btn btn-primary">
              <MemoryRouter><Route component={() => <LineExample />}>西川ストレスグラフ </Route></MemoryRouter>
            </button>
          </div>
          <div class="row">
            <LineExample></LineExample>
          </div>
          <div class="row" class="d-flex justify-content-between">
            <button type="submit" class="btn btn-success">ぐー</button>
            <button type="submit" class="btn btn-danger">ちょき</button>
            <button type="submit" class="btn btn-warning">ぱー</button>
          </div>
        </div>
        <AmplifySignOut />
      </table>
    </div>
  </AmplifyAuthenticator>
);

export default App;
