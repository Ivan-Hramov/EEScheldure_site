<script>
    import { notifications } from '$lib/notificationsStore';
    import Notification from './Notification.svelte';

    let list = [];
    $: notifications.subscribe(value => (list = value));

    function removeNotification(index) {
        notifications.update(n => n.filter((_, i) => i !== index));
    }
</script>

<div class="notifications-container">
    {#each list as { message, type, duration }, index}
        <Notification
                message={message}
                type={type}
                duration={duration}
                on:outroend={() => removeNotification(index)}
        />
    {/each}
</div>

<style>
    .notifications-container {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>
