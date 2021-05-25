<template>
  <v-container>

    {{todos}}
    <v-btn
        @click="$router.push('/login')"
        depressed
        color="primary"
    >
      <v-icon>
        mdi-account-outline
      </v-icon>
      GotoLogin
    </v-btn>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'HelloWorld',
  data: () => ({
    //todos : []
  }),
  computed : {

  ...mapState({
    todos : state => state.todos
    })

  },
  mounted() {
    this.$store.dispatch('getTodos')
        /*.then(res =>{
      this.todos=res.data
    })*/

  }
}
</script>
