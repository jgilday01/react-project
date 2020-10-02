/*
import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
};
*/

import { createStore, combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { Banners } from './banners';
import { Foods } from './foods';
import { Items } from './items';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            banners: Banners,
            foods: Foods,
            items: Items,
            ...createForms({
                feedbackForm: InitialFeedback
            })
        })
    );

    return store;
};
