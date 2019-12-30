<template>
  <div class="container">
      <h2>Orders History</h2>
  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Txn. Id</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Service</th>
    </tr>
  </thead>
  <tbody>
    <p v-if="!orders.length">No Orders :(</p>
    <tr v-for="(order,index) in orders" :key="index" v-else>
      <th scope="row">{{index}}</th>
      <td>{{order.txnId}}</td>
      <td>{{order.name}}</td>
      <td>{{order.phone}}</td>
      <td>{{order.service}}</td>
    </tr>
    
  </tbody>
</table>

      <!-- <pre>{{orders}}</pre> -->
  </div>
</template>

<script>
export default {
    name: "orders",
    data(){
      return{
        orders : [],
      }
    },
    mounted(){
      if (localStorage.getItem('orders')) {
      try {
        this.orders = JSON.parse(localStorage.getItem('orders'));
      } catch(e) {
        localStorage.removeItem('orders');
      }
    }
    }
}
</script>

<style lang="css" scoped>
.container{
  margin-top: 4%;
  height: 90vh;
  overflow-y: auto;
}
th,td{
  text-align: center;
}
table p{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>

