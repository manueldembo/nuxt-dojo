<template>
    <div>
        <h2>Product details for {{ id }}</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ad eaque nostrum necessitatibus impedit voluptates distinctio dolor, rerum laborum qui?</p>
    </div>
</template>

<script lang="ts" setup>
    const { id } = useRoute().params
</script>

<style scoped>

</style>