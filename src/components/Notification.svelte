<script>
    export let message = '';
    export let type = 'info'; // Тип уведомления: info, success, error, etc.
    export let duration = 3000; // Длительность показа уведомления (в мс)

    let visible = true;

    // Убираем уведомление через указанное время
    setTimeout(() => (visible = false), duration);
</script>

<style>
    .notification {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .notification.info {
        background-color: #007bff;
    }

    .notification.success {
        background-color: #28a745;
    }

    .notification.error {
        background-color: #dc3545;
    }

    .notification.visible {
        opacity: 1;
        transform: translateY(0);
    }
</style>

<div class="notification {type} {visible ? 'visible' : ''}">
    {message}
</div>
