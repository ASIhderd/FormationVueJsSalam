<template>
  <v-container>
    {{todos}}
  </v-container>



</template>


<script>
import {mapState} from "vuex";

export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),

  computed : {

    ...mapState({
      todos : state => state.todos
    })

  },
  mounted() {
    this.$store.dispatch('addElementTodo',{ userId: 1, id: 1, title: "Hamzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", completed: false })

  },
}
</script>

<style scoped>



</style>