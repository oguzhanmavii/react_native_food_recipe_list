import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import axios from 'axios';
import {
    Button,
    CardItem,
    Input,
    Spinner
} from './common';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import * as actions from '../actions';

class RecipeSearch extends Component {
    onSubmit() {
        this.props.startFetchAction();

        axios.get('https://community-food2fork.p.mashape.com/search', {
            params: {
                key: 'e76ae1ccf03d6d670572d1229a92b837',
                q: this.props.queryText
            },
            headers: {
                'X-Mashape-Key': '7qkVZsvzqlmshEjS4F18FzEy7c8yp1BeyC2jsnhFWajzCSE6BE',
                Accept: 'application/json'
            }
        }).then(response => {
            //this.props.stopFetchAction();
            console.log(response.data.recipes);
            this.props.newRecipeList(response.data.recipes);
        });
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <Spinner />
            );
        }

        return (
            <Button onPress={this.onSubmit.bind(this)}>
                <Text>Submit</Text>
            </Button>
        );
    }

    //use actions via this.props, not actions!!!!
    render() {
        return (
            <View>
                <CardItem>
                    <Input
                        label={'Search'}
                        placeholder={'Query'}
                        value={this.props.queryText}
                        onChangeText={(text) => this.props.changeQueryAction(text)}
                    />
                </CardItem>

                <CardItem>
                    {this.renderButton()}
                </CardItem>

                <RecipeList />

                <RecipeDetail />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        queryText: state.query,
        loading: state.fetchingRecipe
    };
};

//actions are passed in as props of component
export default connect(mapStateToProps, actions)(RecipeSearch);
