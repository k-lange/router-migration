import fetchJson from './fetch';

getCast.operation = 'READ';
getCast.idFrom = ({ person }) => person.id;
export function getCast(id) {
    return fetchJson(`http://api.tvmaze.com/shows/${id}/cast`);
}
