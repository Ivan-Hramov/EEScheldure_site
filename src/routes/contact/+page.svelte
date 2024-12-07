<script>
    import { onMount } from 'svelte';

    let gtoken = null;

    onMount(() => {
        window.onSubmit = (token) => {
            gtoken = token;
            document.querySelector('#submit-button').disabled = false;
        }
    });
    function sendForm() {
        if (!gtoken) {
            alert('Please complete the CAPTCHA');
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
        .then(res => { res.json() })
        .then(data => {
            if (data.success) {
                alert('Message sent successfully! Thank you <3');
                document.querySelector('#name').value = '';
                document.querySelector('#mail').value = '';
                document.querySelector('#message').value = '';
                document.querySelector('#submit-button').disabled = true;
                gtoken = null;
            } else {
                alert('An error occurred while sending the message');
                console.debug(data);
            }
        });
    }
</script>

<svelte:head>
    <script src="https://www.google.com/recaptcha/enterprise.js" async defer></script>
</svelte:head>

<!--TODO Адаптив -->
<main class="clr-white tw-flex">
    <form on:submit={() => { sendForm() }} class="clr-white tw-flex tw-flex-col">
        <label for="name">Name:</label>
        <input type="text" placeholder="Example: Ivan Hramov" id="name" required>

        <label for="mail">Mail:</label>
        <input type="email" placeholder="Example: ivan.hramov@eescheldure.ru" id="mail" required>

        <label for="message">Message:</label>
        <textarea type="text" placeholder="Example: Hi, i wanna to work with you. Please write me." id="message" required></textarea>

        <div class="submit tw-flex tw-items-center">
            <button disabled id="submit-button" class="btn" style="width: 40%;" type="submit" value="Submit">Send</button>
            <div class="tw-flex-grow"></div>
            <div class="g-recaptcha" data-callback="onSubmit" data-theme="dark" data-action="SEND" data-sitekey="6LdTVZQqAAAAAK3laQ5e56ZEuz50CjXqfVZdGc90"></div>
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

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0 200px var(--secondary-light) inset !important;
        -webkit-text-fill-color: var(--white);
    }
</style>