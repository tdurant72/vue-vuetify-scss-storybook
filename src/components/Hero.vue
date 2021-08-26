<template>
  <v-container>
    <div class="heroBlock">
        <v-carousel 
            :cycle="cycle" :hide-delimiters="hideDelimiters" >
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            >
            <v-row
          class="fill-height title"
          align="center"
          justify="center"
        >
          <div>
            {{ item.title }}
          </div>
        </v-row>
            </v-carousel-item>
        </v-carousel>
    </div>
  </v-container>
</template>

<script>
export default {
	name: "Hero",
	props: ["cycle", "hideDelimiters"],
	data() {
		return {
			items: [
				{
					src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
					title: "Some Title"
				},
				{
					src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
					title: "Some Other Title"
				},
				{
					src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
					title: "Some Title 3"
				},
				{
					src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
					title: "Some Title 4"
				}
			]
		};
	}
};
</script>





