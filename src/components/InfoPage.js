import React,{Component} from 'react'
import {Header, Button, Body, Text, Content, Card, CardItem, Left, Right, Thumbnail, Container} from 'native-base'
import {Image, TouchableWithoutFeedback } from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Col, Row, Grid } from 'react-native-easy-grid'
import marineData from './MarineList.json'
import airforceData from './AirForceList.json'
import navyData from './NavyList.json'
import armyData from './ArmyList.json'
import Images from '@images/images'




class InfoPage extends Component {
    
    super(props){
     
        this.state= {
            error:""
        }
    }
    
    
    renderPics(branch,id,rel){
        if (branch === "AF"){
            return (<Thumbnail source={Images.AF[0].ranks[id]}  resizeMode={"contain"} square/> )
        }
        else if (branch === "Army"){
            return (<Thumbnail source={Images.Army[0].ranks[id]}  resizeMode={"contain"} square/> )
        }
        else if (branch === "Marines"){
            return (<Thumbnail source={Images.Marines[0].ranks[id]}  resizeMode={"contain"} square/> )
        }
        else if (branch==="Navy"){
            return (<Thumbnail source={Images.Navy[0].ranks[id]}  resizeMode={"contain"} square/> )
        }
        else{
            return (<Thumbnail source={{uri:""}}  resizeMode={"contain"} square/> )   
        }
    }
    
    renderRelatedRanks(branch, id, rel){
        switch(branch){
                case 'Navy':
                    return (
                        <Grid style={{flex:1}}>
                        <TouchableWithoutFeedback onPress= {() => {Actions.info({title: armyData[id].title, data: armyData[id]}) }}>
                                    
                                    <Col>
                                            <Text>Air Force</Text>
                                            <Thumbnail square resizeMode={"contain"} source={Images.AF[0].ranks[id]} />
                                            <Text note>{airforceData[id].title}</Text>
                                    </Col>
                                        </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: armyData[rel.Army].title, data: armyData[rel.Army]}) }}>
                                    
                                <Col>


                                            <Text>Army</Text>
                                            <Thumbnail square resizeMode={"contain"} source={Images.Army[0].ranks[rel.Army]} />
                                            <Text note>{armyData[rel.Army].title}</Text>

                                    </Col>
                        </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: marineData[rel.Marines].title, data: marineData[rel.Marines]}) }}>   
                                    <Col>
                                        
                                        <Text>Marines</Text>
                                       
                                        <Thumbnail square resizeMode={"contain"} source={Images.Marines[0].ranks[rel.Marines]} />
                                        <Text note>{marineData[rel.Marines].title}</Text>
                                    </Col>
                            </TouchableWithoutFeedback>
                        </Grid>
                )
                case 'Army':
                    return(<Grid style={{flex:1}}>
                        <TouchableWithoutFeedback onPress= {() => {Actions.info({title: armyData[id].title, data: armyData[id]}) }}>
                                    
                                <Col>


                                            <Text>Air Force</Text>
                                            <Thumbnail square resizeMode={"contain"} source={Images.AF[0].ranks[id]} />
                                            <Text note>{airforceData[id].title}</Text>

                                    </Col>
                                        </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: marineData[rel.Marines].title, data: marineData[rel.Marines]}) }}>   
                                    <Col>
                                        
                                        <Text>Marines</Text>
                                       
                                        <Thumbnail square resizeMode={"contain"} source={Images.Marines[0].ranks[rel.Marines]} />
                                        <Text note>{marineData[rel.Marines].title}</Text>
                                    </Col>
                            </TouchableWithoutFeedback>
                                   <TouchableWithoutFeedback onPress= {() => {Actions.info({title: navyData[rel.Navy].title, data: navyData[rel.Navy]}) }}>
                                    <Col>
                                        <Text>Navy</Text>
                                       
                                        <Thumbnail square resizeMode={"contain"} source={Images.Navy[0].ranks[rel.Navy]} />
                                        <Text note>{navyData[rel.Navy].title}</Text>
                                    </Col>
                            </TouchableWithoutFeedback>
                        </Grid>)
                case 'Marines':
                    return(<Grid style={{flex:1}}>
                        <TouchableWithoutFeedback onPress= {() => {Actions.info({title: armyData[id].title, data: armyData[id]}) }}>
                                    
                                <Col>


                                            <Text>Air Force</Text>
                                            <Thumbnail square resizeMode={"contain"} source={Images.AF[0].ranks[id]} />
                                            <Text note>{airforceData[id].title}</Text>

                                    </Col>
                                        </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: armyData[rel.Army].title, data: armyData[rel.Army]}) }}>
                                    
                                <Col>


                                            <Text>Army</Text>
                                            <Thumbnail square resizeMode={"contain"} source={Images.Army[0].ranks[rel.Army]} />
                                            <Text note>{armyData[rel.Army].title}</Text>

                                    </Col>
                        </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress= {() => {Actions.info({title: navyData[rel.Navy].title, data: navyData[rel.Navy]}) }}>
                                    <Col>
                                        <Text>Navy</Text>
                                       
                                        <Thumbnail square resizeMode={"contain"} source={Images.Navy[0].ranks[rel.Navy]} />
                                        <Text note>{navyData[rel.Navy].title}</Text>
                                    </Col>
                            </TouchableWithoutFeedback>
                        </Grid>)
                case 'AF':
                    return(<Grid style={{flex:1}}>
                        <TouchableWithoutFeedback onPress= {() => {Actions.info({title: armyData[rel.Army].title, data: armyData[rel.Army]}) }}>
                                    
                                <Col>


                                            <Text>Army</Text>
                                            <Thumbnail square resizeMode={"contain"} source={Images.Army[0].ranks[rel.Army]} />
                                            <Text note>{armyData[rel.Army].title}</Text>

                                    </Col>
                        </TouchableWithoutFeedback>
                         <TouchableWithoutFeedback onPress= {() => {Actions.info({title: marineData[rel.Marines].title, data: marineData[rel.Marines]}) }}>   
                                    <Col>
                                        
                                        <Text>Marines</Text>
                                       
                                        <Thumbnail square resizeMode={"contain"} source={Images.Marines[0].ranks[rel.Marines]} />
                                        <Text note>{marineData[rel.Marines].title}</Text>
                                    </Col>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress= {() => {Actions.info({title: navyData[rel.Navy].title, data: navyData[rel.Navy]}) }}>
                                    <Col>
                                        <Text>Navy</Text>
                                       
                                        <Thumbnail square resizeMode={"contain"} source={Images.Navy[0].ranks[rel.Navy]} />
                                        <Text note>{navyData[rel.Navy].title}</Text>
                                    </Col>
                            </TouchableWithoutFeedback>
                        </Grid>)
                default:
                return(<Text>Error</Text>)
        }
    }

    render(){
        const {rate, image, description, abv, nato, address,branch, pay, id,rel, grade} = this.props.data   
            return(


                <Content>


                    <Card>

                         <CardItem bordered header>
                            <Left>
                                {this.renderPics(branch,id,rel)}
                                <Body>
                                    <Text>{grade}</Text>
                                    <Text note>Abbreviation: {abv}</Text>
                                    <Text note>NATO Code: {nato}</Text>
                                    <Text note>Addressed as: {address}</Text>
                                    <Text style={{color: "green"}} note>Basic Pay: {pay}</Text>
                                </Body>
                            </Left>

                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>{description}</Text>
                            </Body>
                        </CardItem>


                        <CardItem bordered>

                            
                            
                                {this.renderRelatedRanks(branch, id, rel)}
                           
                        </CardItem>
                    </Card>
                </Content> 
            )
    }
    
}

export default InfoPage