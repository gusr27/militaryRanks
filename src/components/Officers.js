import React, {Component} from 'react'
import { Container, Card,CardItem, Body, Content, Icon, Text,Thumbnail, Segment, List, ListItem, Button, Left, Right} from 'native-base'
import {Actions} from 'react-native-router-flux'
import {Image, FlatList, View, TouchableWithoutFeedback} from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import enlistedData from './AirForceList.json'
import Images from '@images/images'


class Officers extends Component{
    render(){
        return(
            <Content contentContainerStyle={{ flex: 1}}>
    
        
      <Grid >
             
            <Row style={{paddingTop:10}}>
                
                <Col>
                    <View style={{alignItems:"center"}}>
                    <TouchableWithoutFeedback>
                         <Image source={Images.AF[1].ranks[0]} resizeMode={"contain"} style={{height: 100, width: 100}}
                    
                    >
                    </Image>
                    </TouchableWithoutFeedback>
                    </View>
                </Col> 
                <Col>
                    <View style={{alignItems:"center"}}>
                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: enlistedData[1].title, data: enlistedData[1]}) }}>
                     <Image source={Images.AF[1].ranks[1]} resizeMode={"contain"}style={{height: 100, width: 100}}
                         
                         ></Image>
                    </TouchableWithoutFeedback>
                    </View>
                </Col>
                
            </Row>
           
           
            <Row>
                
                <Col>
                    <View style={{alignItems:"center"}}>
                    <TouchableWithoutFeedback>
                    <Image source={Images.AF[1].ranks[2]} resizeMode={"contain"} style={{height: 100, width: 100}}></Image>
                    </TouchableWithoutFeedback>
                    </View>
                </Col> 
                <Col>
                    <View style={{alignItems:"center"}}>
                    <TouchableWithoutFeedback >
                     <Image source={Images.AF[1].ranks[3]} resizeMode={"contain"}style={{height: 100, width: 100}}></Image>
                    </TouchableWithoutFeedback>
                    </View>
                </Col>
              
            </Row>
           
           
            <Row>
                
                <Col>
                    <View style={{alignItems:"center"}}>
                     <TouchableWithoutFeedback>
                    <Image source={Images.AF[1].ranks[4]} resizeMode={"contain"} style={{height: 100, width: 100}}></Image>
                    </TouchableWithoutFeedback>
                    </View>
                </Col> 
                
            </Row>
           
           
          
    </Grid>
    </Content>
        
        )
    }
}

export default Officers