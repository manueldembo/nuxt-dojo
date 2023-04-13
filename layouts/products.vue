<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container max-auto p-4">
                <NuxtLink to="/" class="font-bold">Nuxt Dojo Merch</NuxtLink>
            </nav>
        </header>

        <!--  Output the page content   -->
        <div class="container max-auto p-4">
            <slot />
        </div>

        <footer class="container max-auto p-4 flex justify-between border-t-2">
            <nav>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
            </nav>
        </footer>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>