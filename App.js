import React , {Component} from 'react'
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Segment, Drawer} from 'native-base'
import { Router, Scene, Stack,Actions } from 'react-native-router-flux'
import {Easing} from 'react-native'

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
import {AdMobBanner, AdMobInterstitial} from 'react-native-admob'

class App extends Component {
    
    state = {
        open: false
    }
     closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
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
    
 
    componentDidMount(){
        {/*AdMobInterstitial.setAdUnitID('ca-app-pub-8401428706591374~4682652132')
                    AdMobInterstitial.setTestDeviceID(['ca-app-pub-8401428706591374/5747453224']);
                    AdMobInterstitial.requestAd(AdMobInterstitial.showAd());*/}
    }
  render(){
      
    
    return(
     <Drawer
        // style={customStyles.drawer}
         ref={(ref) => { this.drawer = ref; }}
          content={<DrawerMenu />}
         onClose={() => this.closeDrawer()} 
        
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
                        <AdMobBanner
  adSize="fullBanner"
  adUnitID='ca-app-pub-8401428706591374~4682652132'
  testDevices={['ca-app-pub-8401428706591374/5747453224']}
  onAdFailedToLoad={error => console.error(error)}
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
      shadowRadius: 10
    },
    mask: {}, // style of mask if it is enabled
    main: {} // style of main board
  };

export default App