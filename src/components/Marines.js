import React, {Component} from 'react'
import { Card,CardItem, Body, Content, Icon, Text, Segment, List, ListItem, Button} from 'native-base'
import {Image} from 'react-native'
import enlistedData from './MarineList.json'
class Marines extends Component {
    
    
  render(){
    return(

    
        
      <Content hasSegment>
        <Segment>
          <Button first active={true}><Text>Enlisted</Text></Button>
          <Button last ><Text>Officer</Text></Button>
        </Segment>
        <List dataArray={enlistedData}
            renderRow={(enlistedData) =>
              <ListItem>
                <Card>
                  <CardItem>
                    <Body>
                      <Text>{enlistedData.title}</Text>
                      
                    </Body>
                  </CardItem>
                    <CardItem cardBody>
                        <Image source={{uri: enlistedData.image}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                </Card>
              </ListItem>
            }>
          </List>
      </Content>


    )
  }
}

export default Marines