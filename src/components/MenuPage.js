import React, {Component}from 'react'
import {Container, Card, CardItem,Header, Title, Content, Button, Left, Right, Body, Icon, Text, Segment, List, ListItem, Thumbnail, Drawer, Footer} from 'native-base'
import {Actions} from 'react-native-router-flux'
import Images from '@images/images'

class MenuPage extends Component{
    
    renderListItem(){
        if(this.props.title === "Air Force"){
            
            return(
                <ListItem onPress= {() => {Actions.airforce(); }}>
                        {this.renderThumbnailE()}
                        <Body>
                            <Text>Enlisted</Text>
                            <Text note>Tap to See Ranks</Text>
                        </Body>
                </ListItem>
            )
        }
        else if (this.props.title==="Marines"){
            return(
                <ListItem onPress= {() => {Actions.marines(); }}>
                        {this.renderThumbnailE()}
                        <Body>
                            <Text>Enlisted</Text>
                            <Text note>Tap to See Ranks</Text>
                        </Body>
                </ListItem>
            )
        }
        else if(this.props.title==="Navy"){
            return(
                <ListItem onPress= {() => {Actions.navy(); }}>
                        {this.renderThumbnailE()}
                        <Body>
                            <Text>Enlisted</Text>
                            <Text note>Tap to See Ranks</Text>
                        </Body>
                </ListItem>
            )
        }
        else if (this.props.title==="Army"){
            return(
                <ListItem onPress= {() => {Actions.army(); }}>
                        {this.renderThumbnailE()}
                        <Body>
                            <Text>Enlisted</Text>
                            <Text note>Tap to See Ranks</Text>
                        </Body>
                </ListItem>
            )
        }
    }
    
    renderThumbnailE(){
        if(this.props.title === "Air Force"){
            return(<Thumbnail square size={80} resizeMode={"contain"} source={Images.AF[0].ranks[0]} />)
        }
        else if(this.props.title === "Army"){
            return(<Thumbnail square size={80} resizeMode={"contain"} source={Images.Army[0].ranks[0]} />)
        }
        else if(this.props.title === "Marines"){
            return(<Thumbnail square size={80} resizeMode={"contain"} source={Images.Marines[0].ranks[0]} />)
        }
        else if(this.props.title === "Navy"){
            return(<Thumbnail square size={80} resizeMode={"contain"} source={Images.Navy[0].ranks[0]} />)
        }
    }
    
    renderThumbnailO(){
        if(this.props.title === "Air Force"){
            return(<Thumbnail square size={80} resizeMode={"contain"} source={Images.AF[1].ranks[0]} />)
        }
    }
   
    
    render(){
        
    
        return(
            
           <Content contentContainerStyle={{flex: 1}}>
              
                
                <List>
                    {this.renderListItem()}
                    <ListItem onPress= {() => {Actions.home(); }}>
                        {this.renderThumbnailO()}
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