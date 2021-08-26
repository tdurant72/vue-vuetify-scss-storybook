<template>
  <v-app>
    <v-app-bar
      app
      flat
    >
    <Header/>
    </v-app-bar>

    <v-main>
      <Hero :cycle="cycle"/>
      <Gallery :items="items"/>
      
			<Button label="Sign Up" color="primary"/>
			<Button label="Login" color="secondary"/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Button from "./components/Button";
// import fetch from "node-fetch";

export default {
	name: "App",

	components: {
		Header,
		Hero,
		Gallery,
		Button
	},
	created() {
		// this.getImages();
	},
	data: () => ({
		cycle: true,
		hideDelimiters: false,
		items: [
			{
				id: 1,
				src: require("./assets/images/img1.jpeg")
			},
			{
				id: 2,
				src: require("./assets/images/img2.jpeg")
			},
			{
				id: 3,
				src: require("./assets/images/img3.jpeg")
			},
			{
				id: 4,
				src: require("./assets/images/img4.jpeg")
			},
			{
				id: 5,
				src: require("./assets/images/img5.jpeg")
			},
			{
				id: 6,
				src: require("./assets/images/img6.jpeg")
			},
			{
				id: 7,
				src: require("./assets/images/img7.jpeg")
			}
		]
	})
};
</script>
