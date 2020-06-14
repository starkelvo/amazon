<template>
<div>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
 <main style="margin-left:20px">
     <div class="a-spacing-large"> </div>
        <div class="container-fluid-browsing-history">
            <div class="row">
                <div class="col-sm-8 col-8">

                  <!--  BUTTONS -->
                  <h1 class="a-size-large a-spacing-none a-text-mormal">All Products</h1> 
                  <div class="a-spacing-large"> </div> 
                  <a href="#" class="a-button-buy-again">Add A New Product</a> 
                  <a href="#" class="a-button-history margin-right-10">Add A New Category</a> 
                  <a href="#" class="a-button-history margin-right-10">Add A New Owner</a> 

                 <!--  LISTINGS PAGE-->
                 </div>
                 </div>
                 </div>
                 <div class="a-spacing-large"> </div>
                 <div class="container-fluid browsing-history">
                     <div class="row">
                       <div v-for="product in products" 
                       :key="product._id" 
                       class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb">
                     <div class="history-box">
                       
                       <!-- Product image -->

                     <a href="#" class="a-link-normal">
                       <img :src="product.photo" class="img-fluid" />                    
                     </a>
                       <!-- Product title -->
                     <div class="a-spacing-top-base asin-title">
                        <span class="a-text-normal">
                         
                         <div class="p13n-sc-truncated">{{ product.title }}</div>

                         </span>
                         </div>
                          <!-- Product rating -->
                         <div class="a-row">
                          <a href="#">
                         
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          </a>
                            <span class="a-letter-space"></span>
                            <span class="a-color-tertiary a-size-small asin-reviews">(1745)</span>
                          </div>
                          <!-- Product price -->
                          <div class="a-row">
                          <span class="a-size-base a-color-price">
                           <span class="p13n-sc-price">{{ product.price }}</span>

                          </span>
                          </div>
                          <!-- Product Buttons -->
                           <div class="a-row">
                             <a href="#" class="a-button-history margin-right-10">Update</a>
                             <a href="#" class="a-button-history margin-right-10">Delete</a>
                           </div>
                          </div>
                        </div>
                          </div>

                          </div>  
 </main>
</div>
</template>

<script>
// import rating from "../components/rating.vue"
export default {
  
  // asyncData is fetching data before nuxt page finish loading on the browser for SEO purposes
  async asyncData({ $axios }){
    try {
      let response = await $axios.$get("http://localhost:5000/api/products")
      console.log(response)
      return{
        products: response.products
      }
    } catch (err) {
      
    }
  },
  // components: {
  //   rating
  // }
}

</script>

<style scoped>
.checked {
  color: orange;
}
</style>