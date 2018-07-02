import React, { Component, Fragment } from 'react';

import DATA from '../data/jsonData.json';
import { Layout } from '../styles';
import Dropdown from './Dropdown';

// ////////////////////////////////////////////////////////

class Main extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Layout width="400px">
          <Dropdown dataItems={DATA} />
        </Layout>
      </Fragment>
    );
  }
}

export default Main;
