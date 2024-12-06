<script>
    const techItems = [ //? Временная заглушка
        { name: 'HTML', icon: 'html5' },
        { name: 'CSS', icon: 'css3' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'Nodejs', icon: 'nodejs' },
        { name: 'Svelte', icon: 'svelte' },
        { name: 'Bootstrap', icon: 'bootstrap' },
        { name: 'Tailwind CSS', icon: 'tailwind-css' },
        { name: 'PHP', icon: 'php' }
    ]

    const works = [ //? Временная заглушка
        { name: 'EEScheldure Bot', year: '2024', image: '/works/bot.jpg', githubLink: 'https://github.com/Ivan-Hramov/EEScheldure', workLink: 'https://t.me/EEScheldureBot', desc: 'tud kuupäevavahemiku kohta. Mugav käskude ja sündmuste süsteem boti realiseerimiseks.', languages: ['JavaScript', 'Nodejs'] },
        { name: 'EEScheldure Bot', year: '2024', image: '/works/2.jpg', githubLink: 'https://github.com/Ivan-Hramov/EEScheldure', workLink: 'https://t.me/EEScheldureBot', desc: 'Telegrammi bot — EEScheldure. Põhifunktsiooniks on kooli tunniplaani saamine veebilehelt tahvel.edu.ee ja selle saatmine kasutajale sobival kujul valitud kuupäevavahemiku kohta. Mugav käskude ja sündmuste süsteem boti realiseerimiseks.', languages: ['JavaScript', 'Nodejs'] },
        { name: 'EEScheldure Bot', year: '2024', image: '/works/bot.jpg', githubLink: 'https://github.com/Ivan-Hramov/EEScheldure', workLink: 'https://t.me/EEScheldureBot', desc: 'Telegrammi bot — EESchel. Põhifunktsiooniks on kooli tunni. Põhifunktsiooniks on kooli tunnidure. Põhifunktsiooniks on kooli tunniplaani saamine veebilehelt tahvel.edu.ee ja selle saatmine kasutajale sobival kujul valitud kuupäevavahemiku kohta. Mugav käskude ja sündmuste süsteem boti realiseerimiseks.', languages: ['JavaScript', 'Nodejs'] },
        { name: 'EEScheldure Bot', year: '2024', image: '/works/2.jpg', githubLink: 'https://github.com/Ivan-Hramov/EEScheldure', workLink: 'https://t.me/EEScheldureBot', desc: 'aatmine kasutajale sobival kujul valitud kuupäevavahemiku kohta. Mugav käskude ja sündmuste süsteem boti realiseerimiseks.', languages: ['JavaScript', 'Nodejs'] },
        { name: 'EEScheldure Bot', year: '2024', image: '/works/bot.jpg', githubLink: 'https://github.com/Ivan-Hramov/EEScheldure', workLink: 'https://t.me/EEScheldureBot', desc: 'Telegrammi bot — EEScheldure. Põhifunktsiooniks on kooli tunniplaani saamine veebilehelt tahvel.edu.ee ja selle saatmine kasutajale sobival kujul valitud kuupäevavahemiku kohta. Mugav käskude ja sündmuste süsteem boti realiseerimiseks.', languages: ['JavaScript', 'Nodejs'] }
    ]
</script>

<main>
    <div class="first-block tw-px-60 tw-flex tw-flex-col clr-white">
        <div class="first-text-block">
            <h1 style="line-height: 3rem;" class="tw-text-center">Hello I’m</h1>
            <h1 class="tw-text-center">Ivan Hramov</h1>
            <p class="tw-py-6 text-justify" style="color:#ABADB2;">
                I am a Full-stack developer. 
                I am passionate about using technology to create beautiful and functional websites and social media bots that solve real-world problems.
                I started learning programming about seven years ago.
                I have never taken a single paid programming lesson.
                I am completely self-taught. I work on website development, social media bots, and applications.
            </p>
        </div>
        <div class="first-tech-block tw-grid tw-pb-5">
            {#each techItems as item}
                <div class="first-tech-item"><i class="ri-{item.icon}-fill"></i> {item.name}</div>
            {/each}
        </div>
    </div>

    <div class="second-block tw-flex tw-flex-col clr-white tw-px-24" id="work">
        <h1 class="pb-4">My latest <span style="color: var(--primary);">work</span></h1>
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5" data-bs-theme="dark">
            {#each works as work}
                <div class="col">
                    <div class="card h-100">
                        <img src="{work.image}" alt="{work.name}" class="card-img-top tw-h-72 tw-object-cover">
                        <div class="card-body">
                            <div class="card-title tw-flex">
                                <h5>{work.name}</h5>
                                <div class="tw-flex-grow"></div>
                                <h5>{work.year}</h5>
                            </div>
                            <div class="tw-flex tw-items-center tw-mb-5">
                                {#each work.languages as lang}
                                    <div class="tw-mr-2">
                                        <span class="badge">{lang}</span>
                                    </div>
                                {/each}
                                <div class="tw-flex-grow"></div>
                                <a href="{work.githubLink}" aria-label="GitLink" target="_blank" rel="noopener noreferrer" class="tw-mr-2" style="font: var(--font-lead);"><i class="ri-github-fill"></i></a>
                                <a href="{work.workLink}" aria-label="WorkLink" target="_blank" rel="noopener noreferrer" style="font: var(--font-lead);"><i class="ri-external-link-line"></i></a>
                            </div>
                            <p class="card-text" style="font: var(--font-body);">{work.desc}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div class="third-block tw-flex tw-flex-col clr-white tw-mx-44 tw-justify-center">
        <h1 class="tw-text-center">Ready to start</h1>
        <h1 class="tw-text-center">your next project?</h1>
        <h1 class="tw-text-center" style="color: var(--primary);">Get it touch me!</h1>
    </div>
</main>

<style>
    .third-block {
        background-color: var(--secondary-light);
        width: calc(100vw - 2 * 11rem);
        border-radius: 3rem;
        height: 25rem;
        margin-top: 10rem;
        margin-bottom: 5rem;
    }

    .card {
        --bs-card-bg: var(--secondary-light);
        --bs-card-border-width: 0;
    }

    .card-title {
        margin-bottom: 0;
    }

    .row {
        margin-left: 0;
        margin-right: 0;
    }

    .badge {
        background-color: var(--primary);
    }

    .first-tech-block {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 1rem;
    }
    .first-tech-item {
        font: var(--font-body);
        background-color: var(--secondary-light);
        padding: 0.4rem 0.65rem;
        border-radius: 0.3rem;
        text-align: center;
        width: 100%;
    }
    .first-tech-item:nth-child(8) {
        margin-right: 0;
    }

    @media (max-width: 600px) {
        .second-block {
            padding-top: 3rem;
        }
    }
    @media (min-width: 601px) and (min-height: 701px) {
        .first-block {
            height: calc(100vh - 4rem);
            justify-content: center;
        }
    }
    @media (max-width: 400px) {
        .first-block {
            justify-content: normal;
        }
    }
    @media (max-width: 780px) {
        .first-block {
            padding-right: 0.5rem;
            padding-left: 0.5rem;
        }
        .second-block {
            padding-right: 0.5rem;
            padding-left: 0.5rem;
        }
        .second-block > h1 {
            font: var(--font-headline-3);
        }
        .first-text-block > h1 {
            font: var(--font-headline-3);
        }
    }
    @media (min-width: 781px) and (max-width: 991px) {
        .first-block {
            padding-right: 5rem;
            padding-left: 5rem;
        }
        .second-block {
            padding-right: 5rem;
            padding-left: 5rem;
        }
    }

    @media (max-width: 1020px) {
        .third-block {
            width: calc(100vw - 2 * 5rem);
            margin-left: 5rem;
            margin-right: 5rem;
        }
        .third-block > h1 {
            font: var(--font-headline-3);
        }
    }

    @media (max-width: 560px) {
        .third-block {
            width: calc(100vw - 2rem);
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }
    }

    @media (max-width: 431px) {
        .third-block {
            height: 17rem;
        }
        .third-block > h1 {
            font: var(--font-headline-5);
        }
    }
</style>