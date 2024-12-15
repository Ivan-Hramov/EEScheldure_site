import { writable } from 'svelte/store';

export const notifications = writable([]);

export function addNotification({ message, type = 'info', duration = 3000 }) {
    notifications.update(n => [...n, { message, type, duration }]);
}
