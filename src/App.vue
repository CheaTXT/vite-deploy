<template>
  <div class="content">
    <div class="row1">
      <Category
        v-for="category in store.categories"
        :key="category.id"
        :image="category.image"
        :bgColor="category.color"
        :name="category.name"
        :group="category.group"
      />
    </div>

    <div class="row2">
      <Promotion
        
      />
    </div>
  </div>
</template>

<script>
import Button from "./components/Button.vue";
import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";

import { useStore } from "./stores/store";
export default {
  name: "App",
  components: {
    Button,
    Category,
    Promotion,
  },
  data() {
    return {
      promotion1: new URL("./assets/images/Cms-04 1.png", import.meta.url),
    }
  },
  setup() {
    const store = useStore();
    return { store };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap");
.content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.row1 {
  display: flex;
  justify-content: space-between;
}
.row2 {
  display: flex;
  gap: 10px;
}
</style>
