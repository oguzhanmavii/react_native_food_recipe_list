import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableNativeFeedback,
    Linking,
    LayoutAnimation,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem } from './common';


class RecipeDetail extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    render() {
        if (this.props.selectedRecipe) {
            const { recipePublisherStyle, recipeTitleStyle, recipeDetailImgStyle } = styles;
            const { image_url, title, source_url, publisher } = this.props.selectedRecipe;
            return (
                <Card>
                    <CardItem style={{ padding: 0 }}>
                        <Image
                            source={{ uri: image_url }}
                            style={recipeDetailImgStyle}
                        />
                    </CardItem>

                    <CardItem>
                        <Text style={recipeTitleStyle}>
                            {title}
                        </Text>
                    </CardItem>

                    <CardItem>
                        <TouchableNativeFeedback onPress={() => Linking.openURL(source_url)}>
                            <View>
                                <Text style={recipePublisherStyle}>
                                    {publisher}
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                    </CardItem>
                </Card>
            );
        }
        return null;
    }
}


const styles = StyleSheet.create({
    recipeDetailImgStyle: {
        height: 200,
        width: null,
        flex: 1,
        borderRadius: 2
    },
    recipeTitleStyle: {
        fontSize: 30,
        fontFamily: 'monospace',
        margin: 4,
        fontWeight: 'bold'
    },
    recipePublisherStyle: {
        fontSize: 20,
        fontFamily: 'cursive',
        margin: 4,
        marginTop: 0
    }
});

const mapStateToProps = (state) => {
    return {
        selectedRecipe: state.selectedRecipe
    };
};

export default connect(mapStateToProps)(RecipeDetail);