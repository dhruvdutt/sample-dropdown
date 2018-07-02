import React from 'react';

import { Layout, Input } from '../styles';

// ////////////////////////////////////////////////////////

const InputBox = props => (
  <Layout>
    <Input placeholder="Search by ID, address, name" {...props} />
  </Layout>
);

export default InputBox;
