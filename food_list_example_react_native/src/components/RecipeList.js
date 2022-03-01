import React, { Component } from 'react';
import { FlatList, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import RecipeThumbnail from './RecipeThumbnail';

class RecipeList extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    render() {
        if (this.props.recipes.length > 0) {
            return (
                //use keyboardShouldPersistTaps to ensure that onPress work the first time it is pressed
                <CardItem>
                    <FlatList
                        keyboardShouldPersistTaps="always"
                        horizonrtal data={this.props.recipes}
                        renderItem={({ item }) =>
                            <RecipeThumbnail
                                recipe={item}
                            />
                        }
                    />
                </CardItem>
            );
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    const keyRecipes = state.recipes.map((recipe) => {
        //add key property to recipe for Flatlist 
        const recipeWithKey = recipe;
        recipeWithKey.key = recipeWithKey.recipe_id;
        return recipeWithKey;
    });

    return {
        recipes: keyRecipes
    };
};

export default connect(mapStateToProps)(RecipeList);