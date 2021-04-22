<template>
<transition appear name="fade">
<div class="container">
    <form @submit.prevent="submitForm">
      <h2>Member Form</h2>
      <h3>Personal Info</h3>
    <br/>
 <div class="form-group row">
        <label for="name" class="col-md-1 col-form-label">Name</label>
        <div class="col-sm-6">
          <input @blur="$v.name.$touch()" id="name" class="form-control" type="text" v-model.trim="name"/>
          <div v-if="$v.name.$error">
            <div v-for="(error, index) of $v.name.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="surname" class="col-md-1 col-form-label">Surname</label>
        <div class="col-sm-6">
          <input @blur="$v.surname.$touch()" id="surname" class="form-control" type="text" v-model.trim="surname"/>
          <div v-if="$v.surname.$error">
            <div v-for="(error, index) of $v.surname.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="age" class="col-md-1 col-form-label">Date Of Birth</label>
        <div class="col-sm-6">
          <input @blur="$v.age.$touch()" id="age" class="form-control" type="date" v-model.trim="age"/>
          <div v-if="$v.age.$error">
            <div v-for="(error, index) of $v.age.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="gender" class="col-md-1 col-form-label">Gender</label>
        <div class="col-sm-6">
          <select @blur="$v.gender.$touch()" id="gender" name="gender" class="form-control" v-model.trim="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <div v-if="$v.gender.$error">
            <div v-for="(error, index) of $v.gender.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
            <div class="form-group row">
        <label for="idno" class="col-md-1 col-form-label">ID Number</label>
        <div class="col-sm-6">
          <input @blur="$v.idno.$touch()" id="idno" class="form-control" type="text" v-model.trim="idno"/>
          <div v-if="$v.idno.$error">
            <div v-for="(error, index) of $v.idno.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
                  <div class="form-group row">
        <label for="nationality" class="col-md-1 col-form-label">Nationality</label>
        <div class="col-sm-6">
              <select @blur="$v.nationality.$touch()" id="nationality" name="nationality" class="form-control" v-model.trim="nationality">
            <option value="Malta">Malta</option>
            <option value="Gozo">Gozo</option>
          </select>
          <div v-if="$v.nationality.$error">
            <div v-for="(error, index) of $v.nationality.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
      <h3>Contact Info</h3>
            <div class="form-group row">
        <label for="mobile" class="col-md-1 col-form-label">Mobile</label>
        <div class="col-sm-6">
          <input @blur="$v.mobile.$touch()" id="mobile" class="form-control" type="text" v-model.number="mobile"/>
          <div v-if="$v.mobile.$error">
            <div v-for="(error, index) of $v.mobile.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
            <div class="form-group row">
        <label for="email" class="col-md-1 col-form-label">Email</label>
        <div class="col-sm-6">
          <input @blur="$v.email.$touch()" id="email" class="form-control" type="email" v-model.trim="email"/>
          <div v-if="$v.email.$error">
            <div v-for="(error, index) of $v.email.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
      
         <div class="form-group row">
        <label for="pass" class="col-md-1 col-form-label">Password</label>
        <div class="col-sm-6">
          <input type="password" @blur="$v.pass.$touch()"  id="pass" class="form-control" v-model.trim="pass" autocomplete="off">
          <div v-if="$v.pass.$error">
            <div v-for="(error, index) of $v.pass.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
<!--
 <div class="form-group row">
        <label for="repeatPassword" class="col-md-1 col-form-label">Confirm Password</label>
        <div class="col-sm-6">
          <input type="text" @blur="$v.repeatPassword.$touch()"  id="repeatPassword" class="form-control"  v-model.trim="repeatPassword" autocomplete="off">
          <div v-if="$v.repeatPassword.$error">
            <div v-for="(error, index) of $v.repeatPassword.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>

        </div>
      </div>
   -->
      <h3>Player Info</h3>

          <div class="form-group row">
        <label for="club" class="col-md-1 col-form-label">Club</label>
        <div class="col-sm-6">
          <select @blur="$v.club.$touch()" id="club" name="club" class="form-control" v-model.trim="club">
            <option value="VLT">Valletta</option>
            <option value="BKR">Birkirkara</option>
            <option value="FLR">Floriana</option>
          </select>
          <div v-if="$v.club.$error">
            <div v-for="(error, index) of $v.club.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
          <div class="form-group row">
        <label for="status" class="col-md-1 col-form-label">Status</label>
        <div class="col-sm-6">
          <select @blur="$v.status.$touch()" id="status" name="status" class="form-control" v-model.trim="status">
            <option value="Active">Active</option>
            <option value="InActive">InActive</option>
          </select>
          <div v-if="$v.status.$error">
            <div v-for="(error, index) of $v.status.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>

    <div class="form-group row">
        <label for="confirm" class="col-md-3 col-form-label">Agree to terms?</label>
      <div class="col-sm-1">
        <input id="confirm" class="form-control" type="checkbox" v-model.trim="confirm"/>
      </div>
    </div>
   

      <div class="form-group row">
      <button @click="back" type="button" class="btn btn-secondary">Back</button>   
      
 
      <button data-toggle="modal" data-target="#myModal"  type="submit" id= 'submit' :disabled="$v.$invalid || !confirm"  class="btn btn-info">Submit</button>   
      <!--<div v-if="$v.$anyError" class="text-danger">Please fill in all fields correctly.</div>-->
  </div>
  </form>
</div>
   </transition>
<!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <!--<div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Firebase Example</h4>
        </div>-->
        <div class="modal-body">
          <p v-if="updateMode!==true">New member stored in Firebase</p>
          <p v-else>Member Updated in Firebase</p>
        </div>
        <div class="modal-footer">
          <button type="button" @click="afterModal" class="btn btn-info" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>  

</template>

<script>
import { required, minLength, maxLength, alpha, numeric, email, alphaNum,  } from '@vuelidate/validators'
export default {
  //emits: ['set-data'],
  data() {
    return {
      name: '',
      surname: '',
      age: '',
      gender: '',
      idno: '',
      mobile: '',
      email: '',
      pass: '',
     // repeatPassword:'',
      nationality: '',
      club: '',
      status: '',
      confirm: '',
      memId: '',
      updateMode: false
      
    };
  },
  validations(){
    return{
      name:{required, minLength: minLength(4), maxLength: maxLength(15), alpha},
      surname:{required, minLength: minLength(4), maxLength: maxLength(15), alpha},
      age:{required},
      gender:{required},
      idno: {required, alphaNum},
      mobile: {required, numeric,minLength: minLength(8), maxLength: maxLength(8)},
      email:{email,required},
      pass:{required,minLength: minLength(3)} ,
     // repeatPassword:{required},
      nationality: {required, minLength: minLength(4), maxLength: maxLength(15), alpha},
      club: {required},
      status: {required},
      confirm:{required}
    }
  },
  methods: {

    afterModal(){
      this.$router.push('/');
    },

    back(){
      this.$router.back();
    },

   
    async submitForm() {
      this.$v.$touch();
      //we will submit only if the form does not contain anything invalid
      if(!this.$v.$invalid){

        if(this.updateMode == false){

          const response = await fetch("https://css-test-1-default-rtdb.europe-west1.firebasedatabase.app/contact.json",{
            method: 'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify({
              name:this.name,
              surname:this.surname,
              age:this.age,
              gender:this.gender,
              idno:this.idno,
              mobile:this.mobile,
              email:this.email,
              pass:this.pass,
              repeatPassword:this.repeatPassword,
              nationality:this.nationality,
              club:this.club,
              status:this.status,
              confirm:this.confirm
            })
          })
          if(!response.ok)
          {
            console.log("Something went wrong");
          }


      }  
      else{

          const response = await fetch('https://css-test-1-default-rtdb.europe-west1.firebasedatabase.app/contact/' + this.memId + '.json',{
            method: 'PUT',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify({
              name:this.name,
              surname:this.surname,
              age:this.age,
              gender:this.gender,
              idno:this.idno,
              mobile:this.mobile,
              email:this.email,
              pass:this.pass,
              repeatPassword:this.repeatPassword,
              nationality:this.nationality,
              club:this.club,
              status:this.status,
              confirm:this.confirm
            })
          })
          if(!response.ok)
          {
            console.log("Something went wrong");
          }


      }

    }
    },

    async getUserData(id){
      try{
        console.log("In get user data method: " + id);
        const response = await fetch('https://css-test-1-default-rtdb.europe-west1.firebasedatabase.app/contact/' + id + '.json',{
        method: 'GET'
      })
        const responseData = await response.json();
        console.log("Getting data of one member " + responseData.stringify);
        //assign values to properties
      }catch(error){
            console.log(error);
      }
    }
  },
  

 
  created(){
    //console.log("Yo yo" + this.$route.params.memberId);
    if(typeof this.$route.params.memberId !== 'undefined'){
      console.log("Hey" + this.$route.params.memberId);
      //console.log(this.$route);
      const memId = this.$route.params.memberId;
      this.updateMode = true;
      this.memId = memId;
      //if no id user will add a member. If there is an id user will update so we need to populate form with data
      if(memId!==''){
        this.getUserData(memId);
      }
    }
  }
  
};
</script>

<!--The style block with the scoped attribute will overwrite the global 
styles and will effect this component only. -->
<style scoped>
form{
  width:100%;
  padding:5px;
  margin: auto;
  text-align: left;
}
h3{

  text-align: left;
}

button{ 
  margin: 10px;
}
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s ease;
  }
  .fade-enter-from, .fade-leave-to  {
    opacity: 0;
  }

</style>