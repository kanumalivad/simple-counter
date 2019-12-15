import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Badge, Button, Icon } from 'antd';
import {increment, decrement} from '../redux/actions/actions';
import { connect } from 'react-redux';

const Content = Layout.Content;
const ButtonGroup = Button.Group;

class App extends Component {
  render() {
    return (
     <Layout>
       <Content>
        <Badge count={this.props.count} style={{ backgroundColor: '#52c41a',  }} showZero={true} />
       </Content>
       <ButtonGroup>
          <Button onClick={this.props.decrement}>
            <Icon type="minus" />
          </Button>
          <Button onClick={this.props.increment}>
            <Icon type="plus" />
          </Button>
        </ButtonGroup>
     </Layout>
    );
  }
}


const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProprs = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProprs)(App);