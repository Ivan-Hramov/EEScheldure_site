<svelte:head>
    <script src="https://www.google.com/recaptcha/enterprise.js" async defer></script>
</svelte:head>

<script>
    import { onMount } from 'svelte';
    import { addNotification } from '$lib/notificationsStore.js';

    let gtoken = null;
    let wasMsgSent = false;

    onMount(() => {
        window.onSubmit = (token) => {
            gtoken = token;
            document.querySelector('#submit-button').disabled = false;
        }
    });
    function sendForm() {
        if (!gtoken) {
            addNotification({ message: 'Please complete the CAPTCHA', type: 'error', duration: 2000 });
            return;
        }
        if (wasMsgSent) {
            addNotification({ message: 'You have already sent a message.', type: 'error', duration: 2000 });
            return;
        }
        const name = document.querySelector('#name').value;
        const mail = document.querySelector('#mail').value;
        const message = document.querySelector('#message').value;
        const encodedName = encodeURIComponent(name);
        const encodedEmail = encodeURIComponent(mail);
        const encodedMessage = encodeURIComponent(message);
        fetch('https://api.eescheldure.ru/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `name=${encodedName}&email=${encodedEmail}&message=${encodedMessage}`
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                addNotification({ message: 'Message sent successfully! Thank you <3', type: 'success', duration: 3000 });
                document.querySelector('#name').value = '';
                document.querySelector('#mail').value = '';
                document.querySelector('#message').value = '';
                document.querySelector('#submit-button').disabled = true;
                wasMsgSent = true;
            } else {
                addNotification({ message: 'An error occurred while sending the message', type: 'error', duration: 3000 });
                console.debug(data);
            }
        });
    }
</script>

<main class="clr-white tw-flex">
    <form on:submit|preventDefault={sendForm} class="clr-white tw-flex tw-flex-col">
        <label for="name">Name:</label>
        <input type="text" placeholder="Ivan Hramov" id="name" required>

        <label for="mail">Mail:</label>
        <input type="email" placeholder="ivan.hramov@eescheldure.ru" id="mail" required>

        <label for="message">Message:</label>
        <textarea type="text" placeholder="Hi, i wanna to work with you. Please write me." id="message" required></textarea>

        <div class="submit tw-items-center">
            <button disabled id="submit-button" class="btn" type="submit" value="Submit">Send</button>
            <div class="tw-flex-grow"></div>
            <div class="g-recaptcha" data-callback="onSubmit" data-theme="dark" data-action="SENDFORM" data-sitekey="6LdTVZQqAAAAAK3laQ5e56ZEuz50CjXqfVZdGc90"></div>
        </div>
    </form>
</main>

<style>
    main {
        height: calc(100vh - 8rem);
        justify-content: center;
        align-items: center;
    }
    label {
        font: var(--font-headline-5);
        margin-bottom: 0.3rem;
    }
    input, textarea {
        font: var(--font-body);
        margin-bottom: 1.5rem;
        background-color: var(--secondary-light);
        border: 1px solid var(--secondary-dark);
    }
    #message {
        resize: none;
        width: 35rem;
        height: 10rem;
        margin-bottom: 2rem;
    }
    .submit {
        display: flex;
    }
    #submit-button {
        width: 40%;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0 200px var(--secondary-light) inset !important;
        -webkit-text-fill-color: var(--white);
    }

    @media (max-width: 600px) {
        #message {
            width: 25rem;
        }
        .submit {
            display: flex;
            flex-direction: column;
        }
        #submit-button {
            width: 100%;
        }
        .g-recaptcha {
            margin-top: 1rem;
        }
    }
    @media (max-width: 431px) {
        #message {
            width: 100%;
        }
        input {
            width: 100%;
        }
    }
</style>