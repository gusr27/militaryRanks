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

    
        
     <Content contentContainerStyle={{paddingLeft: 50, flex: 1}}>
    
        
      <Grid >
            
            <Row>
                <Col>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[0].title, data: enlistedData[0]}) }}>
                         <Image source={{uri: enlistedData[0].image}} resizeMode={"contain"} style={{height: 50, width: 50}}
                    
                    >
                    </Image>
                    </TouchableWithoutFeedback>
                   
                </Col> 
                <Col>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[1].title, data: enlistedData[1]}) }}>
                     <Image source={{uri: enlistedData[1].image}} resizeMode={"contain"}style={{height: 50, width: 50}}
                         
                         ></Image>
                    </TouchableWithoutFeedback>
                </Col>
                <Col>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[2].title, data: enlistedData[2]}) }}>
                     <Image source={{uri: enlistedData[2].image}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                    </TouchableWithoutFeedback>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[3].title, data: enlistedData[3]}) }}>
                    <Image source={{uri: enlistedData[3].image}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                    </TouchableWithoutFeedback>
                </Col> 
                <Col>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[4].title, data: enlistedData[4]}) }}>
                     <Image source={{uri: enlistedData[4].image}} resizeMode={"contain"}style={{height: 50, width: 50}}></Image>
                    </TouchableWithoutFeedback>
                </Col>
                <Col>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[5].title, data: enlistedData[5]}) }}>
                     <Image source={{uri: enlistedData[5].image}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                    </TouchableWithoutFeedback>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[6].title, data: enlistedData[6]}) }}>
                    <Image source={{uri: enlistedData[6].image}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                    </TouchableWithoutFeedback>
                </Col> 
                <Col>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[7].title, data: enlistedData[7]}) }}>
                     <Image source={{uri: enlistedData[7].image}} resizeMode={"contain"}style={{height: 50, width: 50}}></Image>
                    </TouchableWithoutFeedback>
                </Col>
                <Col>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[8].title, data: enlistedData[8]}) }}>
                     <Image source={{uri: enlistedData[8].image}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                    </TouchableWithoutFeedback>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[9].title, data: enlistedData[9]}) }}>
                    <Image source={{uri: enlistedData[9].image}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                    </TouchableWithoutFeedback>
                </Col> 
                <Col>
                     <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[10].title, data: enlistedData[10]}) }}>
                     <Image source={{uri: enlistedData[10].image}} resizeMode={"contain"}style={{height: 50, width: 50}}></Image>
                    </TouchableWithoutFeedback>
                </Col>
                <Col>
                     <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[11].title, data: enlistedData[11]}) }}>
                     <Image source={{uri: enlistedData[11].image}} resizeMode={"contain"} style={{height: 50, width: 50}}></Image>
                    </TouchableWithoutFeedback>
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
