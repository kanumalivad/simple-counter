import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Badge, Button, Icon } from 'antd';

const Content = Layout.Content;
const ButtonGroup = Button.Group;

class App extends Component {
  render() {
    return (
     <Layout>
       <Content>
        <Badge count={1} style={{ backgroundColor: '#52c41a',  }} />
       </Content>
       <ButtonGroup>
          <Button onClick={this.decline}>
            <Icon type="minus" />
          </Button>
          <Button onClick={this.increase}>
            <Icon type="plus" />
          </Button>
        </ButtonGroup>
     </Layout>
    );
  }
}

export default App;
