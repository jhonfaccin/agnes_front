<template>
	<MenuHeader />
	<div>
		<div class="text-center">
			<h1>Projetos</h1>
		</div>
		<div class="text-center">
			<table class="table">
				<thead>
					<tr v-for="project in projects" :key="project.id">
						<td>{{ project.name }}</td>
						<td>{{ project.status }}</td>
						<td>{{ project.customer.name }}</td>
					</tr>
				</thead>
				<tbody>
					<tr>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import MenuHeader from "@/components/Menu.vue";
import routerService from "../service/routeService";

export default {
	name: 'ProjectAgnes',
	components: {
		MenuHeader
	},
	data() {
		return {
			projects: []
		};
	},
	created() {
		this.listProjects();
	},
	methods: {
		listProjects() {
			routerService.getProjects().then(response => {
				this.projects = response.data;
				console.log(response.data)
			}).catch(error => {
				console.error(error);
			});
		},
	}
}
</script>