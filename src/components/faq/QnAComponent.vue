<script>
export default {
  name: "QnAComponent",
  props: {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    border: {
      type: String,
      required: true,
      validator: function (value) {
        return ['top', 'bottom', 'sides'].includes(value);
      }
    },
    expanded: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    expanded: function (newValue) {
      if (newValue) {
        this.$el.getElementsByClassName('detail')[0].setAttribute('open', '');
      } else {
        this.$el.getElementsByClassName('detail')[0].removeAttribute('open');
      }
    }
  }
}
</script>

<template>
  <div :class="['qna', border]">
    <details class="detail">
      <summary>{{ question }}</summary>
      <div class="desc" v-html="answer"></div>
    </details>
  </div>
</template>

<style scoped>
.qna {
  display: flex;
  flex-direction: column;
  transition: background-color 0.2s;
}
.qna:hover {
  background-color: var(--color-background-mute);
}

/*borders start*/
.top {
  border-top: 1px solid var(--color-border);
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
}
.bottom {
  border-bottom: 1px solid var(--color-border);
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
}
.bottom .desc {
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
}
.sides {
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
}
/*borders end*/

details {
  cursor: pointer;
  user-select: none;
}

summary {
  font-size: 1.5rem;
  padding: 1rem;
}

.desc {
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
  background-color: var(--color-background-soft);
  transition: background-color 0.2s;
}
.qna:hover .desc {
  background-color: var(--color-background-mute);
}

.desc >>> a {
  color: var(--color-link-secondary);
}
.desc >>> a:hover {
  color: var(--color-link-secondary-hover);
}
</style>