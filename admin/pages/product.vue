<template>
    <main>
        <div class="contaner-fluid">
         <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
           <div class="a-section">
               <div class="a-spacing-top-medium">
               <h2 style="text-align: center">Add a New Product</h2>
               <form action="">
                 <div class="a-spacing-top-medium"></div>
                 <label for="">Category</label>
                  <select class="a-select-option">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  </select>
               </form>
               </div>
               <!--Owner  Dropdown -->
               <div class="a-spacing-top-medium">
                 <form>
                 <label for="">Owner</label>
                  <select class="a-select-option">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  </select>
               </form>
               </div>
               <div class="a-spacing-top-medium">
                   <label for="" style="margin-bottom: 0px"> Product Title  </label>
                   <input type="text" class="a-input-text">
               </div>
           </div>

          </div>
          <div class="col-sm-3"></div>

         </div>


        </div>
    </main>
</template>

<script>
export default {
    
}
</script>