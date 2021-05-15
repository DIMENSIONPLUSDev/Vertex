import React, { Component } from 'react';
import { Container, Content, Spinner } from 'native-base';
export default class Loader extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Spinner />
          <Spinner color='red' />
          <Spinner color='green' />
          <Spinner color='blue' />
        </Content>
      </Container>
    );
  }
}