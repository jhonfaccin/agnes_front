<template>
	<div class="menu">
		<ul>
			<li><router-link to="/projects">Projectos</router-link></li>
			<li><router-link to="/customers">Clientes</router-link></li>
		</ul>
	</div>
</template>


<script>

export default {
	nome: "menu-header",
	data() {
		return {
			menuActive: false
		};
	}
};
</script>

<style scoped>
.menu {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 20px;
	padding-bottom: 50px;
	background-color: #f1f1f1;
}

.menu ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	display: flex;
}

.menu li {
	margin-right: 20px;
}
</style>