import React from 'react'
import {Header, Body, Text, Content, Card, CardItem, Left, Right, Image, Thumbnail} from 'native-base'

const InfoPage = (props) => {
    
    const {rate, image, description, abv, nato, address} = props.data   
    
    return(
        <Content>
            
            <Card>
                 <CardItem>
                    <Left>
                        <Thumbnail source={{uri: image}} resizeMode={"contain"} square/> 
                        <Body>
                            <Text>{rate}</Text>
                            <Text note>Abbreviation: {abv}</Text>
                            <Text note>NATO Code: {nato}</Text>
                            <Text note>Addressed as: {address}</Text>
                        </Body>
                    </Left>
                    
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>{description}</Text>
                    </Body>
                </CardItem>
                <CardItem>
                
                </CardItem>
            </Card>
        </Content> 
    )
}

export default InfoPage