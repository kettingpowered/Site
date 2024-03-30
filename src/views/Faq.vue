<script>
import QnA from '@/components/faq/QnAComponent.vue';

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
          content: this.global.url + 'faq/'
        },
        {
          name: 'theme-color',
          content: '#770708'
        },
      ],
      link: {
        rel: 'canonical',
        href: this.global.url + 'faq/'
      }
    };
  },
  data() {
    return {
      questionsAndAnswers: [
        {
          id: "what-is-ketting",
          question: "What is Ketting?",
          answer: "Ketting is a Minecraft server hybrid, combing Forge, Bukkit and Spigot."
        },
        {
          id: "developers",
          question: "Who are the developers?",
          answer: "Our developers are listed on the <a href='/team/'>team page</a>.",
          safe: "Our developers are listed on the team page."
        },
        {
          id: "versions",
          question: "What versions of Minecraft does Ketting support?",
          answer: "Check the <a href='/download/'>downloads page</a> for the latest supported versions.",
          safe: "Check the downloads page for the latest supported versions."
        },
        {
          id: "how-to-install",
          question: "How do I install Ketting?",
          answer: "When choosing a version from our <a href='/download/'>downloads page</a>, click 'Get it' and follow the provided instructions.",
          safe: "When choosing a version from our downloads page, click 'Get it' and follow the provided instructions."
        },
        {
          id: "found-a-bug",
          question: "I found a bug, what do I do?",
          answer: "Go to our github page and create an issue in the correct repository."
        },
        {
          id: "is-this-magma",
          question: "Is Ketting a continuation of Magma?",
          answer: "Ketting is not a continuation of Magma, but a project rewritten from scratch after Magma was discontinued."
        },
        {
          id: "why-not-paper",
          question: "Why did you use Spigot instead of Paper?",
          answer: "Due to the extra amount of patches we would need to apply (around 1500 on top of Spigot), we decided to use Spigot as a base. Paper also comes with some drastic changes to internal code that we didn't want to include."
        }
      ]
    };
  },
  components: {
    QnA
  },
  methods: {
    getTitle(hash) {
      if (hash) {
        const qna = this.getQuestionById(hash.substring(1));
        if (qna)
          return qna.question;
      }
      return this.unhead.formattedTitle("FAQ");
    },
    getDescription(hash) {
      if (hash) {
        const qna = this.getQuestionById(hash.substring(1));
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
      return this.$route.hash === `#${id}`;
    }
  },
  computed: {
    ogTitle() {
      return this.getTitle(this.$route.hash);
    },
    ogDescription() {
      return this.getDescription(this.$route.hash);
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