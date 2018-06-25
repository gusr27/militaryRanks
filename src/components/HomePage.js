import React, {Component} from 'react'
import {Container, Card, CardItem,Header, Title, Content, Button, Left, Right, Body, Icon, Text, Segment, List, ListItem, Thumbnail} from 'native-base'
import {Actions} from 'react-native-router-flux'

class HomePage extends Component{
    render(){
        return(
           <Content contentContainerStyle={{flex: 1}}>
              
                
                <List>
                    <ListItem onPress= {() => {Actions.airforce(); }}>
                        <Thumbnail square size={80} source={require("../assets/images/AirForceLogo.svg.png")} />
                        <Body>
                            <Text>Air Force</Text>
                            <Text note>Tap to See Ranks</Text>
                        </Body>
                    </ListItem>
                    <ListItem onPress= {() => {Actions.army(); }}>
                        <Thumbnail square size={80} source={require("../assets/images/ArmyLogo.png")} />
                        <Body>
                            <Text>Army</Text>
                            <Text note>Tap to See Ranks</Text>
                        </Body>
                    </ListItem >
                    <ListItem onPress= {() => {Actions.marines(); }}>
                        <Thumbnail square size={80} source={require("../assets/images/MarineCorpsLogo.png")} />
                        <Body>
                            <Text>Marine Corps</Text>
                            <Text note>Tap to See Ranks</Text>
                        </Body>
                    </ListItem>
                    <ListItem onPress= {() => {Actions.navy(); }}>
                        <Thumbnail square size={80} source={require("../assets/images/NavyLogo.png")} />
                        <Body>
                            <Text>Navy</Text>
                            <Text note>Tap to See Ranks</Text>
                        </Body>
                    </ListItem>
                </List>
            </Content>
          
        )
    }
}

export default HomePage