import React, { Component } from 'react';
import { Text, View, StyleSheet,Image ,ScrollView,TouchableOpacity} from 'react-native';
import { Constants } from 'expo';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-elements';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
<ScrollView>
     <TouchableOpacity
 style={{
   backgroundColor:'aqua',
width :450,
height : 100,
  alignItems: 'center',
    justifyContent: 'center',
 }}>
<Text
  style={{
 fontSize: 40,
    fontWeight: 'bold',
}}>
 WISHES
</Text>
</TouchableOpacity>
<View
style={{
      alignItems: 'center',
    justifyContent: 'center',
}}
>
<TouchableOpacity
 style={{
   backgroundColor:'#f5f5dc',
width :300,
height : 100,
    alignItems: 'center',
    justifyContent: 'center',
 }}>
<Text
  style={{
 fontSize: 30,
    fontWeight: 'bold',
     
}}>
 BIRTHDAY WISHES
</Text>
</TouchableOpacity>
</View><View
style={{
  flex:1,
      alignItems: 'center',
    justifyContent:'center',
}}
>

 <Image
          style={{
             flexGrow:1,
    height:100,
    width:100,
          }}
              source={{uri: 'http://wfarm2.dataknet.com/static/resources/icons/set28/4f02d8b8de88.png'}}  />
</View>
<View
styles={styles.container}
>
<TouchableOpacity
style = {{
 width: 300,
  height : 100,
  flex : 1,
    backgroundColor: 'pink',
   }}
><Text
style = {{fontSize :20,
    fontWeight: '100',
  marginTop: 10
}}
>May all your dreams and wishes come true. ... 
</Text>
</TouchableOpacity>
</View>
<View
style={{
  flex:1,
      alignItems: 'center',
    justifyContent:'center',
}}
>

 <Image
          style={{
              marginTop: 10,
             flexGrow:1,
    height:100,
    width:100,
          }}
              source={{uri: 'http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/birthday-cake.png'}}  />
</View>
<View
style=
{
  styles.container
}
>
<TouchableOpacity
style = {{
 width: 300,
  height : 100,
  flex : 1,
    backgroundColor: '#f0ffff',
   }}
><Text
style = {{fontSize :20,
    fontWeight: '100',
  marginTop: 10
}}
>Hope your special day, brings you all that your heart desires! ...
</Text>
</TouchableOpacity>
</View>

<View
style={{
      alignItems: 'center',
    justifyContent: 'center',
}}
>
<TouchableOpacity
 style={{
   marginTop:80,
   backgroundColor:'#f5f5dc',
width :300,
height : 100,
    alignItems: 'center',
    justifyContent: 'center',
 }}>
<Text
  style={{
 fontSize: 30,
    fontWeight: 'bold',
     
}}>
 NEW YEAR WISHES
</Text>
</TouchableOpacity>
</View>
<View
style={{
  flex:1,
      alignItems: 'center',
    justifyContent:'center',
}}
>

 <Image
          style={{
              marginTop: 10,
             flexGrow:1,
    height:100,
    width:100,
          }}
              source={{uri: 'https://www.shoppermb.com/assets/ny-bcd595eb35ff40ec5c24522839e6f357df46a0b2f321fb811ec60606e1eedfa0.png'}}  />
</View>
<View>
<TouchableOpacity
style = {{
 width: 300,
  height : 100,
  flex : 1,
    backgroundColor: '#ffe4c4',
   }}
><Text
style = {{fontSize :20,
    fontWeight: '100',
  marginTop: 10
}}
>Wishing you and yours a very blessed and happy new year
</Text>
</TouchableOpacity>
</View>
<View
style={{
  flex:1,
      alignItems: 'center',
    justifyContent:'center',
}}
>

 <Image
          style={{
              marginTop: 10,
             flexGrow:1,
    height:100,
    width:100,
          }}
              source={{uri: 'http://static1.squarespace.com/static/58ed35b359cc68f4b61a493c/5949d583bebafb954cbb8336/5a09f3e90d929719784e68d2/1510601960373/fireworks-transparent-new_year_firework_icon_T.png?format=1000w'}}  />
</View>
<View
style={
  styles.container
  
}
>
<TouchableOpacity
style = {{
 width: 300,
  height : 110,
  flex : 1,
    backgroundColor: '#fffff0',
   }}
><Text
style = {{fontSize :20,
    fontWeight: '100',
  marginTop: 10
}}
> Everything that is new brings hope. May your hope be renewed in the coming new year. Happy New Year!
</Text>
</TouchableOpacity>
</View>
     <TouchableOpacity
 style={{
   marginTop:20,
   backgroundColor:'#7fffd4',
width :450,
height : 100,
  alignItems: 'center',
    justifyContent: 'center',
 }}>
<Text
  style={{
 fontSize: 40,
    fontWeight: 'bold',
}}>

</Text>
</TouchableOpacity>



</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#7fffd4',
  },

});
