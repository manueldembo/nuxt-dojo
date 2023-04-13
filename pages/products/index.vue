<template>
    <div>
        <div class="grid grid-cols-5 gap-5">
            <div v-for="p in products" :key="p.id">
                <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    definePageMeta({
        layout: `products`
    })

    const { data: products } = Promise.resolve(useFetch('https://fakestoreapi.com/products'));
</script>

<style scoped>

</style>