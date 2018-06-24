import React from 'react'
import {Header, Body, Text, Content} from 'native-base'
const InfoPage = (props) => {
    
    
    
    return(
        <Content>
            <Text>{props.rate}</Text>
            <Text>{props.description}</Text>
    
        </Content>
        
        
        
    )
}

export default InfoPage