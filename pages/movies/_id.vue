<template>
<section class="container">
   <article>
      <!-- <h4>Mi pelicula</h4> -->
      <div class="mt-4" v-if="movie != ''">
         <b-card :img-src="movie.Poster" bg-variant="dark" 
                  :img-alt="movie.Title" img-left class="mb-3 card-custom  text-align-left">
            <b-card-title>{{movie.Title}}</b-card-title>
            <b-card-text>{{movie.Plot}}</b-card-text>
            <div class="data-cards">
               <p>
                  <em>Genero: </em><b>{{movie.Genre}}</b>
               </p>
               <p>
                  <em>Lanzamiento: </em><b>{{movie.Released}}</b>
               </p>
               <p>
                  <em>Idioma: </em><b>{{movie.Language}}</b>
               </p>
               <p>
                  <em>Duración: </em><b>{{movie.Runtime}}</b>
               </p>
               <p>
                  <em>Producción: </em><b>{{movie.Production}}</b>
               </p>
            </div>
            <!-- {{movie.Writer}} -->
         </b-card>
      </div>
   </article>
</section>
</template>

<script>
export default {
   name:'show-all',
   data(){
      return{
         movie:[]
      }
   },
   asyncData({app, params}){ 
      if(params){
         let Key = 'apikey=e5b8a5a3'
         let URLAPI = `http://www.omdbapi.com/?i=${params.id}&${Key}`
         return app.$axios.$get(URLAPI)
            .then(r => {
               return{
                  movie : r
               }
            })
      }
   },
   head () {
    return {
      title: this.movie.Title,
      meta: [
        {
           hid: 'description',
           name: 'description',
           content: this.movie.Plot
        },
        {
           hid: 'image', 
           property: 'og:image',
           content: this.movie.Poster
        }
      ]
    }
   }
}
</script>

<style> 
</style>