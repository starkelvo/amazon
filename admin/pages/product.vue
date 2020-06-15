<template>
<div>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <main>
        <div class="contaner-fluid">
         <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
           <div class="a-section">
               <div class="a-spacing-top-medium">
               <h2 style="text-align: center">Add a New Product</h2>
               <form action="">
                   <!--Category  Dropdown -->
                 <div class="a-spacing-top-medium"></div>
                 <label for="">Category</label>
                  <select class="a-select-option" v-model="categoryID">
                  <option 
                  v-for="category in categories" 
                  :value="category._id" 
                  :key="category._id"
                  >{{ category.type }}</option>
                  </select>
               </form>
               </div>
               <!--Owner  Dropdown -->
               <div class="a-spacing-top-medium">
                 <form>
                 <label for="">Owner</label>
                  <select class="a-select-option" v-model="ownerID">
                  <option 
                  v-for="owner in owners" 
                  :value="owner._id" 
                  :key="owner._id"
                  >{{ owner.name }}</option>
                  </select>
               </form>
               </div>

               <!-- Title input-->
               <div class="a-spacing-top-medium">
                   <label for="" style="margin-bottom: 0px"> Product Title  </label>
                   <input type="text" class="a-input-text" style="width: 100%" v-model="title">
               </div>
               <!--Product Price input-->
               <div class="a-spacing-top-medium">
                   <label for="" style="margin-bottom: 0px"> Price </label>
                   <input type="number" class="a-input-text" style="width: 100%" v-model="price">
               </div>
                <!--StockQuantity input-->
               <div class="a-spacing-top-medium">
                   <label for="" style="margin-bottom: 0px"> stock Quantity </label>
                   <input type="number" class="a-input-text" style="width: 100%" v-model="stockQuantity">
               </div>
               <!--Product Description input-->
               <div class="a-spacing-top-medium">
                   <label for="" style="margin-bottom: 0px"> Product Description  </label>
                   <textarea placeholder="Provide detailed description of your products" 
                   style="width: 100%"
                   v-model="description"
                   ></textarea>
               </div>
               <!--Photo file-->
               <div class="a-spacing-top-medium">
                   <div class="a-row- a-spacing-top-medium">
                    <label style="margin-top: 0px">Add Product Image </label>
                    <div class="a-row- a-spacing-top-medium"></div>
                        <label for="" class="chosefile-button">
                    <!-- <span class="fas fa-plus"></span> -->
                    <input type="file" @change="this.onFileSelected"/>
                    <p style="margin-top:10px">{{fileName}}</p>
                    </label>
                   </div>
               </div>
                <!--Button-->
               <hr>
               <div class="a-spacing-top-large">
                   <span class="a-button-register">
                       <span class="a-button-inner-text" @click="onAddProduct" style="width: 100px">Add Product </span>
                   </span>
               </div>
           </div>

          </div>
          <div class="col-sm-3"></div>

         </div>


        </div>
    </main>
</div>
</template>

<script>
export default {
    async asyncData({ $axios }){
        try {
            let categories = $axios.$get('http://localhost:5000/api/categories')
        let owners = $axios.$get('http://localhost:5000/api/owners')
        const [catResponse, ownerResponse] = await Promise.all([categories, owners])
        console.log(catResponse)
        return{
            categories: catResponse.categories,
            owners: ownerResponse.owners
        } } catch (err) {
        
        }
        
    },
    data(){
     return{
         categoryID: null,
         ownerID: null,
         title: "",
         price: 0,
         description: null,
         selectedFile: null,
         fileName: "",
         stockQuantity: 1

     }
    },
    methods:{
        onFileSelected(event){
        this.selectedFile = event.target.files[0]
        console.log(this.selectedFile)
        this.fileName = event.target.files[0].name
        },
        async onAddProduct(){
            let data = new FormData()
            data.append("title", this.title)
            data.append("price", this.price)
            data.append("description", this.description)
            data.append("ownerID", this.ownerID)
            data.append("categoryID", this.categoryID)
            data.append("photo", this.selectedFile, this.selectedFile.name)
            data.append("stockQuantity", this.stockQuantity)

            let result = await this.$axios.$post("http://localhost:5000/api/products", data)

            this.$router.push("/")

        }
    }
}
</script>
<style scoped>

</style>