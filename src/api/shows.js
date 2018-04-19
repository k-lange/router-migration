import fetchJson from './fetch';

getShow.operation = 'READ';
export function getShow(id) {
    return fetchJson(`http://api.tvmaze.com/shows/${id}`);
}
