<template>
  <div>
    <ul class="list">
      <li class="item" v-for="item in this.cars" :key="item.id">
        {{ item.num }}
        <span class="item-create-at">{{ $moment(item.createAt.toDate()).format("YYYY-MM-DD HH:mm") }}</span>
        <!--        <span class="item-check" v-if="item.isChecked"><i class="fas fa-check-square"></i></span>-->
        <!--        <span class="item-check" v-else-if="!item.isChecked"><i class="far fa-check-square"></i></span>-->
        <span class="item-check">
          <input type="checkbox" :checked="item.isChecked" @change="checkParking($event, item.id)">
        </span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "List",

  data() {
    return {
      cars: [],
      db: null
    }
  },

  methods: {
    getData() {
      const api = "/sdata/cars.json"
      this.$http.get(api).then((response) => {
        console.log(response.data)
        this.posts = response.data;
      })
    },
    checkParking(e, id) {
      console.log("checkParking", e.target.checked, id)

      // Create a reference to the SF doc.
      const sfDocRef = this.db.collection("car").doc(id);

// Uncomment to initialize the doc.
// sfDocRef.set({ population: 0 });

      return this.db.runTransaction((transaction) => {
        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(sfDocRef).then((sfDoc) => {
          if (!sfDoc.exists) {
            throw "Document does not exist!";
          }

          // Add one person to the city population.
          // Note: this could be done without a transaction
          //       by updating the population using FieldValue.increment()
          // var newPopulation = sfDoc.data().isChecked;

          transaction.update(sfDocRef, {isChecked: e.target.checked});
        });
      }).then(() => {
        console.log("Transaction successfully committed!");
      }).catch((error) => {
        console.log("Transaction failed: ", error);
      });
    }
  },
  created() {
    this.db = this.$firebase.firestore();
    console.log("car ", this.db.collection("car"));
    this.db.collection("car")
        // .where("isChecked", "==", false)
        .orderBy("createAt",)
        .get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        const _obj = {
          id: doc.id,
          ...doc.data()
        }
        this.cars.push(_obj)
      });
    })
    // .then(() => {
    //   this.cars.sort((a, b) => b.createAt - a.createAt)
    // });
  },
  mounted() {
    // this.getData();
  }

  // beforeRouteEnter (to, from, next) {
  //   console.log(to, from, next)
  //   // Login 컴포넌트가 화면에 표시되기 전에 수행될 로직
  //   // Login 컴포넌트는 아직 생성되지 않은 시점
  // },
  // beforeRouteUpdate (to, from, next) {
  //   // 화면에 표시된 컴포넌트가 변경될 때 수행될 로직
  //   // `this`로 Login 컴포넌트를 접근할 수 있음
  // },
  // beforeRouteLeave (to, from, next) {
  //   // Login 컴포넌트를 화면에 표시한 url 값이 변경되기 직전의 로직
  //   // `this`로 Login 컴포넌트를 접근할 수 있음
  // }
}
</script>

<style scoped>
.list {
  /*width: 100%;*/
}

.list li {
  /*padding: 5px 0px 5px 5px;*/
  /*margin-bottom: 5px;*/
  /*border-bottom: 1px solid #efefef;*/
  /*border: 1px solid #efefef;*/
  margin: 5px;
  font-size: 12px;
  background-color: var(--item-background-color);
  padding: 15px;
  border-radius: 10px;
}

ul.list li:last-child {
  border-bottom: 0px;
}

/*ul.list li:before {*/
/*  content: ">";*/
/*  display: inline-block;*/
/*  vertical-align: middle;*/
/*  padding: 0px 5px 5px 0px;*/
/*}*/

ul.list .item-create-at {
  position: absolute;
  right: 50px;
}

ul.list .item-check {
  position: absolute;
  right: 20px;
}

ul.list .item-check2 {
  position: absolute;
  right: 40px;
}

</style>
