import React from 'react'
import {Actions} from 'react-native-router-flux'
import {Footer,FooterTab, Button, Text} from 'native-base'

const FooterNav = () =>{
    return(
        <Footer>
          <FooterTab>
            <Button active
            onPress= {() => {Actions.pageOne(); }}
            >
              <Text>Air Force</Text>
            </Button>
            <Button key={2}>
              <Text>Army</Text>
            </Button>
            <Button key={3}>
              <Text>Marines</Text>
            </Button>
            <Button key={4}>
              <Text>Navy</Text>
            </Button>
          </FooterTab>
        </Footer>
    )
}

export default FooterNav