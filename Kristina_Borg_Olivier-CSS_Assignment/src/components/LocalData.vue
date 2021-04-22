<template>
  <transition appear name="fade">
    <section>
      <header>
        <h1>Employee Data</h1>
      </header>
      <ul>
        <employee-list
          v-for="employee in employees"
          :key="employee.key"
          :id1="employee.id1"
          :name1="employee.name1"
          :surname1="employee.surname1"
          :imageUrl="employee.imageUrl"
        ></employee-list>
        
      </ul>
          <div class= "back">
    <button @click="back" type="button" class="btn btn-secondary">Back</button> 
    </div>
    </section>
  </transition>
  
</template>

<script>
export default {
  data() {
    return {
      employees: [
        {


          id1: "12345Q",
          name1: "Ray",
          surname1: "Bugeja",
          imageUrl:"/images/image1.jpg"
        
        },
        {

          id1: "12347S",
          name1: "Alison",
          surname1: "Farugia",
          imageUrl: "/images/image1.jpg"
          
        },
         {

          id1: "15324G",
          name1: "Chris",
          surname1: "Borg",
          imageUrl: "/images/image1.jpg"
          
        },
      ],
    };
  },
       methods:{


    back(){
      this.$router.back();
    },
   },


}

  </script>

<style scoped>
  .back{
    margin: 2rem;
    padding: 1rem;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s ease;
  }
  .fade-enter-from, .fade-leave-to  {
    opacity: 0;
  }
</style>