<template>
  <b-jumbotron header="Footer Nuxt" lead="Bootstrap v4 Components for Vue.js 2">
    <p>For more information visit website</p>
    <p>&copy javi code</p>
    <div>
      <p>Suscribe..!</p>
      <b-input-group size="sm">
         <b-form-input placeholder="Enter your email"></b-form-input>
         <template v-slot:append>
            <b-button variant="primary" href="#">suscribete</b-button>
         </template>
      </b-input-group> 
    </div>
  </b-jumbotron>
</template>

<script>
export default {

}
</script>

<style>

</style>