import Api from "@/Api";
export default {
    getAllTodos() {
        return Api.get('todos');
    },
}