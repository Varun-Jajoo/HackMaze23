import React, { useEffect, useRef, useState } from "react";
import { Animated, View, StyleSheet, PanResponder, Text, TouchableOpacity, Image } from "react-native";
import Video1 from "../assets/memories/1.gif";
import Video2 from "../assets/memories/2.gif";
import Video3 from "../assets/memories/3.gif";
import Video4 from "../assets/memories/4.gif";
const LazyVideo = ({ sourceUri }) => {
    const [isVisible, setIsVisible] = useState(false);
    const videoRef = useRef(null);
    const randomVideoIndex = Math.floor(Math.random() * 4);

    return (
      <View style={{ marginBottom: 20 }}>
        <Image
          ref={videoRef}
          source={sourceUri}
          isMuted={true}
          shouldPlay={isVisible} // Auto-play when isVisible is true
          style={styles.video}
          
        />
        
      </View>
    );
  };
const VideoBox = (props) => {
    const videoRef = useRef(null);

  useEffect(() => {
    // Preload the video when the component mounts
    if (videoRef.current) {
      videoRef.current.loadAsync(Video1);
    }
  }, []);
  return (
    <View style={styles.box}>
        <LazyVideo sourceUri={props.video} key={props.key}/>
      {/* <Text style={styles.titleText}>{props.title}</Text> */}
    </View>
  );
};

const Memories = () => {
    const [videos, setVideos] = useState([]); // List of videos to render
    useEffect(() => {
        const dummyVideos = [Video1,Video2,Video3,Video4];
        for (let i = 0; i < 50; i++) {
            //pick random from 4 videos
            const randomVideoIndex = Math.floor(Math.random() * 4);
          setVideos((prev) => [...prev, dummyVideos[randomVideoIndex]]);
        }
        
      }, []);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.parent}>
          {videos.map((item, index) => {
            return <VideoBox title={`Video ${index}`} key={index} video={item}/>;
          })}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
    video:{
        width:260,
        height:460,
        alignItems:'center',
        justifyContent:'center',
       left:15,
       top:20,
       borderRadius: 20,

    },
    container: {
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    backgroundColor:'#ddd6fa',
    },
  parent: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap:18,
    width:  3200,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  box: {
    height: 500,
    width: 290,
    //backgroundColor: "#ffc0cb",
    //borderRadius: 20,
  },
});

export default Memories;
