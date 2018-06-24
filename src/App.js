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
            <Button active>
              <Text>Air Force</Text>
            </Button>
            <Button>
              <Text>Army</Text>
            </Button>
            <Button >
              <Text>Marines</Text>
            </Button>
            <Button>
              <Text>Navy</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default App
