import React from 'react'
import {Container, Header, List, ListItem,Body, Text, Button, View} from 'native-base'
import {TouchableOpacity} from 'react-native'

const DrawerMenu = () => {
    return(
        <Container style={{ paddingTop:"3%"}}>
           <Header >
            <Body>
                <Text>Extras</Text>
            </Body>
          </Header>
            <List>
                
                <View style={{paddingTop:"50%"}}>
                <TouchableOpacity >
                <ListItem>
                    
                        <Text>Extras</Text>
                   
                </ListItem>
                </TouchableOpacity>
                 
               <TouchableOpacity>
                <ListItem>
                  
                        <Text>Extras</Text>
                   
                </ListItem>
                    </TouchableOpacity>
                <TouchableOpacity>
                <ListItem>
                   
                        <Text>Extras</Text>
                   
                </ListItem>
                    </TouchableOpacity>
                </View>
            </List>
        
        </Container>
    )
}

export default DrawerMenu