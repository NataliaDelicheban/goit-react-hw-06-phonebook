import { ADD_CONTACT, REMOVE_CONTACT } from './contacts-types';

const initialeStore = [];

const contactsReducer = (store = initialeStore, {type, payload}) => {
    switch (type) {
        case ADD_CONTACT:
            return [...store, payload];
        case REMOVE_CONTACT:
            return store.filter(({ id }) => id !== payload);
        default:
            return store;
    }
}
export default contactsReducer;