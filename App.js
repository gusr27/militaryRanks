import React , {Component} from 'react'
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Segment} from 'native-base'
import { Router, Scene, Stack,Actions } from 'react-native-router-flux'
import Drawer from 'react-native-drawer'
import AirForce from './src/components/AirForce'
import Marines from './src/components/Marines'
import Navy from './src/components/Navy'
import Army from './src/components/Army'
import HomePage from './src/components/HomePage'
import InfoPage from './src/components/InfoPage'
import MenuPage from './src/components/MenuPage'
import Officers from './src/components/Officers'
import DrawerMenu from './src/components/DrawerMenu'
import {FooterNav} from './src/components/FooterNav'

class App extends Component {
    
    state = {
        open: false
    }
    
    closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
    drawerLogic= ()=>{
        if(this.state.open){
            this.setState={
                open: false
            }
            this.closeControlPanel()
        }else{
            this.setState={
                open: true
            }
            this.openControlPanel()
        }
    }
    
  render(){
    return(
      <Drawer
        ref={(ref) => this._drawer = ref}
                content={<DrawerMenu/>}
                  type="static"
                  tweenHandler={Drawer.tweenPresets.parallax}
                  openDrawerOffset={0.2}
        >
      <Container>
       
        <Router>
            <Stack key="root">
                <Scene key="home" component={HomePage} initial="true" title="Home"
                    onLeft={() => this.drawerLogic()}
                    leftTitle={<Icon ios='ios-menu' android="md-menu" style={{fontSize: 20}}/>}
                    />
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
                    
                        <Text>Footerbar</Text>
                   
                </FooterTab>
            </Footer>
      </Container>
        </Drawer>
    )
  }
}
export default App