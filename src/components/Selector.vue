<template>
    <div class="content-selector">
      <div class="nav-selector">
        <nav>
          <li v-for="types in shared">
            <button v-on:click="selectUi(types.type)">
              <i class="material-icons">{{types.icon}}</i>
              <span>{{types.type}}</span>
            </button>
          </li>
        </nav>
    </div>
    <div class="selector-ui">
      <ul  v-for="item in shared" v-if="typeSelected == item.type">
        <li class="hvr-bounce-in" v-for="ui in item.ui">{{ui}}</li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: "Selector",
  data () {
    return {
      shared: [
        {
          type:'csat',
          icon:'insert_emoticon',
          ui:['5emo','5num']
        },
        {
          type:'nps',
          icon:'fitness_center',
          ui:['10num']
        },
        {
          type:'kpi',
          icon:'insert_chart',
          ui:['yn','ynd']
        }
      ],
      typeSelected: 'nps'
    }
  },
  methods: {
    selectUi(type){
      this.typeSelected = type;
    }
  }
}

</script>
<style scoped lang="scss">
.selector-ui{
  ul{
    padding: 10px;
    text-align: left;
    li{
      width: 50px;
      height: 70px;
      font-weight: bold;
      color: grey;
      padding: 10px;
      margin: 0 10px;
      background-color: #fff;
      cursor: pointer;
    }
  }
}
.content-selector{
  width: 85%;
  background-color: rgba(63,51,86,0.5);
  margin: 0 auto;
  height: 300px;
  overflow: auto;
  margin-top: 20px;
}
.nav-selector{
  nav{
    padding: 10px;
    border-bottom:2px solid #c5c5c5;
    li{
      display: inline-block;
      margin: 0 10px;
      button{
        width: 50px;
        height: 50px;
        border-radius: 5px;
        background-color: #fff;
        border:2px solid #fff;
        &:hover{
          border:2px solid #3F3356;
        }
      }
    }
  }
}
</style>
