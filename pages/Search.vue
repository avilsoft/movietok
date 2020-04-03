<template>
  <div class="container">
      <div>
         <div class="row">
            <div class="col-12">
               <h3>Busqueda</h3>
               <form @submit.prevent="sendData" class="form-s">
                  <input v-model="termino" type="search" placeholder="Buscar...">
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
               </form> 
            </div>
         </div>
         <div class="row">
            <div class="col-3 col-md-3 col-sm-6" v-for="(movie, index) in movies" :key="index">
               <b-card
                  bg-variant="dark" text-variant="white"
                  :img-src="movie.Poster"
                  :img-alt="movie.Title"
                  img-top
                  tag="article" 
                  class="mb-2 card-extra">
                  <div class="data-extra">
                     <h4>{{movie.Title}}</h4>
                     <p>
                        <small>Año: </small>
                        <b>{{movie.Year}}</b>
                     </p>
                     <b-button @click="openMovie(movie)" variant="warning">Ver más</b-button>
                  </div>
               </b-card>
            </div>
         </div>
      </div>
  </div>
</template>

<script>
export default {
   data(){
      return{
         termino:null,
         movies:[]
      }
   },
   methods:{
      openMovie(movie){
         this.$router.push({
            name:'movies-id',
            params:{
               id: movie.imdbID
            }
         })
      },
      sendData(){
         let Key = 'apikey=e5b8a5a3'
         let URLAPI = `http://www.omdbapi.com/?s=${this.termino}&${Key}`
         this.$axios.$get(URLAPI)
            .then(r => {
               if(r.Search.length > 0){
                  this.movies = []
               }
               r.Search.forEach(el => {
                  setTimeout(() => {
                     this.movies.push(el)
                  }, 500);
               });
               // this.movies  = r.Search
         })
         
      }
   },
   asyncData({params, app}){
      let Key = 'apikey=e5b8a5a3'
      let URLAPI = `http://www.omdbapi.com/?s=iron&${Key}`
      return app.$axios.$get(URLAPI)
         .then(r => {
            return{
               movies : r.Search
            }
         })
   },
 
}
</script>

<style>

</style>