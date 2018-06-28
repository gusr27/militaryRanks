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
    
    
    renderPics(branch,id){
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
    
    renderRelatedRanks(branch, id){
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
                                    <Col>
                                        <Text>Army</Text>
                                        
                                        <Thumbnail square resizeMode={"contain"} source={Images.Army[0].ranks[id]} />
                                            <Text note>{armyData[id].title}</Text>
                                    </Col>
                                    <Col>
                                        <Text>Marines</Text>
                                       
                                        <Thumbnail square resizeMode={"contain"} source={Images.Marines[0].ranks[id]} />
                                        <Text note>{marineData[id].title}</Text>
                                    </Col>
                        </Grid>)
                case 'Army':
                    return(<Grid style={{flex:1}}>
                        <TouchableWithoutFeedback onPress= {() => {Actions.info({title: armyData[id].title, data: armyData[id]}) }}>
                                    
                                <Col>


                                            <Text>Air Force</Text>
                                            <Thumbnail square resizeMode={"contain"} source={Images.AF[0].ranks[id]} />
                                            <Text note>{airforceData[id].title}</Text>

                                    </Col>
                                        </TouchableWithoutFeedback>
                                    <Col>
                                        
                                        <Text>Marines</Text>
                                       
                                        <Thumbnail square resizeMode={"contain"} source={Images.Marines[0].ranks[id]} />
                                        <Text note>{marineData[id].title}</Text>
                                    </Col>
                                    <Col>
                                        <Text>Navy</Text>
                                       
                                        <Thumbnail square resizeMode={"contain"} source={Images.Navy[0].ranks[id]} />
                                        <Text note>{navyData[id].title}</Text>
                                    </Col>
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
                                    <Col>
                                        
                                        <Text>Army</Text>
                                       
                                        <Thumbnail square resizeMode={"contain"} source={Images.Army[0].ranks[id]} />
                                        <Text note>{armyData[id].title}</Text>
                                    </Col>
                                    <Col>
                                        <Text>Navy</Text>
                                       
                                        <Thumbnail square resizeMode={"contain"} source={Images.Navy[0].ranks[id]} />
                                        <Text note>{navyData[id].title}</Text>
                                    </Col>
                        </Grid>)
                case 'AF':
                    return(<Grid style={{flex:1}}>
                        <TouchableWithoutFeedback onPress= {() => {Actions.info({title: armyData[id].title, data: armyData[id]}) }}>
                                    
                                <Col>


                                            <Text>Army</Text>
                                            <Thumbnail square resizeMode={"contain"} source={Images.Army[0].ranks[id]} />
                                            <Text note>{armyData[id].title}</Text>

                                    </Col>
                                        </TouchableWithoutFeedback>
                                    <Col>
                                        
                                        <Text>Marines</Text>
                                       
                                        <Thumbnail square resizeMode={"contain"} source={Images.Marines[0].ranks[id]} />
                                        <Text note>{marineData[id].title}</Text>
                                    </Col>
                                    <Col>
                                        <Text>Navy</Text>
                                       
                                        <Thumbnail square resizeMode={"contain"} source={Images.Navy[0].ranks[id]} />
                                        <Text note>{navyData[id].title}</Text>
                                    </Col>
                        </Grid>)
                default:
                return(<Text>Error</Text>)
        }
    }

    render(){
        const {rate, image, description, abv, nato, address,branch, pay, id} = this.props.data   
            return(


                <Content>


                    <Card>

                         <CardItem bordered header>
                            <Left>
                                {this.renderPics(branch,id)}
                                <Body>
                                    <Text>{rate}</Text>
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

                            
                            
                                {this.renderRelatedRanks(branch, id)}
                           
                        </CardItem>
                    </Card>
                </Content> 
            )
    }
    
}

export default InfoPage