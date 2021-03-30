<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h2 class="label-wrapper">
        <label for="new-todo-input" class="label__lg">
          차량 번호를 입력해주세요.
        </label>
      </h2>
      <input
          type="text"
          id="new-todo-input"
          name="new-todo"
          autocomplete="off"
          class="input__lg"
          v-model="num"
      />
      <!--    v-model.lazy.trim="label"-->
      <button type="submit" class="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  </div>
</template>

<script>
// import "firebase/firestore";

export default {
  name: "Report",
  data() {
    return {
      num: ""
    }
  },
  methods: {
    onSubmit() {
      console.log("onSubmit", this)
      console.log("this.$firebase: ", this.$firebase)

      if (!this.num) {
        alert('please check car num');
        return;
      }
      let db = this.$firebase.firestore();
      console.log("db: ", db)
      db.collection("car").add({
        num: this.num,
        memo: "",
        photo: "",
        createAt: this.$firebase.firestore.Timestamp.fromDate(new Date()),
        isChecked: false,
        checkedDate: ""
      })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('입력되었습니다.');
            this.$router.push('list')
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
    }
  }
}
</script>

<style scoped>
/* Global styles */
.btn {
  padding: 0.8rem 1rem 0.7rem;
  /*border: 0.2rem solid #4d4d4d;*/
  cursor: pointer;
  text-transform: capitalize;
}

.btn__danger {
  color: #fff;
  background-color: #ca3c3c;
  border-color: #bd2130;
}

.btn__filter {
  border-color: lightgrey;
}

.btn__danger:focus {
  outline-color: #c82333;
}

.btn__primary {
  color: #fff;
  background-color: #0288d1;
}

.btn-group {
  display: flex;
  justify-content: space-between;
}

.btn-group > * {
  flex: 1 1 auto;
}

.btn-group > * + * {
  margin-left: 0.8rem;
}

.label-wrapper {
  margin: 0;
  flex: 0 0 100%;
  text-align: center;
}

[class*="__lg"] {
  display: inline-block;
  width: 100%;
  font-size: 1.9rem;
}

[class*="__lg"]:not(:last-child) {
  margin-bottom: 1rem;
}

@media screen and (min-width: 620px) {
  [class*="__lg"] {
    font-size: 2.4rem;
  }
}

.visually-hidden {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}

[class*="stack"] > * {
  margin-top: 0;
  margin-bottom: 0;
}

.stack-small > * + * {
  margin-top: 1.25rem;
}

.stack-large > * + * {
  margin-top: 2.5rem;
}

@media screen and (min-width: 550px) {
  .stack-small > * + * {
    margin-top: 1.4rem;
  }

  .stack-large > * + * {
    margin-top: 2.8rem;
  }
}

/* End global styles */
#app {
  background: #fff;
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  padding-top: 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
}

@media screen and (min-width: 550px) {
  #app {
    padding: 4rem;
  }
}

#app > * {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

#app > form {
  max-width: 100%;
}

#app h1 {
  display: block;
  min-width: 100%;
  width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
}

.custom-checkbox > .checkbox-label {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  display: block;
  margin-bottom: 5px;
}

.custom-checkbox > .checkbox {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  height: 2.5rem;
  margin-top: 0;
  padding: 5px;
  border: 2px solid #0b0c0c;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}


.custom-checkbox {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.25;
  display: block;
  position: relative;
  min-height: 40px;
  margin-bottom: 10px;
  padding-left: 40px;
  clear: left;
}

.custom-checkbox > input[type="checkbox"] {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: -2px;
  left: -2px;
  width: 44px;
  height: 44px;
  margin: 0;
  opacity: 0;
}

.custom-checkbox > .checkbox-label {
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  display: inline-block;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  cursor: pointer;
  touch-action: manipulation;
}

.custom-checkbox > label::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 2px solid currentColor;
  background: transparent;
}

.custom-checkbox > label::after {
  box-sizing: content-box;
  content: "";
  position: absolute;
  top: 11px;
  left: 9px;
  width: 18px;
  height: 7px;
  transform: rotate(-45deg);
  border: solid;
  border-width: 0 0 5px 5px;
  border-top-color: transparent;
  opacity: 0;
  background: transparent;
}

.custom-checkbox > input[type="checkbox"]:checked + label::after {
  opacity: 1;
}

@media only screen and (min-width: 40rem) {
  label,
  input,
  .custom-checkbox {
    font-size: 19px;
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
</style>
