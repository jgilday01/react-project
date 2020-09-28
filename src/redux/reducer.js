import { BANNERS } from '../shared/banners'
import { ITEMS } from '../shared/items'
import { FOODS } from '../shared/foods'

export const initialState = {
    banners: BANNERS,
    items: ITEMS,
    foods: FOODS
};

export const Reducer = (state = initialState, action) => {
    return state;
};