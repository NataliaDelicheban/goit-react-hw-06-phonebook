import { SET_FILTER } from './filter-types';

const initialeStore = "";

const filterReducer = (store = initialeStore, {type, payload}) => {
    switch (type) {
        case SET_FILTER:
            return payload;
        default:
            return store;
    }
}
export default filterReducer;