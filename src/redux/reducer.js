import { BANNERS } from '../shared/banners'
import { ITEMS } from '../shared/items'

export const initialState = {
    banners: BANNERS,
    items:  ITEMS
};

export const Reducer = (state = initialState, action) => {
    return state;
};