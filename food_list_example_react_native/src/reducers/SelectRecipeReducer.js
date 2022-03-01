export default (state = null, action) => {
    switch (action.type) {
        case 'select_recipe':
            return action.payload;
        case 'start_fetch':
            return null;
        default:
            return state;
    }
};