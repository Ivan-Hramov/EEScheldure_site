<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
    import Notifications from "../components/Notifications.svelte";
	let { children } = $props();
</script>

<Header />
<Notifications />
{@render children()}
<Footer />
