import { defer } from 'lodash/fp';
import history from './history';

export default function globalClickHandler(event) {
    const target = event.delegateTarget;

    if (
        target.tagName !== 'A' ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.button !== 0
    ) {
        return;
    }

    const href = target.getAttribute('href');
    const isApp = /^\/([^/]|$)/.test(href);

    if (!isApp || event.defaultPrevented) {
        return;
    }

    event.preventDefault();

    defer(() => history.push(href));
}
