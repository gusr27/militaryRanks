import React, {Component} from 'react'
import { Container, Card,CardItem, Body, Content, Icon, Text,Thumbnail, Segment, List, ListItem, Button, Left, Right} from 'native-base'
import {Image, FlatList, View} from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import enlistedData from './AirForceList.json'
class AirForce extends Component {

  loadChanges(){
      
  }
    
    
  render(){
    return(

    
        
     <Content>
    
        
      <Grid>
        
            <Row>
                <Col>
                    <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/E2_USAF_AM.svg/1425px-E2_USAF_AM.svg.png"}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                </Col> 
                <Col>
                     <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/E3_USAF_AM1.svg/1024px-E3_USAF_AM1.svg.png"}} resizeMode={"contain"}style={{height: 50, width: 50}}></Image>
                </Col>
                <Col>
                     <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/E4_USAF_SAM.svg/1024px-E4_USAF_SAM.svg.png"}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/E2_USAF_AM.svg/1425px-E2_USAF_AM.svg.png"}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                </Col> 
                <Col>
                     <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/E3_USAF_AM1.svg/1024px-E3_USAF_AM1.svg.png"}} resizeMode={"contain"}style={{height: 50, width: 50}}></Image>
                </Col>
                <Col>
                     <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/E4_USAF_SAM.svg/1024px-E4_USAF_SAM.svg.png"}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/E2_USAF_AM.svg/1425px-E2_USAF_AM.svg.png"}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                </Col> 
                <Col>
                     <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/E3_USAF_AM1.svg/1024px-E3_USAF_AM1.svg.png"}} resizeMode={"contain"}style={{height: 50, width: 50}}></Image>
                </Col>
                <Col>
                     <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/E4_USAF_SAM.svg/1024px-E4_USAF_SAM.svg.png"}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/E2_USAF_AM.svg/1425px-E2_USAF_AM.svg.png"}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                </Col> 
                <Col>
                     <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/E3_USAF_AM1.svg/1024px-E3_USAF_AM1.svg.png"}} resizeMode={"contain"}style={{height: 50, width: 50}}></Image>
                </Col>
                <Col>
                     <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/E4_USAF_SAM.svg/1024px-E4_USAF_SAM.svg.png"}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                </Col>
            </Row>
    </Grid>
    </Content>
    )
  }
}

const styles={
     
}

export default AirForce
