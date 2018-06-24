import React, {Component} from 'react'
import { Card, Image,CardItem, Body, Content, Icon, Text, Segment, List, ListItem, Button} from 'native-base'
import enlistedData from './AirForceList.json'
class AirForce extends Component {
    
    const {title, data}= enlistedData
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
                      <Text>{title}</Text>
                      <Image source={{image}} style={{height:200, width:null, flex:1}}/>
                    </Body>
                  </CardItem>
                </Card>

              </ListItem>
            }>
          </List>
      </Content>


    )
  }
}

export default AirForce
