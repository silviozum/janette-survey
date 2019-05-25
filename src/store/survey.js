const state = {
  isTemplate: false,
  version: 0,
  id: 1,
  title: "pesquisa de teste",
  account: 1,
  ticketSettings: [],
  questions: [{
    id:0,
    type:'nps',
    ui:'10num',
    icon:'fitness_center'
  },
  {
    id:1,
    type:'csat',
    ui:'5emo',
    icon:'insert_emoticon'
  }
],
  type:'nps',
  ui:'10num',
  alreadySent: false,
  sms: "texto sms",
  updatedAt: "2019-05-20T13:37:39.025Z",
  createdAt: "2019-05-20T13:37:39.025Z"
}

const mutations = {
  newQuestion(state, question) {
    console.log(question)
    state.questions.push(question)
  },
  deleteQuestion (state, index){
    console.log(index)
    delete state.questions[index]
  }
}


export default {
  namespaced: true,
  state,
  mutations
}
