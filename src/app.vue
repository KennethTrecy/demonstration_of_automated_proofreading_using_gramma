<template>
	<p>{{ message }}</p>
</template>

<style lang="scss">
@import "./index";
</style>

<script setup lang="ts">
import { ref } from "vue";

const message = ref("Hello World!");

</script>
