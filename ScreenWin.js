import React, { useEffect, useState } from "react";
import { Image, Text, View, ImageBackground } from "react-native";

function ScreenWin({ route, navigation }) {
    const { winLevel } = route.params;

    // const { win } = route.params;

    // const { scorePass } = route.params;

    const [result, setResult] = useState("")
    const winText = ['GOOD', 'VERY GOOD', 'EXCELLENT']

    useEffect(() => {
        setResult(winText[(Math.floor(Math.random() * winText.length))]);
        console.log(result)
    }, [])



    

    // var d = winLevel.split('')
    // console.log(d)

   

    return (
        <>
            <View style={{ justifyContent: 'center' }}>
                <ImageBackground resizeMode="stretch" source={require('./image/win2.jpg')} style={{ height: '100%' }}>

                    <View>
                        <Text style={{ fontSize: 40, textAlign: 'center', marginTop: 20 }}>{result}</Text>
                    </View>

                    <View style={{ marginTop: 50, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {
                            winLevel.split('').map((item) => {
                                return (
                                    <View style={{
                                        alignItems: 'center', backgroundColor: '#18B4D6', height: 40, width: 40, justifyContent: 'center', borderRadius: 5, borderWidth: 2,
                                        marginHorizontal: 2, marginBottom: 10
                                    }}>
                                        <Text style={{ textAlign: 'center', alignItems: 'center', textTransform: 'uppercase', color: '#ffffff', fontSize: 25, fontWeight: '400', }}>{item}</Text>
                                    </View>
                                )
                            })
                        }

                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100, flexDirection: 'row' }}>
                        <View>
                            <Image resizeMode="stretch" source={require('./image/dollar.png')} style={{ height: 100, width: 100 }}></Image>
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 40, color: '#000000' }}>{winLevel}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </>
    )
}

export default ScreenWin;