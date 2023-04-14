<template>
    <div>
        <Head>
            <Title>Nuxt Dojo | {{ product.id }}</Title>
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>

<script lang="ts" setup>
    const { id } = useRoute().params;
    const url = `https://fakestoreapi.com/products/${id}`;


    let { data: product } = await (useFetch(url, { key: id.toString() }));

    if(!product.value) {
        throw createError({statusCode: 404, statusMessage: 'Product not found', fatal: true});
    }

    definePageMeta({
        layout: `products`
    })
</script>

<style scoped>

</style>