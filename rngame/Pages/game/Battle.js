// Import the required libraries
import React from 'react';
import {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity

} from 'react-native';


//var globalStyles = require('../../assets/styles'); //We don't have styles

// Create a new class called ComponentTemplate
// ComponentTemplate should be renamed to your class name
export class Battle extends Component{

    // Allow the object to be created with properties
    constructor(props){

        // React Native will handle properties with this line
        super(props);

        // Set any state variables
        this.state = {

        }

    }

    // Render any visual aspects of the component
    render(){

        // Return JSX that React Native will display
        return(
            <View style={[this.styles.flexCol, this.styles.full]}>
                <View style={[this.styles.flex5]}>
                    <Text>Hello</Text>
                </View>

                <View style={[this.styles.flexRow, this.styles.flex1]}>
                    <View style={[this.styles.flexItem, this.styles.flex1]}><Text>You: </Text><Text>100%</Text></View>
                    <View style={[this.styles.flexItem, this.styles.flex1]}><Text>Other: </Text><Text>100%</Text></View>
                </View>
                <View style={[this.styles.flexRow, this.styles.flex1]}>
                    <TouchableOpacity style={[this.styles.flexItem, this.styles.flex1, this.styles.button]}><Text style={[this.styles.buttonText]}>Special 1</Text></TouchableOpacity>
                    <TouchableOpacity style={[this.styles.flexItem, this.styles.flex1, this.styles.button]}><Text style={[this.styles.buttonText]}>Special 2</Text></TouchableOpacity>
                    <TouchableOpacity style={[this.styles.flexItem, this.styles.flex1, this.styles.button]}><Text style={[this.styles.buttonText]}>Special 3</Text></TouchableOpacity>
                </View>
                <View style={[this.styles.flexRow, this.styles.flex1]}>
                    <TouchableOpacity style={[this.styles.flexItem, this.styles.flex1, this.styles.button]}><Text style={[this.styles.buttonText]}>Shield</Text></TouchableOpacity>
                    <TouchableOpacity style={[this.styles.flexItem, this.styles.flex1, this.styles.button]}><Text style={[this.styles.buttonText]}>Escape</Text></TouchableOpacity>
                </View>



            </View>

        );
    }

    styles = StyleSheet.create({

        full:{
            width: "100%",
            height: "100%"
        },

        flexCol:{
            display: "flex",
            flexDirection: "column"
        },

        flexRow:{
            display: "flex",
            flexDirection: "row"
        },

        flexItem:{
            display: "flex"
        },
        button:{
            backgroundColor: "#78e3b6",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center"
        },
        buttonText:{
            textAlign: "center"
        },

        flex1:{
            flex: 1
        },

        flex5:{
            flex: 5
        }


    });

}
