<template>
  <v-container class="content-container discipline">
    <v-container class="greeting">
      <h1 class="mb-3 discipline__title">Алгебра и Геометрия</h1>
      <p class="description">теория</p>
      <h4>темы:</h4>
      <template v-if="getAlgemLessons.length === 0">
        <p class="in-development">контент в разработке</p>
      </template>
    </v-container>
    <div class="discipline__info-container lessons">
      <DynamicCard
        v-for="lesson in getAlgemLessons"
        :key="lesson.id"
        class="lessons_card"
        :title="lesson.title"
        :lesson-id="lesson.id"
        link="/algem-theory/"
      />
    </div>
  </v-container>
</template>

<script>
import DynamicCard from "../../components/DynamicCard";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AlgemTheory",
  components: { DynamicCard },
  async fetch() {
    await this.loadLessons(process.env.courseId.alGem);
  },
  methods: {
    ...mapActions("lessons", ["loadLessons"]),
  },
  computed: {
    ...mapGetters("lessons", ["getAlgemLessons"]),
  },
};
</script>

<style scoped>
.content-container {
  max-width: 700px;
  margin: 0 auto;
}

.discipline__info-container {
  padding-left: 10px;
  padding-right: 10px;
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
}

.lessons_card {
  margin: 5px;
}

@media screen and (max-width: 431px) {
  .discipline__title {
    font-size: 25px;
  }
}
</style>
