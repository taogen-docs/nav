<template>
    <div>
        <NavStyleV2 :data="data"/>
    </div>

</template>

<script setup>
import NavStyleV1 from "./NavStyleV1.vue";
import NavStyleV2 from "./NavStyleV2.vue";

const props = defineProps(['data'])
</script>


<style module>
</style>
