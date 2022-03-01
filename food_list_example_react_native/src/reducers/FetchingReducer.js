export default (state = false, action) => {
    switch (action.type) {
        case 'start_fetch':
            return true;
        // case 'stop_fetch':
        // return false;
        case 'new_recipe':
            return false;
        default:
            return state;
    }
};