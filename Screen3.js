import React, { useEffect, useState } from "react";
import { Alert, Image, ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


function Screen3({ route, navigation }) {

    const { levelNo } = route.params;
    // box leva mate
    const [curAns, setCurAns] = useState('')

    const [getans, setAns] = useState([])

    const [des, setdes] = useState([])

    const [res, setres] = useState([])

    const [score, setscore] = useState(0)


    // const des = []

    var ans = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    const [mixAns, setMixAns] = useState([])


    const gameImages = [
        require('./image/banana.png'),

        require('./image/black-cherry.png'),
        require('./image/coconut.png'),
        require('./image/green-apple.png'),
        require('./image/green-grape.png'),
        require('./image/lemon.png'),
        require('./image/lime.png'),
        require('./image/orange.png'),
        require('./image/peach.png'),
        require('./image/pear.png'),
        require('./image/plum.png'),



    ]
    const AnsGame = ['banana', 'cherry', 'coconut', 'apple'
        , 'grape', 'lemon', 'lime', 'orange', 'peach', 'pear', 'plum',]


    // AnsGame store in usestate
    useEffect(() => {
        // store in setCurAns
        setCurAns(AnsGame[levelNo - 1])
        var temp = 16 - AnsGame[levelNo - 1].length
        console.log("temp", temp)

        var str = "";

        for (var i = 0; i < temp; i++) {
            var randomCh = Math.floor(Math.random() * ans.length)
            str += ans[randomCh]
        }
        str = AnsGame[levelNo - 1] + str
        // return function
        shufflestring(str);



        // blank  arry push
        var arr = []
        for (var x = 0; x < AnsGame[levelNo - 1].length; x++) {
            arr.push("")
        }
        setAns(arr)

        // disabled arry
        var temp1 = []
        for (var j = 0; j < 16; j++) {
            temp1.push(false)
        }

        var temp2 = []
        for (var d = 0; d < AnsGame[levelNo - 1].length; d++) {
            temp2.push("")
        }
        setres(temp2)
    }, [])



    function shufflestring(s) {
        var charArr = s.split('')
        console.log(charArr)

        for (var x = 0; x < charArr.length; x++) {
            var r = Math.floor(Math.random() * charArr.length)

            var temp = charArr[x]
            charArr[x] = charArr[r]
            charArr[r] = temp

        }
        setMixAns(charArr)
        console.log(charArr)
    }




    useEffect(() => {

        console.log("hiiii", getans)

        console.log("reseUffect", res)

        console.log("hiiiii", AnsGame[levelNo - 1])

        var strGetans = getans.join('')
        console.log("strGetans", strGetans)

       


        if (strGetans == AnsGame[levelNo - 1]) {
            console.log('WIN')
            // navigation.navigate('Win')



            navigation.navigate('Win', { winLevel: strGetans })



            storeData(levelNo);


            // console.log("winnnnnnn" , score)
            // navigation.navigate('Win' , {scorePass : score})


        }
        // navigation.navigate('Win', { win : AnsGame[levelNo - 1] })


    }, [getans][res])





    // bottom btn
    const btnClick = ((value, k) => {
        console.log("hiiiiiiiiiiiiiiiiiiiiiiiii", k)

        if (getans.length <= curAns.length) {
            var temp = [...getans]
            var bing = [...res]
            for (var i = 0; i < temp.length; i++) {
                if (temp[i] == "") {
                    temp[i] = value
                    bing[i] = k
                    var z = [...des]
                    z[k] = true
                    setdes(z)
                    break;
                }
            }
            console.log("hello= " + bing)
            setres(bing)
            setAns(temp)
        }
        else {
            return false;
        }
        console.log("value", value)


        // var temp = [...res]
        // for (var k = 0; k < temp.length; i++) {
        //     if (temp[k] == "") {
        //         temp[k] == k
        //         break;
        //     }
        //     setres(temp)
        // }
        // if (getans.length <= curAns.length) {
        //     var bing = [...res]
        //     for (var l = 0; l < bing.length; l++) {
        //         if (bing[l] == "") {
        //             bing[l] = k
        //             break;
        //         }
        //     }
        //     setres(bing)
        // }

        console.log("res", res)

        // console.log("temp", bing)
        // console.log("setres" , setres)


    })


    // onpress to cheange
    const ansChange = ((ind) => { // pass the value 
        console.log("upper index = ", ind)
        console.log("down index=", res[ind])
        var downIndex = res[ind]
        var temp = [...getans]
        temp[ind] = ""
        // console.log("getans dsd", getans[res])

        setAns(temp)
        var revert = [...des]
        revert[downIndex] = false
        setdes(revert)

    })




    // level store 
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@levelNo', value.toString())
            console.log(levelNo)
        } catch (e) {
            // saving error
        }

    }


    return (
        <>
            <View  >
                <ImageBackground source={require('./image/blue_BG.jpg')} style={{ height: '100%' }}>
                    <View style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
                        {/* image */}
                        <View style={{ marginTop: 100 }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Image resizeMode="stretch" source={gameImages[levelNo - 1]} style={{ height: 250, width: 250 }}></Image>
                            </View>
                        </View>


                        {/* answer  */}


                        <View style={{ marginTop: 30, flexDirection: 'row' }}>

                            {
                                // split and print 
                                curAns.split('').map((value, ind) => {
                                    return (

                                        <View style={{ alignItems: 'center', backgroundColor: '#18B4D6', height: 50, width: 50, justifyContent: 'center', borderRadius: 5, borderWidth: 2, marginHorizontal: 2 }}>
                                            <Pressable onPress={() => { ansChange(ind) }}>
                                                <Text style={{
                                                    textAlign: 'center', alignItems: 'center', textTransform: 'uppercase', color: '#ffffff',
                                                    fontSize: 30, fontWeight: '500',
                                                }}>{getans[ind]}</Text>
                                            </Pressable>
                                        </View>

                                    )
                                })
                            }
                        </View>



                    </View>

                    <View style={{ marginTop: 150, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

                        {
                            mixAns.map((value, ind) => {

                                return (
                                    <Pressable disabled={des[ind]} onPress={() => { btnClick(value, ind) }} >
                                        <View style={{
                                            alignItems: 'center', backgroundColor: '#18B4D6', height: 40, width: 40, justifyContent: 'center', borderRadius: 5, borderWidth: 2,
                                            marginHorizontal: 2, marginBottom: 10
                                        }}>
                                            <Text style={{ textAlign: 'center', alignItems: 'center', textTransform: 'uppercase', color: '#ffffff', fontSize: 25, fontWeight: '400', }}>{value}</Text>
                                        </View>
                                    </Pressable>
                                )
                            })
                        }
                    </View>
                </ImageBackground>
            </View>
        </>
    )
}
export default Screen3;