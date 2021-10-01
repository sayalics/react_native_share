/**
 * Sample React Native ShareComponent
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   ActivityIndicator,
   SafeAreaView,
   StatusBar,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
 } from 'react-native';
 import * as shareActionCreator from "./redux/actions/shareAction";
 import { connect } from "react-redux";
 import { bindActionCreators } from "redux"; 
 
 function ShareComponent(props) {
 
  function onShare(url, name) {
    console.log( url, name);
    //Api call
    props.shareActions.shareAction(url, name);
  }

  //some types of url
  const pdf = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  const pngImage = "https://p.kindpng.com/picc/s/348-3481509_thumb-image-try-me-free-sample-hd-png.png";
  const jpgImage = "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg";
  const mp3 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

   return (
     <SafeAreaView style={styles.Container}>
       <StatusBar barStyle={'dark-content'}  backgroundColor={"#ffffff"}/>
         <View >
         {props.shareIsLoading === true ?
            //Loader when share is in progress
            <ActivityIndicator style={styles.ContainerView} size={"small"} color={"#ffffff"} /> :
            //Button
            <TouchableOpacity
              style={styles.ContainerView}
              onPress={() => {
                //call function onShare and pass url and filename as params
                onShare(mp4, "File_Name");
              }}
            >
              <Text style={styles.ButtonText}>Share</Text>
            </TouchableOpacity>}
            
         </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   Container: {
     flex:1, 
     alignItems:'center', 
     justifyContent:'center',
    },
   ContainerView: {
     backgroundColor:"#797EF6", 
     borderRadius:10, 
     width:300, 
     height:70, 
     alignItems:'center', 
     justifyContent:'center',
    },
   ButtonText: {
     color:"#ffffff", 
     fontSize:24, 
     fontWeight:'bold',
    },
 });
 
 const mapStateToProps = (state) => ({
  shareIsLoading: state.shareReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  shareActions: bindActionCreators(
    shareActionCreator,
    dispatch
  ),
});

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(ShareComponent)
);
 