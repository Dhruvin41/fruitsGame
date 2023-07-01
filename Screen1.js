import React ,{useState , useEffect} from "react";
import { Alert, ImageBackground, Pressable, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Screen1({route,  navigation }) {
    // const btnClick = () => {
    //     Alert.alert('')
    // }

    const [levelNo, setLevelNo] = useState(0)

    const btnClickNewGame = () => {
        navigation.navigate('Game'  , { levelNo: levelNo })
    }

    const btnClickLevel = () => {
        navigation.navigate('Level')
    }


    // getdata to screen3
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@levelNo')
            if (value !== null) {
                // console.log("Found = "+value)
                setLevelNo(parseInt(value) + 1)
            }
            else {
                setLevelNo(1)
                // console.log('value no exist')
            }
        } catch (e) {
            // error reading value
            // console.log('value no found')
        }
    }


    useEffect(() => {
        //storeData("1")
        getData()
    }, [])



    return (
        <>
            <View>

                <ImageBackground resizeMode="stretch" source={require('./image/yellow_BG.jpg')} style={{ height: '100%' }}>
                    <View style={{ height: '100%', justifyContent: 'center' }}>

                        <Pressable onPress={btnClickNewGame}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', margin: 20 }}>
                                <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: '800', backgroundColor: 'black', color: '#ffffff', 
                                padding: 25, borderRadius: 10 }}>START</Text>
                            </View>
                        </Pressable>

                        <Pressable onPress={btnClickLevel}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: '800', backgroundColor: 'black', color: '#ffffff', padding: 25, borderRadius: 10, }}>LEVEL</Text>
                            </View>
                        </Pressable>

                    </View>




                </ImageBackground>

            </View>
        </>
    )
}
export default Screen1;