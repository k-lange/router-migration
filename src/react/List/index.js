import { withData } from 'ladda-react';
import { map } from 'lodash/fp';
import api from '../../api';
import List from './presenter';

const GOOD_SHOWS = [2228, 6508, 1271, 25245, 28240, 20412, 16579, 670];

export default withData({
    resolve: {
        shows: () => Promise.all(map(api.shows.getShow, GOOD_SHOWS)),
    },
})(List);
