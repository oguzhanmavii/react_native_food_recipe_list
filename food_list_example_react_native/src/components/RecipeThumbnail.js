import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
import * as actions from '../actions';

class RecipeThumbnail extends Component {
    render() {
        {
            const { SelectRecipe, isSelected, recipe } = this.props;
            const { recipeImageSelectedStyle, recipeImageStyle } = styles;

            return (<TouchableWithoutFeedback
                onPress={selectRecipe.bind(this, recipe)}
            >
                <Image
                    source={{ uri: recipe.image_url }}
                    style={isSelected ? recipeImageSelectedStyle : recipeImageStyle}
                />
            </TouchableWithoutFeedback>
            );
        }
    }
}

const styles = StyleSheet.create({
    recipeImageSelectedStyle: {
        margin: 10,
        with: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: '#4CAF50'
    },
    recipeImageStyle: {
        margin: 10,
        width: 80,
        height: 80,
        borderRadius: 40
    }
});

const mapStateToProps = (state, ownProps) => {
    const isSelected = state.selectedRecipe && state.selectedRecipe.recipe_id === ownProps.recipe.recipe_id;

    return { isSelected };
};


export default connect(mapStateToProps, actions)(RecipeThumbnail);
