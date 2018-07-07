import React, {Component} from 'react'
import {Container, Card, CardItem,Header, Title, Content, Button, Left, Right, Body, Icon, Text, Segment, List, ListItem, Thumbnail, Drawer} from 'native-base'
import {Actions} from 'react-native-router-flux'
import afData from './AirForceList.json'
import Images from '@images/images'

class HomePage extends Component{
   
    
    render(){
        
    
        return(
            
           <Content contentContainerStyle={{flex: 1}}>
              
                
                <List>
                    <ListItem onPress= {() => {Actions.menu({title: 'Air Force'}); }}>
                        <Thumbnail square size={80} source={Images.AFLogo} />
                        <Body>
                            <Text>Air Force</Text>
                            <Text note>Tap to See Ranks</Text>
                        </Body>
                    </ListItem>
                    <ListItem onPress= {() => {Actions.menu({title: 'Army'}); }}>
                        <Thumbnail square size={80} source={Images.ArmyLogo} />
                        <Body>
                            <Text>Army</Text>
                            <Text note>Tap to See Ranks</Text>
                        </Body>
                    </ListItem >
                    <ListItem onPress= {() => {Actions.menu({title: 'Marines'}); }}>
                        <Thumbnail square size={80} source={Images.MarineCorpsLogo} />
                        <Body>
                            <Text>Marine Corps</Text>
                            <Text note>Tap to See Ranks</Text>
                        </Body>
                    </ListItem>
                    <ListItem onPress= {() => {Actions.menu({title: 'Navy'}); }}>
                        <Thumbnail square size={80} source={Images.NavyLogo} />
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