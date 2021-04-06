<template>
  <div class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3 ml-5" id="element"></h1>
      <p class="greeting__description">На сайте есть разборы теоретических и практических
        задач первого курса ИТИСа, конспекты и прочие полезные материалы
      </p>
    </v-container>
    <MenuContainer :menu-elements="getHomecards"/>
  </div>
</template>

<script>
import HeaderBar from "~/components/HeaderBar.vue";
import MenuContainer from "../components/MenuContainer";
import { typeGreeting } from "../plugins/typeMessage"
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    MenuContainer,
    HeaderBar,
  },
  async fetch() {
    await this.loadHomecards();
  },
  computed: {
    ...mapGetters("homecards", ["getHomecards"])
  },
  methods: {
    ...mapActions("homecards", ["loadHomecards"])
  },
  mounted() {
    typeGreeting();
  },
}
</script>

<style>
.greeting {
  text-align: center;
  margin-top: 2em;
}

.greeting__description {
  max-width: 600px;
  margin: auto;
}
</style>
