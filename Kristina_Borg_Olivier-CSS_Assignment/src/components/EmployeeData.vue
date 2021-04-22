<template>
  <section>
<div class="list-group">
      <a class="list-group-item list-group-item-action active" aria-current="true">
   Id Number: {{id1}}
  </a>   

  <div id="demo">
  <button class='btn btn-info' v-on:click="show = !show">
    Toggle Picture
  </button>
    <p v-if="show">

    <a v-if="id1 == ('12345Q') "  >
 <img src="/images/image1.jpg" height="130" width="130" style="border-radius: 50%"/>
 </a>
  <a v-if="id1 == ('12347S') "  >
 <img src="/images/image3.jpg" height="130" width="130" style="border-radius: 50%"/>
 </a>
  <a v-if="id1 == ('15324G') "  >
 <img src="/images/image2.jpg" height="130" width="130" style="border-radius: 50%"/>
 </a>
    </p>
  
</div>
 
  <a class="list-group-item list-group-item-action">Name: {{name1}}</a>
  
  <a  class="list-group-item list-group-item-action">Surname: {{surname1}}</a>
</div>
  </section>

</template>


<script>
export default {
    data() {
    return {
      show: true
    };
      },
 
  props: {
   
    id1:{
      type: String,
      required: true
    },
    name1: {
      type: String,
      required: true,
    },
    surname1: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
  },
  
    
    
}

</script>
<style scoped>


.list-group{
  width:90%;
}
.list-group-item.list-group-item-action.active{
    background : #58A4B0;
    border:none;
}

</style>

