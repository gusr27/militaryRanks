import React , {Component} from 'react'
import {Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon, Text, Segment} from 'native-base'
import { Router, Scene, Stack,Actions } from 'react-native-router-flux'
import {Easing, View, Button} from 'react-native'
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
import {AdMobBanner, AdMobInterstitial} from 'expo'



const INTERSTITIAL_ID = `ca-app-pub-8401428706591374/5747453224`;
const BANNER_ID = 'ca-app-pub-1425926517331745/4139536433'


class App extends Component {
    
    state = {
        open: false
    }
     closeDrawer = () => {
      this.drawer.close()
    };
    openDrawer = () => {
      this.drawer.open()
    };
    
    drawerLogic= ()=>{
        if(this.state.open){
            this.setState={
                open: false
            }
            this.closeDrawer()
        }else{
            this.setState={
                open: true
            }
            this.openDrawer()
        }
    }
    
    _openInterstitial = async () => {
    await AdMobInterstitial.requestAdAsync()
    await AdMobInterstitial.showAdAsync()
  };
    componentDidMount(){
        
    }
  render(){
      
    
    return(
     <Drawer
         styles={customStyles.drawer}
         ref={(ref) => { this.drawer = ref; }}
          content={<DrawerMenu />}
         //onClose={() => this.closeDrawer()} 
          tapToClose={true}
         openDrawerOffset={0.2}
         panCloseMask={0.2}
         closedDrawerOffset={-3}
         tweenHandler={(ratio)=>({main:{opacity:(2-ratio)/2}})}
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
         <Footer >
             
                <FooterTab>
                     <AdMobBanner
            bannerSize="smartBannerPortrait"
            adUnitID={BANNER_ID}
            testDevices="EMULATOR"
          />
                       
                   
                </FooterTab>
            </Footer>
           
      </Container>
        </Drawer>
    )
  }
}
const customStyles = {
    drawer: {
      shadowColor: '#000',
      shadowOpacity: 0.4,
      shadowRadius: 10,
      backgroundColor: 'white'
    },
    mask: {}, // style of mask if it is enabled
    main: {} // style of main board
  };

export default App