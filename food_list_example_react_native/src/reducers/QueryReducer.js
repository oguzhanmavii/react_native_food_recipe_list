export default (state = '', action) => {
    switch (action, type) {
        case 'change_query':
            return action.payload;
        default:
            return state;
    }
}