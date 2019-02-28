<template>
  <div>
    <b-container >
      <h2>Chat Messages</h2>
      <b-col v-for="(m,key) in messages" :key="key" cols="12">
        <div v-if="m.from.userId == loggedUserId" class="talk-bubble tri-right round right-in talk-bubble-me">
          <div class="talktext">
            <p><b>{{m.from.naam}}</b></p>
            <p>{{m.message}} <span style="float: right;">{{m.timeSend}}</span> </p>
          </div>
        </div>
        <div v-else class="talk-bubble tri-right left-in round  ">
          <div class="talktext">
            <p><b>{{m.from.naam}}</b></p>
            <p>{{m.message}} <span style="float: right;">{{m.timeSend}}</span> </p>
          </div>
        </div>
      </b-col>
    </b-container>
  </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex'

  export default {
    data(){
      return{
        messages:[],
        loggedUserId:"3434343434",
        defaultColor:'red'
      }
    },
    computed:{
        ...mapGetters('Message',['getMessages'])
    },
    methods:{
        ...mapActions('Message',['getMessageData']),
      loadMessages(){
        for(let x of this.getMessages){
          for(let y of x.data.messages){
            this.messages.push(y)
          }
        }
      }
    },
    created(){
      this.loadMessages()
    }
  }
</script>

<style scoped>
  /* General CSS Setup */
  body{
    background-color: lightblue;
    font-family: "Ubuntu-Italic", "Lucida Sans", helvetica, sans;
  }

  /* CSS talk bubble */
  .talk-bubble {
    margin: 15px;
    display: inline-block;
    position: relative;
    width: 60%;
    height: auto;
    background-color: #e8ebef
  }

  .talk-bubble-me{
    background-color: #dcf8c6
  }

  .round{
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;

  }

  .tri-right.right-in:after{
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: auto;
    right: -20px;
    top: 38px;
    bottom: auto;
    border: 12px solid;
    border-color: #dcf8c6 transparent transparent #dcf8c6;
  }

  .tri-right.left-in:after{
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: -20px;
    right: auto;
    top: 38px;
    bottom: auto;
    border: 12px solid;
    border-color: #e8ebef #e8ebef transparent transparent;
  }


  /* talk bubble contents */
  .talktext{
    padding: 1em;
    text-align: left;
    line-height: 1.5em;
  }
  .talktext p{
    /* remove webkit p margins */
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
  }


</style>
