import axios from 'axios'

const state={
  messagesArr: [
    {
      status: "success",
      data: {
        messages: [
          {
            from:{
              type:"klant",
              naam:"Dilara",
              userId:"3434343434"
            },
            to:[
              {
                naam:"Qpasados",
                userId:"22222"
              },
              {
                naam:"BemiddelaarTjaban",
                userId:"111111"
              }
            ],
            message:"Hello World",
            timeSend:12345,
            fromCommunication:"mail"
          },
          {
            from:{
              type:"klant",
              naam:"Murtaza",
              userId:"213123123"
            },
            to:[
              {
                naam:"Dilara",
                userId:"3434343434"
              },
              {
                naam:"BemiddelaarTjaban",
                userId:"111111"
              }
            ],
            message:"Bye World ",
            timeSend:12346,
            fromCommunication:"mail"
          }
        ]
      }
    }
    ]

}

const mutations ={
  'GET_DOCUMENT_DATA'(state, value){
    state.messagesArr = value
  }
}

const actions ={
  getMessageData({commit}){
    // axios.get('https://communicatie-portaal.firebaseio.com/document.json')
    //   .then(response =>{
    //     const data = response.data
    //     const users = []
    //     for (let key in data){
    //       console.log('key',key)
    //       const user = data[key]
    //         console.log('skuurt',user)
    //     }
    //     console.log('getMessageData',response.data)
    //     commit('GET_DOCUMENT_DATA',response.data)
    //   })
    //   .catch(error =>{
    //     console.log(error)
    //   })
  }
}

const getters ={
  getMessages(state){
    return state.messagesArr
  }
}

export default {
  namespaced:'Message',
  state,
  mutations,
  actions,
  getters
}
