import { PubSub } from 'apollo-server';

import * as TEAM_EVENTS from './team';

export const EVENTS = {
    TEAM: TEAM_EVENTS,
};

export default new PubSub();