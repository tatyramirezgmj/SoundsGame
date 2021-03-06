import React, {Component} from 'react';
import {Sound, VrButton, Animated, View} from 'react-vr';


export default class SoundInstrument extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     bounceValue: new Animated.Value(0),
  //   };
  // }
  //
  // animateOnEnter(){
  //   Animated.spring(
  //     this.state.bounceValue,
  //     {
  //       toValue: 2 ,
  //       friction: 4,
  //     }
  //   ).start();
  // }
  //
  // animateOnExit(){
  //   Animated.timing(
  //     this.state.bounceValue,
  //     {
  //       toValue:0,
  //       duration:500,
  //     }
  //   ).start();
  // }

  render(){
    return(
      <View

        >
        <VrButton
          onClick={()=> this.props.onClick()}
          // onEnter={() => this.animateOnEnter()}
          // onExit={()=> this.animateOnExit()}
          >
            {this.props.children}
        </VrButton>
        <Sound playerState={this.props.playerState} source={this.props.sound}/>
      </View>
    );
  }
};
