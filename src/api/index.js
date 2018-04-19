import { build } from 'ladda-cache';
import * as showsApi from './shows';

export default build({
    shows: {
        api: showsApi,
        ttl: 6000,
    },
});
