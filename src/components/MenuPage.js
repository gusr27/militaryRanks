import React, {Component}from 'react'
import {Container, Card, CardItem,Header, Title, Content, Button, Left, Right, Body, Icon, Text, Segment, List, ListItem, Thumbnail, Drawer, Footer} from 'native-base'
import {Actions} from 'react-native-router-flux'
import Images from '@images/images'

class MenuPage extends Component{
   
    
    render(){
        
    
        return(
            
           <Content contentContainerStyle={{flex: 1}}>
              
                
                <List>
                    <ListItem onPress= {() => {Actions.airforce(); }}>
                        <Thumbnail square size={80} source={Images.AFLogo} />
                        <Body>
                            <Text>Enlisted</Text>
                            <Text note>Tap to See Ranks</Text>
                        </Body>
                    </ListItem>
                    <ListItem onPress= {() => {Actions.airforce(); }}>
                        <Thumbnail square size={80} source={Images.AFLogo} />
                        <Body>
                            <Text>Officers</Text>
                            <Text note>Tap to See Ranks</Text>
                        </Body>
                    </ListItem>
                    
                </List>
               
            </Content>
            
          
        )
    }
}

export default MenuPage