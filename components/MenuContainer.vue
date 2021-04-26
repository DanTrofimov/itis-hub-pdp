<template>
  <v-container class="menu-content">
    <DynamicCard
      v-for="card in menuElements"
      :key="card.id"
      class="menu-content__card"
      :title="card.title"
      :link="card.url"
      title-size="20"
    />
  </v-container>
</template>

<script>
import DynamicCard from "./DynamicCard";
export default {
  name: "MenuContainer",
  components: { DynamicCard },
  props: {
    menuElements: Array,
  },
};
</script>

<style scoped>
.menu-content {
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
}

.menu-content__card {
  margin: 5px;
}
</style>
