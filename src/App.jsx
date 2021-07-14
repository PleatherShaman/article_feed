import React from 'react';
import Layout from './components/layout';
import Header from './components/header';
import Content from './components/content';

const App = () => (
  <Layout>
    <Header title="Article Feed" />
    <Content />
  </Layout>
);

export default App;
