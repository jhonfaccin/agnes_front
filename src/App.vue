<template>
	<router-view/>
	<div></div>
</template>

<script>

export default {
	name: 'App',
	mounted() {
		this.$router.push("/projects");
	},
}
</script>

