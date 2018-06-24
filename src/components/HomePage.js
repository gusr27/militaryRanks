import React, {Component} from 'react'
import {Container, Card, CardItem,Header, Title, Content, Button, Left, Right, Body, Icon, Text, Segment} from 'native-base'
import {Actions} from 'react-native-router-flux'

class HomePage extends Component{
    render(){
        return(
           <Content>
                <Button onPress= {() => {Actions.airforce(); }}><Text>Air Force</Text></Button>
          <Button onPress= {() => {Actions.army(); }}><Text>Army</Text></Button>
          <Button onPress= {() => {Actions.marines(); }}><Text>Marine Corps</Text></Button>
          <Button onPress= {() => {Actions.navy(); }}><Text>Navy</Text></Button>
            </Content>
          
        )
    }
}

export default HomePage