<footer class="tw-px-24 tw-flex tw-items-center tw-h-16">
    <h5 class="clr-white">EEScheldure</h5>
    <div class="tw-flex-grow"></div>
    <nav class="tw-flex tw-items-center">
        <ul class="tw-flex" style="font: var(--font-lead)">
            <li class="pr-2" id="social">
                <a href="mailto:ivan.hramov@eescheldure.ru" target="_blank" rel="noopener noreferrer" class="clr-white" aria-label="Mail"><i class="ri-mail-fill"></i></a>
            </li>
            <li class="tw-pl-3" id="social">
                <a href="https://github.com/Ivan-Hramov" target="_blank" rel="noopener noreferrer" class="clr-white" aria-label="GitHub Profile"><i class="ri-github-fill"></i></a>
            </li>
            <li class="tw-pl-3 tw-pr-2" id="social">
                <a href="https://t.me/botvanjek" target="_blank" rel="noopener noreferrer" class="clr-white" aria-label="Telegram Profile"><i class="ri-telegram-2-fill"></i></a>
            </li>
        </ul>
    </nav>
</footer>

<style>
    ul {
        padding: 0 0;
    }
    a:hover {
        color: var(--white-light);
    }
    @media (max-width: 780px) {
        footer {
            padding: 0 0.5rem;
        }
    }
    @media (max-width: 991px) {
        footer {
            padding: 0 1rem;
        }
    }
    @media (max-width: 400px) {
        footer > h5 {
            font: var(--font-lead);
        }
    }
</style>