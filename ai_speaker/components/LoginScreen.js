import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import Container from './Container';
import Button from './Button';
import Label from './Label';
import { Sae } from 'react-native-textinput-effects';
import { Fumi } from 'react-native-textinput-effects';


export default class LoginScreen extends Component {


 render() {
    return (
        <ScrollView style={styles.scroll}>

        <Container>
    		<Button
        	label="Forgot Login/Pass"
        	styles={{button: styles.alignRight, label: styles.label}}
        	 />
		</Container>

		<View>
  		    <Fumi
    		label={'Username or Email'}
            labelStyle={{ fontSize: 13, fontWeight: '100', color :'#BBBBBB'}}
    		iconClass={Icon}
    		iconName={'user-circle'}
    		iconColor={'#1988AB'}
    		// TextInput props
   			autoCapitalize={'none'}
    		autoCorrect={false}
        returnKeyType='next'
        />
    		<Fumi
    		label={'Password'}
            labelStyle={{ fontSize: 13, fontWeight: '100', color :'#BBBBBB'}}
    		iconClass={Icon}
    		iconName={'lock'}
    		iconColor={'#f95a25'}
    		// TextInput props
   			autoCapitalize={'none'}
    		autoCorrect={false}
        secureTextEntry={true}
        returnKeyType='go'
        />
        <Button
                label="Sign In"
                styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
        />
		</View>

		<Container>
    		<Button
       		styles={{button: styles.transparentButton}}
    		>
        	<View style={styles.inline}>
            	<Icon name="facebook-official" size={15} color="#3B5699" />
            	<Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text>
            	<Text style={styles.buttonBlueText}>with Facebook</Text>
        	</View>
    		</Button>
		</Container>

			<View style={styles.footer}>
    		<Container>
        	<Button
            	label="CANCEL"
            	styles={{label: styles.buttonBlackText}}
            	 />
    		</Container>
			</View>

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	scroll: {
    backgroundColor: '#DDDDDD',
    padding: 15,
    flexDirection: 'column'
	},
	label: {
    color: '#0d8898',
    fontSize: 10
	},
	alignRight: {
    alignSelf: 'flex-end'
	},
	textInput: {
    height: 40,
    fontSize: 15,
    backgroundColor: '#FFF'
	},
	transparentButton: {
    marginTop: 15,
    borderColor: '#3B5699',
    borderWidth: 1
	},
	buttonBlueText: {
    fontSize: 10,
    color: '#3B5699'
	},
	buttonBigText: {
    fontSize: 10,
    fontWeight: 'bold'
	},
	inline: {
    flexDirection: 'row'
	},
	buttonWhiteText: {
    fontSize: 10,
    color: '#FFF',
	},
	buttonBlackText: {
    fontSize: 10,
    color: '#595856'
	},
	primaryButton: {
    backgroundColor: '#34A853'
	},
	footer: {
   	marginTop: 50
	},
    placeholder:{
        fontSize : 5
    }
});
