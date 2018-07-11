import React , {Component} from 'react'
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Segment} from 'native-base'
import { Router, Scene, Stack,Actions } from 'react-native-router-flux'
import AirForce from './src/components/AirForce'
import Marines from './src/components/Marines'
import Navy from './src/components/Navy'
import Army from './src/components/Army'
import HomePage from './src/components/HomePage'
import InfoPage from './src/components/InfoPage'
import MenuPage from './src/components/MenuPage'
import Officers from './src/components/Officers'
import {FooterNav} from './src/components/FooterNav'
import {AdMobBanner} from 'react-native-admob'

class App extends Component {
  render(){
    return(
      <Container>
       
        <Router>
            <Stack key="root">
                <Scene key="home" component={HomePage} initial="true" title="Home"/>
                <Scene key="airforce" component={AirForce} title="Air Force"
                     onRight={() => Actions.popTo("home")}
                rightTitle = {<Icon type="FontAwesome" name="home"/>}
                    />
                <Scene key="army" component={Army} title="Army"
                     onRight={() => Actions.popTo("home")}
                rightTitle = {<Icon type="FontAwesome" name="home"/>}
                    />
                <Scene key="marines" component={Marines} title="Marine Corps"
                     onRight={() => Actions.popTo("home")}
                rightTitle = {<Icon type="FontAwesome" name="home"/>}
                    />
                <Scene key="navy" component={Navy} title="Navy"
                     onRight={() => Actions.popTo("home")}
                rightTitle = {<Icon type="FontAwesome" name="home"/>}
                    />
                <Scene key="info" component={InfoPage} title="info"
                     onRight={() => Actions.popTo("home")}
                rightTitle = {<Icon type="FontAwesome" name="home"/>}
                    />
                <Scene key="menu" component={MenuPage} title="info"
                     onRight={() => Actions.popTo("home")}
                rightTitle = {<Icon type="FontAwesome" name="home"/>}
                    />
                <Scene key="officer" component={Officers} title="Officers"
                    onRight={() => Actions.popTo("home")}
                    rightTitle = {<Icon type="FontAwesome" name="home"/>}
                    />
                 
            </Stack>
           
            
            
        </Router>
         <Footer>
                <FooterTab>
                    <Button>
                        <AdMobBanner
                            adSize="fullBanner"
                            adUnitID="
       ca-app-pub-8401428706591374~4682652132"
                            testDevices="ca-app-pub-8401428706591374/1481773722"
                            onAdFailedToLoad={error => console.error(error)}
                        />
                    </Button>
                </FooterTab>
            </Footer>
      </Container>
    )
  }
}
export default App