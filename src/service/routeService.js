import api from "./api";

const getProjects = (diary) => {
    return api.get("projects", diary)
}

const routerService = {
    getProjects,
};

export default routerService;
