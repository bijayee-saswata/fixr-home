<template>
  <section>
    <div class="order row" @click="toggle = !toggle">
      <div class="serviceImage col-md-2 col-xs-6">
        <img :src="order.serviceDetails.img" alt="Image" />
      </div>
      <div class="col-md-7 col-xs-6">
        <div class="details col-md-4 col-xs-12">
          <span>{{order.serviceDetails.name}}</span>
        </div>
        <div class="price col-md-4 col-xs-12">₹ {{order.serviceDetails.price}}</div>
        <div class="status col-md-4 col-xs-12">
          <span v-if="order.responseStatus == 'none'" class="initiated">
            <i class="fa fa-hourglass-start" aria-hidden="true"></i> Initiated
          </span>
          <span v-if="order.responseStatus == 'accepted'" class="processing">
            <i class="fa fa-hourglass-half" aria-hidden="true"></i> Processing
          </span>
          <span v-if="order.responseStatus == 'delivered'" class="delivered">
            <i class="fa fa-hourglass-end" aria-hidden="true"></i> Delivered
          </span>
          <span v-if="order.responseStatus == 'rejected'" class="cancelled">
            <i class="fa fa-hourglass-start" aria-hidden="true"></i> Cancelled
          </span>
        </div>
      </div>
      <div class="date col-md-3 col-xs-12">
        <span>{{order.transactionDate.toDate()}}</span>
      </div>
    </div>
    <hr />
    <div class="orderDetails row" v-if="toggle">
      <div class="col-md-3 col-xs-12 serviceAddress">
        <h5>Address</h5>
        <div class="content">
          <p>{{`${order.serviceAddress.name}, ${order.serviceAddress.phone}`}}</p>
          <p>{{`${order.serviceAddress.areaAndStreet}, ${order.serviceAddress.locality}, ${order.serviceAddress.pincode}`}}</p>
        </div>
      </div>
      <div class="col-md-3 col-xs-12 serviceDateTime">
        <h5>Service Date-Time</h5>
        <div class="cont">
          <span>{{order.serviceDateandTime}}</span>
        </div>
      </div>
      <div class="col-md-3 col-xs-12 paymentMode">
        <h5>Payment Mode</h5>
        <div class="content">
          <span>{{order.paymentMode}}</span>
        </div>
      </div>
      <div class="col-md-3 col-xs-12 deliveredBy">
        <h5>Delivered By</h5>
        <div class="content">
          <p
            v-if="order.responseStatus == 'accepted'"
          >{{`${order.delivery.name}, ${order.delivery.phone}`}}</p>
          <p v-if="order.responseStatus=='rejected'">{{order.delivery.msg}}</p>
          <p v-if="order.responseStatus=='none'">Yet to be delivered.</p>
          <p v-if="order.responseStatus=='delivered'">Delivered</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OrderList",
  data() {
    return {
      toggle: false
    };
  },
  props: {
    order: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.order {
  text-align: center;
  padding: 1em;
  cursor: pointer;
}
.serviceImage img {
  width: 5em;
  height: 3.5em;
}
.price {
  padding: 0;
}
.initiated {
  color: blue;
}
.processing {
  color: orange;
}
.delivered {
  color: green;
}
.cancelled {
  color: red;
}
.pagination button {
  margin: 1em;
}
.orderDetails h5 {
  font-weight: 600;
}
@media (max-width: 570px) {
  .order {
    display: block;
  }
}
</style>