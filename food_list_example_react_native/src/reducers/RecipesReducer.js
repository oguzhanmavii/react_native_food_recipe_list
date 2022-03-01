export default (state = [], action) => {
    switch (action.type) {
        case 'new_recipe':
            return action.payload;
        case 'start_fetch':
            return [];
        default:
            return state;
    }
};