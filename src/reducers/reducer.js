const initialState = {
    users: [{name: 'Paul'}, {name: 'Patrick'}]
};

export default function userReducer(state=initialState, action) {
    const newState = {...state};
    switch(action.type) {
        default:
            return state
    }
}