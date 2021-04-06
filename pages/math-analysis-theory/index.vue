<template>
  <v-container class="content-container discipline">
    <v-container class="greeting">
      <h1 class="mb-3 discipline__title">Математический анализ</h1>
      <p class="description">теория</p>
      <h4>темы:</h4>
      <template v-if="getMathanLessons.length === 0">
        <p class="in-development">контент в разработке</p>
      </template>
    </v-container>
    <div class="discipline__info-container lessons">
      <DynamicCard
        class="lessons_card"
        v-for="lesson in getMathanLessons"
        :key="lesson.id"
        :title="lesson.title"
        :lesson-id="lesson.id"
        link="/math-analysis-theory/"
      />
    </div>
  </v-container>
</template>

<script>
  import DynamicCard from "../../components/DynamicCard";
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "math-analysis-theory",
    components: {DynamicCard},
    data () {
      return {
        courseData: ''
      }
    },
    async fetch() {
      await this.loadLessons(process.env.courseId.mathAn);
    },
    computed: {
      ...mapGetters("lessons", ["getMathanLessons"])
    },
    methods: {
      ...mapActions("lessons", ["loadLessons"])
    },
  }
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

  .lessons_card{
    margin: 5px;
  }

  @media screen and (max-width: 431px){
    .discipline__title {
      font-size: 25px;
    }
  }
</style>
