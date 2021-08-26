<template>
    <v-btn
      depressed
      :color="color"
    >
      {{label}}
    </v-btn>
</template>

<script>
export default {
	name: "Button",
	props: {
		label: {
			type: String,
			required: true
		},
		primary: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: "medium",
			validator: function(value) {
				return ["small", "medium", "large"].indexOf(value) !== -1;
			}
		},
		color: {
			type: String
		}
	}
};
</script>

<style  scoped>
</style>