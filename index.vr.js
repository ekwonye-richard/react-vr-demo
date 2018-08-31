import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image,
  Animated,
  Model
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0)
    };
  }
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <View style={{transform: [{translate: [0, -4, -9]}]}}>
          <Animated.Text
            style={{
              fontSize: 0.2,
              transform: [                        // `transform` is an ordered array
                {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
              ]
            }}
          >
            Hello
          </Animated.Text>
          <Model
            source={{
              obj: asset('pepsi/Pepsi_Can.obj'),
              mtl: asset('pepsi/Pepsi_Can.mtl')
            }}
            style={{ 
              transform: [
                {scale: 0.02},
                {rotateY: 15}
              ]
            }}
          />

        </View>
        <View style={{transform: [{translate: [8, -5, -7]}]}}>
          <Model
            source={{
              obj: asset('pepsi/Pepsi_Can.obj'),
              mtl: asset('pepsi/Pepsi_Can.mtl')
            }}
            style={{ 
              transform: [
                {scale: 0.02},
                {rotateY: 15}
              ]
            }}
          />
        </View>
      </View>
    );
  }
  componentDidMount() {
    this.state.bounceValue.setValue(1.5);     // Start large
    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 0.9,                         // Animate to smaller size
        friction: 1,                          // Bouncier spring
      }
    ).start();                                // Start the animation
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
