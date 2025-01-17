<template>
  <section id="myOrders">
    <div class="content" v-if="loggedIn">
      <div class="error" v-if="err">{{err}}</div>
      <div>
        <h2>My Orders</h2>
        <div class="panel" v-for="(order,index) in paginatedData" :key="index">
          <orderList :order="order" />
        </div>
        <div class="pagination" v-if="myOrders.length > 10">
          <button class="btn btn-primary" :disabled="pageNumber === 0" @click="prevPage">Previous</button>
          <button
            class="btn btn-success"
            :disabled="pageNumber >= pageCount -1"
            @click="nextPage"
          >Next</button>
        </div>
      </div>
    </div>
    <div class="noData" v-if="!loggedIn || myOrders.length == 0">
      <h3>Please login or order something to see your orders. &#x1F60A;</h3>
    </div>
  </section>
</template>

<script>
import { db, auth } from "../firebaseinit";
import orderList from "./OrderList";
export default {
  name: "myOrders",
  components: {
    orderList
  },
  data() {
    return {
      loggedIn: false,
      myOrders: [],
      err: "",
      pageNumber: 0,
      pageSize: 10
    };
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.myOrders.length / this.pageSize);
    },
    paginatedData() {
      const start = this.pageNumber * this.pageSize,
        end = start + this.pageSize;
      return this.myOrders.slice(start, end);
    }
  },
  created() {
    auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.loggedIn = true;
        db.collection("Orders")
          .where("userId", "==", auth.currentUser.uid)
          .orderBy("transactionDate", "desc")
          .onSnapshot(
            datas => {
              this.myOrders = [];
              datas.docs.map(data => {
                this.myOrders.push(data.data());
              });
            },
            err => {
              this.err = err;
              console.error(err);
            }
          );
      } else {
        this.loggedIn = false;
      }
    });
  }
};
</script>

<style>
#myOrders {
  width: 80%;
  margin: 0 auto;
  min-height: 90vh;
}
#myOrders h2 {
  margin-bottom: 1em;
}
.noData {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.panel {
  border: 1px solid #dbdbdb;
  border-radius: 4px;
}
</style>