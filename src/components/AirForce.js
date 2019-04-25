import React, {Component} from 'react'
import { Container, Card,CardItem, Body, Content, Text,Thumbnail, Segment, List, ListItem, Button, Left, Right} from 'native-base'
import {Actions} from 'react-native-router-flux'
import {Image, FlatList, View, TouchableWithoutFeedback} from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import enlistedData from './AirForceList.json'
import Images from '@images/images'
class AirForce extends Component {

  loadChanges(){
      
  }

  
    
  render(){
      
    return(

    
        
     <Content contentContainerStyle={{ flex: 1}}>
    
        
      <Grid >
            
            <Row>
                <Col><View style={{alignItems:"center"}}>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[0].title, data: enlistedData[0]}) }}>
                         <Image source={Images.AF[0].ranks[0]} resizeMode={"contain"} style={{height: 100, width: 100}}
                    
                    >
                    </Image>
                    </TouchableWithoutFeedback>
                    </View>
                </Col> 
                <Col><View style={{alignItems:"center"}}>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[1].title, data: enlistedData[1]}) }}>
                     <Image source={Images.AF[0].ranks[1]} resizeMode={"contain"}style={{height: 100, width: 100}}
                         
                         ></Image>
                    </TouchableWithoutFeedback>
                    </View>
                </Col>
                <Col><View style={{alignItems:"center"}}>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[2].title, data: enlistedData[2]}) }}>
                     <Image source={Images.AF[0].ranks[2]} resizeMode={"contain"} style={{height: 100, width: 100}}></Image>
                    </TouchableWithoutFeedback>
                    </View>
                </Col>
            </Row>
            <Row>
                <Col><View style={{alignItems:"center"}}>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[3].title, data: enlistedData[3]}) }}>
                    <Image source={Images.AF[0].ranks[3]} resizeMode={"contain"} style={{height: 100, width: 100}}></Image>
                    </TouchableWithoutFeedback>
                    </View>
                </Col> 
                <Col><View style={{alignItems:"center"}}>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[4].title, data: enlistedData[4]}) }}>
                     <Image source={Images.AF[0].ranks[4]} resizeMode={"contain"}style={{height: 100, width: 100}}></Image>
                    </TouchableWithoutFeedback>
                    </View>
                </Col>
                <Col><View style={{alignItems:"center"}}>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[5].title, data: enlistedData[5]}) }}>
                     <Image source={Images.AF[0].ranks[5]} resizeMode={"contain"} style={{height: 100, width: 100}}></Image>
                    </TouchableWithoutFeedback>
                    </View>
                </Col>
            </Row>
            <Row>
                <Col><View style={{alignItems:"center"}}>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[6].title, data: enlistedData[6]}) }}>
                    <Image source={Images.AF[0].ranks[6]} resizeMode={"contain"} style={{height: 100, width: 100}}></Image>
                    </TouchableWithoutFeedback>
                    </View>
                </Col> 
                <Col><View style={{alignItems:"center"}}>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[7].title, data: enlistedData[7]}) }}>
                     <Image source={Images.AF[0].ranks[7]} resizeMode={"contain"}style={{height: 100, width: 100}}></Image>
                    </TouchableWithoutFeedback>
                    </View>
                </Col>
                <Col><View style={{alignItems:"center"}}>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[8].title, data: enlistedData[8]}) }}>
                     <Image source={Images.AF[0].ranks[8]} resizeMode={"contain"} style={{height: 100, width: 100}}></Image>
                    </TouchableWithoutFeedback>
                    </View>
                </Col>
            </Row>
            <Row>
                <Col><View style={{alignItems:"center"}}>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[9].title, data: enlistedData[9]}) }}>
                    <Image source={Images.AF[0].ranks[9]} resizeMode={"contain"} style={{height: 100, width: 100}}></Image>
                    </TouchableWithoutFeedback>
                    </View>
                </Col> 
                <Col><View style={{alignItems:"center"}}>
                     <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[10].title, data: enlistedData[10]}) }}>
                     <Image source={Images.AF[0].ranks[10]} resizeMode={"contain"}style={{height: 100, width: 100}}></Image>
                    </TouchableWithoutFeedback>
                    </View>
                </Col>
                <Col><View style={{alignItems:"center"}}>
                     <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[11].title, data: enlistedData[11]}) }}>
                     <Image source={Images.AF[0].ranks[11]} resizeMode={"contain"} style={{height: 100, width: 100}}></Image>
                    </TouchableWithoutFeedback>
                    </View>
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
