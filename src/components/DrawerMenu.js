import React, {Component} from 'react'
import {Container, Header, List, ListItem,Body, Text, Button, View} from 'native-base'
import {TouchableOpacity, Platform, Alert} from 'react-native'
import {Actions} from 'react-native-router-flux'
import * as RNIap from 'react-native-iap'


const itemSkus = Platform.select({
  ios: [
    'com.example.coins100'
  ],
  android: [
    'com.example.coins100'
  ]
});


class DrawerMenu extends Component {
    
    state={
        products:[],
        purchased: false
    }
    
 makePurchase() {
    RNIap.buyProduct('com.example.coins100').then(purchase => {
    this.setState({
      receipt: purchase.transactionReceipt, // save the receipt if you need it, whether locally, or to your server.
      progressTitle: 'Purchase Successful!',
      purchased: true
    });
    Alert.alert("Purchase Successful!")
  }).catch(err => {
    // resetting UI
    Alert.alert("Purchase unsuccesful, try again"); // standardized err.code and err.message available
    this.setState({ purchased: false});
   
  })
}
 
    
async componentWillMount(){
     try {
    await RNIap.prepare();
    const products = await RNIap.getProducts(itemSkus);
    this.setState({ products });
  } catch(err) {
    console.warn(err); // standardized err.code and err.message available
  }
}
    render(){
    return(
        <Container style={{ paddingTop:"3%", backgroundColor:"white"}}>
           <Header >
            <Body>
                <Text>Extras</Text>
            </Body>
          </Header>
            <List>
                
                <View style={{paddingTop:"50%"}}>
                
                <ListItem>
                    
                        <Text>Study Materials</Text>
                   
                </ListItem>
                
                <ListItem>
                  
                        <Text>Extras</Text>
                   
                </ListItem>
                  
                
                <ListItem onPress={()=> Alert.alert(
  'Purchase No Ads?',
  'Purchase this to remove all ads from the app for life. ',
  [
    
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'Purchase', onPress: () => {this.makePurchase()}},
  ]
)}>
                   
                        <Text>Remove Ads</Text>
                   
                </ListItem>
                    
                </View>
            </List>
        
        </Container>
    )}
}

export default DrawerMenu