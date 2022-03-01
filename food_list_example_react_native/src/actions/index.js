export const changeQueryAction = (query) => {
    return {
        type: 'change_query',
        payload: query
    };
};


export const startFetchAction = () => {
    return {
        type: 'start_fetch',
        payload: null
    };
};

// export const stopFecthAction = () => {
// return {
//    type: 'stop_fetch',
//    payload:null
//};
//};


export const newRecipeList = (recipeList) => {
    return {
        type: 'new_recipe',
        payload: recipeList,
    };
};


export const selectRecipe = (recipe) => {
    return {
        type: 'select_recipe',
        payload: recipe
    };
};