<template>
    <div>
     <div class="container-fluid c-section">
         <div class="row">
          <div class="col-sm-3"></div>
          <div class="colum-sm-6">
              <div class="a-space-top-medium"></div>
              <h2>Add New Category</h2>
              <form action="">
                  <div class="a-space-top-medium">
                      <label for="">Type</label>
                      <input class="a-input-text" style="width:100%" v-model="type"/>
                  </div>
                   <!--Button-->
               <hr>
               <div class="a-spacing-top-large">
                   <span class="a-button-register">
                       <span class="a-button-inner-text" @click="onAddCategory" 
                       style="width: 20%">Add Category </span>
                   </span>
               </div>
              </form><br>
              <ul class="list-group-item">
               <li v-for="category in categories" :key="category._id" >{{ category.type }}</li>

              </ul>
          </div>
          <div class="colum-sm-3"></div>
         </div>
     </div>

    </div>
</template>

<script>
export default {
    async asyncData({ $axios }){
     try {
         let response = $axios.$get("http://localhost:5000/api/categories")
         return{
             categories: response.categories
         }
     } catch (err) {
         console.log(err)
     }
    },
    data(){
        return{
            type: ""
        }
    },
    methods: {
    async onAddCategory(){
        try {
            let data = {type: this.type}
       let response = await this.$axios.$post("http://localhost:5000/api/categories", 
       data       
       )
        } catch (err) {
           console.log(err) 
        }
     }
    }
}
</script>