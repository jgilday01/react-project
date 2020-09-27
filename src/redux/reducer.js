import { BANNERS } from '../shared/banners'
import { EVENTS } from '../shared/events'

export const initialState = {
    banners: BANNERS,
    events:  EVENTS
};

export const Reducer = (state = initialState, action) => {
    return state;
};