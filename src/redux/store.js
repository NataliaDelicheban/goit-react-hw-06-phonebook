import {createStore} from 'redux';

const initialeStore = {
    contacts: [{
        id: "1",
        name: "Natalia",
        number: "547-23-15",
    },
    {
        id: "2",
        name: "Tatyana",
        number: "565-22-19",
    },
    ]
}

const reducer = (store = initialeStore) => {
    return store;
}

const store = createStore(reducer);

export default store;
