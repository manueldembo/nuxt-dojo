import { Link } from "./.nuxt/components";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        head: {
            title: "Nuxt Dojo",
            meta: [
                { name: "description", content: "Everything about Nuxt 3"}
            ],

            link: [
                {rel: "stylesheet", href: '#'}
            ]
        }
    }
})
