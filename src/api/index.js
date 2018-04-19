import { build } from 'ladda-cache';
import * as showsApi from './shows';
import * as castApi from './cast';

export default build({
    shows: {
        api: showsApi,
        ttl: 6000,
    },
    cast: {
        api: castApi,
        ttl: 6000,
    },
});
