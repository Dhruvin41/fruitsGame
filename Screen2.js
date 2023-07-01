import React from "react";
import { Pressable, ScrollView, View, Text, ImageBackground } from "react-native";
function Screen2({navigation}) {

    const totalLevel = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, '', ]

   




    const btnClick = {
        borderWidth: 2,
        justifyContent: 'center',
        borderRadius: 10,
        width: 80,
        marginBottom: 10,
        borderColor:'green'
    }

    const btnText = {
        fontSize: 30,
        borderColor: 'black',
        textAlign: 'center',
        alignSelf: 'center',
        paddingStart: 20,
        paddingEnd: 20,
        paddingTop: 15,
        paddingBottom: 15,
        color:'black',

    }

    const btnLevelClick = (no) => {
        console.log(no)
        navigation.navigate('Game' , {levelNo : no})
    }

    return (
        <>
            <ImageBackground resizeMode="stretch" source={require('./image/green.jpg')} style={{ height: '100%' }}>

                <ScrollView>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: 50, marginTop: 50 ,
                      }}>

                        {
                            totalLevel.map((item) => {
                                return (
                                    <Pressable style={btnClick} onPress={() => { btnLevelClick(item) }}>
                                        <Text style={btnText}>{item}</Text>
                                    </Pressable>
                                )
                            })
                        }
                    </View>


                </ScrollView>
            </ImageBackground>

        </>
    )
}
export default Screen2;