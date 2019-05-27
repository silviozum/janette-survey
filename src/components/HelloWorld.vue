<template>
  <section>
    <div class="content-nav-questions">
      <nav class="question-nav">
        <li class="hvr-bounce-in item-question">
          <button class="question-index">
            <i class="material-icons">play_arrow</i>
          </button>
        </li>
        <li v-for="(question, index) in questions" class="item-question hvr-bounce-in">
          <div class="question-selected">
            <div class="tooltip animated flipInX">
              <ul>
                <li><button v-on:click="right(index)"><i class="material-icons">skip_previous</i></button></li>
                <li><button><i class="material-icons">file_copy</i></button></li>
                <li><button v-on:click="del(index)"><i class="material-icons">delete</i></button></li>
                <li><button><i class="material-icons">skip_next</i></button></li>
              </ul>
            </div>
            <button class="question-index" v-on:mouseover="question.id=true"  v-on:mouseleave="question.id=false">
              <i class="material-icons"v-if="question.icon">{{question.icon}}</i>
              <i class="material-icons"v-else="question.icon">check_box_outline_blank</i>
            </button>
          </div>
        </li>
        <li class="hvr-bounce-in item-question">
          <button class="question-index">
            <i class="material-icons">stop</i>
          </button></li>
      </nav>
      <button class="add" v-on:click="add(newId)">+</button>
    </div>

    <div class="question">
      <div class="blank" v-on:click="blank()" v-if="isBLank">
        <span>blank</span>
        <button class="add">+</button>
      </div>
      <selector v-if="selector"/>
    </div>

  </section>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import Selector from '../components/Selector.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      tooltip:false,
      selector:false,
      isBLank: true,
    }
  },
  components: {
    'selector': Selector
  },

  computed: {
    ...mapState('survey', ['questions']),
    questionsGte(){
      return this.questions
    },
    newId(){
      return this.questions.length
    }
  },
  methods: {
    ...mapMutations('survey', ['newQuestion','deleteQuestion', 'moveRight']),
    add(questionId){
      this.newQuestion({
        icon:'check_box_outline_blank',
        id:questionId ++
      })
    },
    del(index){
      this.deleteQuestion(index)
    },
    right(index){
      this.moveRight(index)
    },
    blank(){
      this.isBLank = false,
      this.selector = true
    }
  }
}
</script>
<style lang="scss">
.question{
  max-width: 500px;
  height: 500px;
  margin: 0 auto;
  display: block;
  background-color: #fff;
  border-radius: 3px;
  margin-top: 20px;
  position: relative;
  padding-top: 50px;
  box-sizing: border-box;
}
.blank{
  margin: 0 auto;
  margin-top: 50px;
  display: inline-block;
  width: 200px;
  height: 80px;
  position: relative;
  border: 3px dashed grey;
  line-height: 80px;
  cursor: pointer;
  &:hover{
    border: 3px dashed pink;
    .add{opacity: 1;}
  }
  .add{
    position:absolute;
    top: -29px;
    right: -20px;
    background-color: #3F3356;
    color:#fff;
    opacity: 0.5;
  }
}
.content-nav-questions{
  width: 100%;
  display: block;
  height: 50px;
  background-color:rgb(63, 51, 86);
  display: flex;
}
.question-nav{
  display: flex;
}
.content-nav-questions nav .item-question{margin: 0 15px}
.content-nav-questions nav .item-question .question-selected{
  position: relative;
}
.content-nav-questions nav .item-question:first-child .question-index,
.content-nav-questions nav .item-question:last-child .question-index{
  background-color: #778899
}
.question-selected > .tooltip{
  display: none;
}

.question-selected:hover > .tooltip{
  display: block;
}

button.question-index{
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border:none;
  background-color: #fff;
  margin-top: 5px;
  display: block;
  padding: 7px;
  box-sizing:border-box;
}

.add{
  display: inline-block;
  border-radius: 100px;
  border:none;
  width: 40px;
  height: 40px;
  margin-top: 5px;
  background-color: pink;
  font-size: 30px;
  font-weight: bold;
  line-height: 10px;
  margin-left: 20px;
}
</style>
