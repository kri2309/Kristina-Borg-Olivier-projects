<template>
<transition appear name="fade">
  <section v-if="this.results.length">
    <table class="table">
  <thead>
 <tr>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">ID Number</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Nationality</th>
      <th scope="col">Club</th>
      <th scope="col">Status</th>
    
    </tr>
  </thead>
  <tbody>
 
    <tr v-for="res in results" :key="res.id">
      <td>{{res.name.toUpperCase()}}</td>
      <td>{{res.surname.toLowerCase()}}</td>
      <td>{{res.age}}</td>
      <td>{{res.gender}}</td>
      <td>{{res.idno}}</td>
      <td>{{"+356 "+res.mobile}}</td>
      <td>{{res.email}}</td>
      <td>{{res.pass}}</td>
      <td>{{res.nationality}}</td>
      <td>{{res.club.substr(0.3)}}</td>
      <td>{{res.status}}</td>
      
      <td><button @click="updateMember(res)" class='btn btn-info'>Update</button></td> 
         <td><button data-toggle="modal" @click="updateRes(res)" data-target="#myModal" type="submit"  class='btn btn-info'>Delete</button></td>
    </tr>
  </tbody>
</table>

  </section>
</transition>
  <section v-if="!this.results.length">
No Members Yet
  </section>
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      
      <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Warning</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
          <div class="modal-body">
        <p>Are you sure you want to delete member?</p>
      </div>
      <div class="modal-footer">
        <button type="button" @click="deleteMember(res)"  data-dismiss="modal" class='btn btn-info'>Delete</button>
        <button type="button" class="btn btn-info" data-dismiss="modal">No</button>
        
        
      </div>
      </div>
       
    </div>
   
  </div> 
  
  <div class = "back" >
  <button @click="back" type="button" class="btn btn-info">Back</button> 
  </div>
</template>

<script>

export default {
  data(){
    return{
      results: [],
      res: ''
    };
  },
 methods:{


    back(){
      this.$router.back();
    },


    updateMember(member){
      console.log(member);
      const memId = member.id;
      this.$router.push('/addMember/' + memId);
    },

    updateRes(r){
      this.res =r;
    },

    async deleteMember(member){

      console.log(member);
  
      console.log(this.res);
      const memId = this.res.id;

          const response = await fetch('https://css-test-1-default-rtdb.europe-west1.firebasedatabase.app/contact/' + memId + '.json',{
            method: 'DELETE',
            headers:{
              'Content-Type':'application/json'
              
            },
          })
          if(!response.ok)
          {
            console.log("Something went wrong");
          }
          else{
            console.log("Deleted");
             //this.$router.push('/');
             this.getData();
          }
          



    },
    async getData(){
      console.log("Getting data");
      
      try{
      const response = await fetch("https://css-test-1-default-rtdb.europe-west1.firebasedatabase.app/contact.json",{
        method: 'GET'
      })
        const responseData = await response.json();
        if(!response.ok){
              console.log("Something went wrong") 
        }
        const results = [];
        for (const id in responseData){
          results.push({
            id:id,
            name: responseData[id].name,
            surname:responseData[id].surname,
            age: responseData[id].age,
            gender: responseData[id].gender,
            idno: responseData[id].idno,
            mobile:responseData[id].mobile,
            email:responseData[id].email,
            pass:responseData[id].pass,
            nationality:responseData[id].nationality,
            club:responseData[id].club,
            status:responseData[id].status,
            confirm:responseData[id].confirm
          });  
          this.results = results;
        }
        this.$router.push('/'); 
      }catch(error){
        console.log(error);
      }
      
    },
  },
  //when component is fully initialised call method
  mounted(){
      this.getData();
  }
}
</script>


<style scoped>

   .fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s ease;
  }
  .fade-enter-from, .fade-leave-to  {
    opacity: 0;
  }
.back{

margin: 2rem;
  padding: 1rem;
}
section {
  margin: 2rem auto;
  width: 90%;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
table{ 
  width: 100%; 
  border-collapse: collapse; 
}
td, th { 
  padding: 6px; 
  border: 1px solid #ccc; 
  text-align: left; 
}
@media 
only screen and (max-width: 1300px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}
	
	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
	
	/*
	Label the data
	*/
	td:nth-of-type(1):before { content: "Name"; }
	td:nth-of-type(2):before { content: "Surname"; }
	td:nth-of-type(3):before { content: "Age"; }
	td:nth-of-type(4):before { content: "Gender"; }
	td:nth-of-type(5):before { content: "ID Number"; }
	td:nth-of-type(6):before { content: "	Mobile"; }
	td:nth-of-type(7):before { content: "	Email"; }
	td:nth-of-type(8):before { content: "	Password"; }
	td:nth-of-type(9):before { content: "	Nationality"; }
	td:nth-of-type(10):before { content: "Club"; }
  td:nth-of-type(11):before { content: "Status"; }
   td:nth-of-type(12):before { content: "Confirm"; }


}


</style>