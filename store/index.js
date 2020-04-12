
// export default new Vuex.Store({
//    // strict: process.env.NODE_ENV !== 'production',
//    state:{},
//    mutations:{}
// })

export const state = () => ({
   termino: ''
})

export const mutations = {
   SET_TERMINO(state, termino){
      state.termino = termino
   }
}
 