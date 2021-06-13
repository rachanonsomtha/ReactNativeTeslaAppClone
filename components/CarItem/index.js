import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButon from '../StyledButton';

const CarItem = (props) => {

    const { name, tagLine, tagLineCTA, image } = props.car
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{tagLine}&nbsp; <Text style={styles.subTitleCTA}>{tagLineCTA}</Text></Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButon type="primary" content={"Custom Order"} onPress={() => {
                    console.warn('Custom order was pressed')
                }} />
                <StyledButon type="secondary" content={"Existing Inventory"} onPress={() => {
                    console.warn('Existing Inventory was pressed')
                }} />
            </View>
        </View>
    );
}

export default CarItem
