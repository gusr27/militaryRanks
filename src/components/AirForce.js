import React, {Component} from 'react'
import { Container, Card,CardItem, Body, Content, Icon, Text,Thumbnail, Segment, List, ListItem, Button, Left, Right} from 'native-base'
import {Actions} from 'react-native-router-flux'
import {Image, FlatList, View, TouchableWithoutFeedback} from 'react-native'
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
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[0].title, rate: enlistedData[0].grade, description: enlistedData[0].description}); }}>
                         <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/E2_USAF_AM.svg/1425px-E2_USAF_AM.svg.png"}} resizeMode={"contain"} style={{height: 50, width: 50}}
                    
                    >
                    </Image>
                    </TouchableWithoutFeedback>
                   
                </Col> 
                <Col>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[1].title, rate: enlistedData[1].grade}); }}>
                     <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/E3_USAF_AM1.svg/1024px-E3_USAF_AM1.svg.png"}} resizeMode={"contain"}style={{height: 50, width: 50}}
                         
                         ></Image>
                    </TouchableWithoutFeedback>
                </Col>
                <Col>
                     <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/E4_USAF_SAM.svg/1024px-E4_USAF_SAM.svg.png"}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/E5_USAF_SSGT.svg/1024px-E5_USAF_SSGT.svg.png"}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                </Col> 
                <Col>
                     <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/E6_USAF_TSGT.svg/800px-E6_USAF_TSGT.svg.png"}} resizeMode={"contain"}style={{height: 50, width: 50}}></Image>
                </Col>
                <Col>
                     <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/E7a_USAF_MSGT.svg/800px-E7a_USAF_MSGT.svg.png"}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/E8a_USAF_SMSGT.svg/800px-E8a_USAF_SMSGT.svg.png"}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                </Col> 
                <Col>
                     <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/E8b_USAF_1STSGT2.svg/800px-E8b_USAF_1STSGT2.svg.png"}} resizeMode={"contain"}style={{height: 50, width: 50}}></Image>
                </Col>
                <Col>
                     <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/E9a_USAF_CMSGT.svg/777px-E9a_USAF_CMSGT.svg.png"}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/E9b_USAF_1STSGT3.svg/777px-E9b_USAF_1STSGT3.svg.png"}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                </Col> 
                <Col>
                     <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/E9c_USAF_CCMS.svg/776px-E9c_USAF_CCMS.svg.png"}} resizeMode={"contain"}style={{height: 50, width: 50}}></Image>
                </Col>
                <Col>
                     <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/E9d_USAF_CMSAF.svg/776px-E9d_USAF_CMSAF.svg.png"}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
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
