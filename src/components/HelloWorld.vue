<template>
  <section>
    <div class="content-nav-questions">
      <nav>
        <li>
          <button class="question-index">
            <i class="material-icons">play_arrow</i>
          </button>
        </li>
        <li v-for="(question, index) in questions">
          <div class="question-selected">
            <!-- <div class="tooltip" v-if="tooltip"  v-on:mouseover="tooltip-{{index}}=true"  v-on:mouseleave="'tooltip-{{index}}'=false"> -->
            <div class="tooltip" v-if="question.id" v-on:mouseover="question.id=true"  v-on:mouseleave="question.id=false" >
              <button><i class="material-icons">skip_previous</i></button>
              <button><i class="material-icons">file_copy</i></button>
              <button v-on:click="del(index)"><i class="material-icons">delete</i></button>
              <button><i class="material-icons">skip_next</i></button>
            </div>
            <button class="question-index" v-on:mouseover="question.id=true"  v-on:mouseleave="question.id=false">
              <i class="material-icons"v-if="question.icon">{{question.icon}}</i>
              <i class="material-icons"v-else="question.icon">check_box_outline_blank</i>
            </button>
          </div>
        </li>
        <li>
          <button class="question-index">
            <i class="material-icons">stop</i>
          </button></li>
      </nav>
      <button class="add" v-on:click="add(newId)">+</button>
    </div>

    <div class="question"></div>

  </section>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      tooltip:false
    }
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
    ...mapMutations('survey', ['newQuestion','deleteQuestion']),
    add(questionId){
      this.newQuestion({
        icon:'check_box_outline_blank',
        id:questionId ++
      })
    },
    del(index){
      this.deleteQuestion(index)
    }
  }
}
</script>
<style>
.question{
  max-width: 500px;
  height: 500px;
  margin: 0 auto;
  display: block;
  background-color: #fff;
  border-radius: 3px;
  margin-top: 20px;
}
.content-nav-questions{
  width: 100%;
  display: block;
  height: 50px;
  background-color:rgb(63, 51, 86);
  display: flex;
}
.content-nav-questions nav{
  display: flex;
}
.content-nav-questions nav li{
  margin: 0 10px;
}
.content-nav-questions nav li .question-selected{
  position: relative;
}
.content-nav-questions nav li:first-child .question-index,
.content-nav-questions nav li:last-child .question-index{
  background-color: #778899
}
.tooltip{
  position: absolute;
  width: 158px;
  height: 32px;
  border-radius: 5px;
  background-color: purple;
  top: 23px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  left: -54px;
  z-index: 900;
}
 .tooltip button{
  width: auto;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 10px;
  opacity: 0.5
}
.tooltip button:hover{  color: grey}

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
