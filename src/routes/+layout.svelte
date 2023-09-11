<script>
	import './styles.css';
    import Nav from './nav.svelte';
	import Counter from './counter.svelte';
</script>

<div class="app">
	<div class="header">
		<Nav/>
		<Counter/>
	</div>

	<main>
		<slot />
	</main>

	<footer>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 90%;
		margin: 1em;
		padding: 1em;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	.header{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
