import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView} from 'react-native';

export default class App extends Component {
  render(){
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/*search bar */}
          <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput placeholder="What do you want to eat?" style={{borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18}}/>
              <Image source={require('./icon/search.png')} style={{position: 'absolute', top: 5, left: 12}}/>
            </View>
            <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./icon/promo.png')}/>
            </View>
          </View>
          {/*gopay */}
          <View style={{marginHorizontal: 17, marginTop: 8}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14}}>
              <Image source={require('./icon/gopay.png')}/>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Rp 5.555.000</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2F65BD', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/pay.png')}/>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>Pay</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/nearby.png')}/>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>Nearby</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/topup.png')}/>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>Top Up</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/more.png')}/>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>More</Text>
              </View>
            </View>
          </View>
          {/*main features*/}
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./icon/go-ride.png')}/>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-MENU</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./icon/go-car.png')}/>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-CAR</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./icon/go-bluebird.png')}/>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-BLUEBIRD</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./icon/go-send.png')}/>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-SEND</Text>
              </View>
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./icon/go-deals.png')}/>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-DEALS</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./icon/go-pulsa.png')}/>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-PULSA</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./icon/go-food.png')}/>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-FOOD</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./icon/go-more.png')}/>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-MORE</Text>
              </View>
            </View>
          </View>
          {/*Garis abu-abu*/}
          <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}></View>
          {/*News Section*/}
          <View style={{paddingTop: 16, paddingHorizontal: 16}}>
            <View>
              <Image source={require('./dummy/sepak-bola.jpg')} style={{height: 170, width: '100%', borderRadius: 6}}/>
            </View>
            <View style={{paddingTop: 16, paddingBottom: 20}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
              <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A'}}>Dimas Drajet selamatkan penalti, Timnas U-23 kalahkan Brunei</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/home-active.png')}/>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4, color: '#43AB4A'}}>Home</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/order.png')}/>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Orders</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/help.png')}/>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Help</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/inbox.png')}/>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Inbox</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/account.png')}/>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Account</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});