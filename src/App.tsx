import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppWrapper from './Components/AppWrapper';
import Layout from './Components/Layout';

const App = () => {
  return (
      <div>
          <AppWrapper>
              <Layout>
                  <div>test</div>
              </Layout>
          </AppWrapper>
      </div>
  )
}


export default App;
