<template>
  <form @submit.prevent="handleSubmit"> <!--modify the default event, prevent in this case-->
    <label>Email:</label> <!--label: for Screen reader users and to increase the hit area. must be equal to the id attribute of the related element to bind them together.-->
    <input type="email" required v-model="email"> <!--required is a Boolean attribute which, if present, indicates that the user must specify a value for the input -->
    
    <label>Password:</label>
    <input type="password" required v-model="password"> <!--a two-way binding: the data from input is binded with the data from data() and gets updated in both ways-->
    <div v-if="passwordError" class="error">{{ passwordError }}</div>
    
    <label>Role:</label>
    <select v-model="role"> <!--the value in option is binded with the value in data()-->
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup.alt="addSkill"> <!--keyup - A user releases a key-->
    <div v-for="skill in skills" :key="skill" class="pill" @click="deleteSkill(skill)"> <!--To give Vue a hint so that it can track each node's identity, and thus reuse and reorder existing elements, you need to provide a unique key attribute for each item-->
      {{ skill }}
    </div>

    <div class="terms">
      <input type="checkbox" v-model="terms" required>
      <label>Accept terms and conditions</label>
    </div>

    <div class="submit"> <!--a button inside a form has an event to submit the form by default-->
      <button>Create an Account</button>
    </div>

    <!-- <div>
      <input type="checkbox" value="Shaun" v-model="names">
      <label>Shaun</label>
    </div>
    <div>
      <input type="checkbox" value="Sasha" v-model="names">
      <label>Sasha</label>
    </div>
    <div>
      <input type="checkbox" value="Mario" v-model="names">
      <label>Mario</label>
    </div> -->

  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ terms }}</p>
  <!-- <p>Names: {{ names }}</p> -->
</template>

<script>
export default {
 data() {
  return {
    email: '',
    password: '',
    role: 'designer', //default option
    terms: false,
    // names: [],
    tempSkill: '',
    skills: [],
    passwordError: ''
  }
 },
 methods: {
  addSkill(e) {
    if(e.key===',' && this.tempSkill) {
      if (!this.skills.includes(this.tempSkill)) {
        this.skills.push(this.tempSkill)
      }
      this.tempSkill = ''
    }
  },
  deleteSkill(skill) {
    // let skillIndex = this.skills.indexOf(skill);
    // if (skillIndex>0) {
    //   return this.skills.splice(skillIndex, skillIndex)
    // }
    // else {
    //   return this.skills.shift()
    // }
    this.skills = this.skills.filter((item) => {
      return skill !== item
    })
  },
  handleSubmit() {
    //validate password
    this.passwordError = this.password.length > 5 ?
    '' : 'Password must be at least 6 chars long'

    if(!this.passwordError) {
      console.log('email: ', this.email)
      console.log('password: ', this.password)
      console.log('role: ', this.role)
      console.log('skills: ', this.skills)
      console.log('terms accepted: ', this.terms)
    }
  }
 }
}
</script>

<style>
    form {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    label {
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px; /* t, r and l, b */
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input, select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box; /* padding and border are included in the width and height */
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555
    }
    input[type="checkbox"] {
      display: inline-block;
      width: 16px;
      margin: 0 10px 0 0;
      position: relative;
      top: 2px /*If position: relative; - the top property makes the element's top edge to move above/below its normal position.*/
    }
    .pill {
      display:inline-block;
      margin: 20px 10px 0 0;
      padding: 6px 12px;
      background: #eee;
      border-radius: 20px;
      font-size: 12px;
      letter-spacing: 1px; /*The letter-spacing property increases or decreases the space between characters in a text.*/
      font-weight: bold;
      color: #777;
      cursor: pointer
    }
    button {
      background: blue;
      border: 0;
      padding: 10px 20px;
      margin-top:  20px;
      color: white;
      border-radius: 20px;
    }
    .submit {
      text-align: center;
    }
    .error {
      color: #ff0062;
      margin-top: 10px;
      font-size: 0.8em;
      font-weight: bold;
    }
</style>