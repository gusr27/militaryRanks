import React, {Component} from 'react'
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Segment} from 'native-base'
import AirForce from './components/AirForce'

class App extends Component {
  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Icon name="menu"/>
          </Left>
          <Body>
            <Title>Military Ranks</Title>
          </Body>
          <Right/>
        </Header>
        <AirForce/>
        <Footer>
          <FooterTab>
            <Button key={1} active>
              <Text>Air Force</Text>
            </Button>
            <Button key={2}>
              <Text>Army</Text>
            </Button>
            <Button key={3}>
              <Text>Marines</Text>
            </Button>
            <Button key={4}>
              <Text>Navy</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default App
