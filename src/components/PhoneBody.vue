<template>
    <div class="phone-body">
        <div class="feed" v-if="step===1" v-dragscroll>
            <!-- step 1 -->
            <app-post 
                v-for="(post,index) in posts"
                :key= "index"
                :post= "post"
            ></app-post>
       
        </div>
             <!-- step 2 -->
             <!-- v-dragscroll放到父容器上 -->
        <div v-if="step===2" >
            <div class="selected-image"
                :style = "{backgroundImage:'url('+image+')'}"
                :class= "selectedFilter"
            ></div>
            <div class="filter-container" v-dragscroll>
                <app-filter 
                    v-for="(filter,index) in filters"
                    :key="index"
                    :image = "image"
                    :filter = "filter"
                ></app-filter>
            </div>
        </div>
            <!-- step 3 -->
         <div v-if="step===3">
               <div class="selected-image"
                :style = "{backgroundImage:'url('+image+')'}"
                :class= "selectedFilter"
            ></div>
            <div class="caption-container">
                <textarea placeholder="Write a caption..."
                    @input="inputText"
                    :value="value"
                ></textarea>
            </div>
         </div>
    </div>
</template>

<script>
import appPost from "./PhoneBodyPost"
import appFilter from "./FilterType"
export default {
    name:"appBody",
    props:{
        posts:Array,
        filters:Array,
        image:String,
        step:Number,
        selectedFilter:String,
        value:String,
    },
    components:{
        appPost,
        appFilter,
    },
    methods:{
        inputText(e){
            this.$emit('input',e.target.value)
        }
    }
}
</script>
<style lang="scss" src="../styles/phone-body.scss">

</style>



