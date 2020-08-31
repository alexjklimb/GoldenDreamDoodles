const initialState = {
    pageData: {}
}

const LOAD_DATA = "LOAD_DATA";

export function loadData(data) {
    return {
        type: LOAD_DATA,
        payload: data
    }
};

export default function reducer(state=initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case LOAD_DATA:
            return {...state, pageData: payload};
        default:
            return state;
    }
}