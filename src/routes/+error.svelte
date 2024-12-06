<script>
    import { page } from '$app/stores';
</script>

<main class="tw-flex tw-flex-col clr-white">
    <div class="error pb-5">
        <h1 class="tw-text-center">Sorry, this page unavailable!</h1>
        <h3 class="tw-text-center">{$page.status} {$page.error.message}</h3>
    </div>
    <div>
        <a href="/" class="btn">Home <i class="ri-arrow-right-line"></i></a>
    </div>
</main>

<style>
    main {
        height: calc(100vh - 8rem);
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 780px) {
        h1 {
            font: var(--font-headline-3);
        }
        h3 {
            font: var(--font-headline-5);
        }
    }
</style>