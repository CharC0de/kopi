import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const StartScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Main")
        }, 3000);
    })
  return (
    <ImageBackground style={styles.container} source={require('../../assets/wallpaper.jpg')}>
        <View style={styles.nameDiv}>
        <Text style={styles.nameStyle}>FUKURO</Text>
        <Text style={styles.nameDes}>Coffee and Tart</Text>
        </View>
    </ImageBackground>
  )
}

export default StartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical:30,
        paddingHorizontal: 30,
    },
    nameDiv: {
        marginTop: 120,
    },
    nameStyle : {
        fontWeight: 'bold',
        color: '#f5f5f7',
        fontSize: 50,
        fontFamily: 'serif',
        letterSpacing: 3
    },
    nameDes: {
        color: '#f5f5f7',
        fontSize: 15,
        letterSpacing: 3,
        fontFamily: 'monospace'
    }
})