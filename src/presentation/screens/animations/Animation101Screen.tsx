/* eslint-disable react-native/no-inline-styles */
import { Animated, Easing, StyleSheet } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Button } from '../../components/ui/Button';

export const Animation101Screen = () => {
    const {fadeIn, FadeOut, animatedOpacity, animatedTop,startMovingTopPosition } = useAnimation();
    const {colors} = useContext(ThemeContext);

  return (
    <CustomView style={styles.container}>
        <Animated.View style={[
            styles.purpleBox,
            {
                backgroundColor: colors.primary,
            },
            {
                opacity:animatedOpacity,
                // top: animatedTop,
                transform :[{
                    translateY : animatedTop,
                }],
            },
        ]} />

        <Button
            text="FadeIn"
            onPress={() => {
            fadeIn({});
            startMovingTopPosition({
                initialPosition:-100,
                easing: Easing.elastic(2),
                duration:750,
            });
        }} styles={{ marginTop:10 }}/>

        <Button
            text="FadeOut"
            onPress={() => FadeOut({}) }
             styles={{ marginTop:10 }}/>
    </CustomView>
  );
};


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
        justifyContent:'center',
    },
    purpleBox : {
        width:150,
        height: 150,
    },
});
