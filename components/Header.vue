<template>
  <!-- <header class="c-header"> -->
  <b-navbar toggleable="md" sticky type="dark" variant="dark">
      <b-navbar-brand>
         <nuxt-link to="/" class="nav-link">MovieTok</nuxt-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
         <!-- <b-nav-form  @submit.prevent="sendData">
            <b-form-input size="sm" v-model="termino" class="mr-sm-2" placeholder="Buscar..."></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
         </b-nav-form> -->
         <!-- <b-nav-item-dropdown right> 
            <template v-slot:button-content>
               <b>User</b>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
         </b-nav-item-dropdown> -->
         <li class="nav-item">
            <nuxt-link to="/search" class="nav-link"> BUSCAR </nuxt-link>
         </li>

         <li class="nav-item">
            <nuxt-link to="/contacts" class="nav-link">Contactos</nuxt-link>
         </li>
         
         <li class="nav-item">
            <nuxt-link to="/abouts" class="nav-link">Nosotros</nuxt-link>
         </li>
        <!-- <b-nav-item href="/about">Nosotros</b-nav-item> -->
        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav> 
    </b-collapse>
  </b-navbar>
  <!-- </header> -->
</template>

<script>
export default {
   name:'header-templ',
   data(){
      return{
         termino:null
      }
   },
   methods:{
      sendData(){
         console.log('medos');
      }
   }
}
</script>

<style>

</style>