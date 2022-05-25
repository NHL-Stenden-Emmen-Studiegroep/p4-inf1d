import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Pressable, Settings, StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/Colors";

type DropDownProps =  {
    name: string,
    value: number,
    extra?: string
}

type ItemProps = {
    value: number,
    settingsValue: number,
    extra?: string
}

const DATA = {
    min: [
        { value: 5 },
        { value: 10 },
        {  value: 15 },
        {  value: 20 },
        {  value: 25 },
        {  value: 30 },
        {  value: 35 },
        {  value: 40 },
        {  value: 45 },
        {  value: 50 },
        {  value: 55 },
        { value: 60 }
    ],
    other: [
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4},
        {value: 5},
        {value: 6},
        {value: 7},
        {value: 8},
        {value: 9},
        {value: 10},
        {value: 11},
        {value: 12},
        {value: 13},
        {value: 14},
        {value: 15},
        {value: 16},
        {value: 17},
        {value: 18},
        {value: 19},
        {value: 20},
        {value: 21},
        {value: 22},
        {value: 23},
        {value: 24},
        {value: 25},
        {value: 26},
        {value: 27},
        {value: 28},
        {value: 29},
        {value: 30}
    ]
};

const Item = ({value, settingsValue, extra}: ItemProps) => {
    const isSelected = () => {
        if(value === settingsValue) {
            return Styles.Selected;
        } else {
            return;
        }
    }

    return(
        <View style={[Styles.Item, isSelected()]}>
            <Text style={isSelected()}>{value} {extra}</Text>
        </View>
    );
}

const Dropdown = ({name, value, extra}: DropDownProps) => {
    const [visibility, setVisibility] = useState({display: "none"});
    const [button, setButton] = useState("chevron-down");

    const DropdownButtonHandler = () => {
        if(visibility.display === "none") {
            setVisibility({display: ""});
            setButton("chevron-up");
        } else {
            setVisibility({display: "none"});
            setButton("chevron-down");
        }
    }

    const getData = () => {
        if(extra === "min") {
            return DATA.min;
        } else {
            return DATA.other;
        }
    }

    const getVisibility = () => {
        if(visibility === {display: ""} || visibility === {display: "none"}) {
            return visibility;
        } else {
            return {display: "none"};
        }
    }

    const getButton = () => {
        if(button === "chevron-down" || button === "chevron-up") {
            return button;
        } else {
            return "chevron-down";
        }
    }

    const renderItem = ({item}: any) => {
        return(
            <Pressable style={Styles.DropdownContainer}>
                <Item value={item.value} settingsValue={value} extra={extra} />
            </Pressable>
        );
    }

    return(
        <View style={Styles.OuterContainer}>
            <View style={Styles.ButtonContainer}>
                <Text>{name}</Text>
                <Pressable style={Styles.Button} onPress={() => DropdownButtonHandler()}>
                    <Text style={{textAlign: 'right', width: '60%'}}>{value} {extra}</Text>
                    <Entypo name={getButton()} size={18} color="black" />
                </Pressable>
            </View>
            <View style={[Styles.Dropdown, getVisibility()]}>
                <FlatList
                    style={Styles.Flatlist}
                    data={getData()}
                    renderItem={renderItem}
                    initialScrollIndex={value - 3}
                    keyExtractor={item => item.value.toString()}
                />
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    OuterContainer: {
        marginVertical: 10,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Colors.light.colorWhite,
    },
    ButtonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.light.colorWhite,
        alignItems: 'center'
    },
    Button: {
        width: '35%',
        height: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    Dropdown: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    DropdownContainer: {
        width: '100%'
    },
    Selected: {
        backgroundColor: Colors.light.colorBlue700,
        color: Colors.light.textColorWhite
    },
    Flatlist: {
        height: '200px',
        width: '100%',
    },
    Item: {
        paddingVertical: 10,
        width: '100%',
        textAlign: 'center'
    }
});

export default Dropdown;