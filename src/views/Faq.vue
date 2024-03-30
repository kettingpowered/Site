<script>
import QnA from '@/components/faq/QnAComponent.vue';
import {questionsAndAnswers} from '@/data/faq/questions.js';

export default {
  name: "Faq",
  head() {
    return {
      title: this.unhead.formattedTitle("FAQ"),
      meta: [
        {
          property: 'og:title',
          content: this.ogTitle
        },
        {
          property: 'og:description',
          content: this.ogDescription
        },
        {
          property: 'og:image',
          content: this.global.imageUrl
        },
        {
          property: 'og:url',
          content: this.global.url + 'faq'
        },
        {
          name: 'theme-color',
          content: '#770708'
        },
      ],
      link: {
        rel: 'canonical',
        href: this.global.url + 'faq'
      }
    };
  },
  data() {
    return {
      questionsAndAnswers
    };
  },
  components: {
    QnA
  },
  methods: {
    getTitle(id) {
      if (id) {
        const qna = this.getQuestionById(id);
        if (qna)
          return qna.question;
      }
      return this.unhead.formattedTitle("FAQ");
    },
    getDescription(id) {
      if (id) {
        const qna = this.getQuestionById(id);
        if (qna)
          return qna.safe || qna.answer;
      }
      return 'Ketting, A fork of MinecraftForge with added Bukkit & Spigot patches';
    },
    getQuestionById(id) {
      return this.questionsAndAnswers.find(q => q.id === id);
    },
    getBorder(qna) {
      if (qna.id === this.questionsAndAnswers[0].id)
        return "top";
      if (qna.id === this.questionsAndAnswers[this.questionsAndAnswers.length - 1].id)
        return "bottom";
      return "sides";
    },
    expanded(id) {
      return this.$route.params.id === id;
    }
  },
  computed: {
    ogTitle() {
      return this.getTitle(this.$route.params.id);
    },
    ogDescription() {
      return this.getDescription(this.$route.params.id);
    }
  }
}
</script>

<template>
  <div id="content">
    <h1>FAQ</h1>
    <div class="questions">
      <QnA class="question" v-for="qna in questionsAndAnswers" :id="qna.id" :key="qna.id" :question="qna.question" :answer="qna.answer" :border="getBorder(qna)" :expanded="expanded(qna.id)" />
    </div>
  </div>
</template>

<style scoped>
#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  margin: 20px auto;
}

.questions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
}

.question {
  width: 65vw;
}
</style>