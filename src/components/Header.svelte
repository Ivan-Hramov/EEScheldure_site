<script>
    function menuVisible() {
        const mobileNav = document.querySelector('.mobile-nav');
        if (mobileNav.style.visibility === 'hidden') {
            mobileNav.style.visibility = 'visible';
            mobileNav.style.opacity = '1';
        } else {
            mobileNav.style.opacity = '0';
            setTimeout(() => {
                mobileNav.style.visibility = 'hidden';
            }, 150);
        }
    }
</script>

<header class="tw-px-24 tw-flex tw-items-center tw-h-16">
    <h4 class="clr-white">EEScheldure</h4>
    <div class="tw-flex-grow"></div>
    <nav class="tw-flex tw-items-center">
        <ul class="tw-flex" id="nav-routes">
            <li class="tw-px-4">
                <a href="/" class="clr-white">Home</a>
            </li>
            <li class="tw-pl-4">
                <a href="/#work" class="clr-white">Works</a>
            </li>
        </ul>
        <ul class="tw-flex tw-ml-14" style="font: var(--font-lead)">
            <li class="pr-2" id="social">
                <a href="https://github.com/Ivan-Hramov" target="_blank" rel="noopener noreferrer" class="clr-white" aria-label="GitHub Profile"><i class="ri-github-fill"></i></a>
            </li>
            <li class="tw-pl-3 tw-pr-2" id="social">
                <a href="https://t.me/botvanjek" target="_blank" rel="noopener noreferrer" class="clr-white" aria-label="Telegram Profile"><i class="ri-telegram-2-fill"></i></a>
            </li>
            <li class="tw-pl-3" id="mobilemenu">
                <a href="javascript:void(0);" on:click={menuVisible} class="clr-white" aria-label="menu"><i class="ri-align-justify"></i></a>
            </li>
        </ul>
        <a href="/contact" id="nav-routes" class="btn tw-ml-14">Contact me <i class="ri-arrow-right-line"></i></a>
    </nav>
</header>
<div class="mobile-nav" style="visibility: hidden; opacity: 0; transition: opacity 0.15s ease-in-out; position: absolute; width: 100%;">
    <div class="mobile-nav-item">
        <a href="/" class="clr-white">Home</a>
    </div>
    <div class="mobile-nav-item">
        <a href="/#work" class="clr-white">Works</a>
    </div>
    <div class="mobile-nav-item">
        <a href="/contact" class="clr-white">Contact me <i class="ri-arrow-right-line"></i></a>
    </div>
    <div class="tw-flex">
        <div class="mobile-nav-item tw-w-1/2">
            <a href="https://github.com/Ivan-Hramov" target="_blank" rel="noopener noreferrer" class="clr-white" aria-label="GitHub Profile"><i class="ri-github-fill"></i> Github</a>
        </div>
        <div class="mobile-nav-item tw-w-1/2">
            <a href="https://t.me/botvanjek" target="_blank" rel="noopener noreferrer" class="clr-white" aria-label="Telegram Profile"><i class="ri-telegram-2-fill"></i> Telegram</a>
        </div>
    </div>
</div>

<style>
    ul {
        padding: 0 0;
    }

    a:hover {
        color: var(--white-light);
    }

    .mobile-nav {
        text-align: center;
        background-color: var(--secondary-dark);
    }
    .mobile-nav-item a {
        padding: 0.8rem 0;
        display: block;
        width: 100%;
        text-align: center;
    }
    .mobile-nav-item:hover {
        background-color: var(--secondary-light);
        color: var(--white-light);
    }
    .mobile-nav-item:active {
        background-color: var(--secondary-light);
        color: var(--white-light);
    }

    @media (max-width: 780px) {
        #nav-routes, #social {
            display: none;
        }
        header {
            padding: 0 0.5rem;
        }
    }
    @media (min-width: 781px) {
        .mobile-nav {
            display: none;
        }
        #mobilemenu {
            display: none;
        }
    }
    @media (max-width: 991px) {
        header {
            padding: 0 1rem;
        }
    }
    @media (max-width: 400px) {
        header > h4 {
            font: var(--font-lead);
        }
    }
</style>