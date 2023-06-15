<!--
<VFSHeader />
Copyright (c) 2022-2023. Kibble Game Studios Inc. All Rights Reserved.
-->
<script setup>

    import { useInfoStore } from '@/stores/infoStore.js'

    const infosTore = useInfoStore();

    const subtitle = "PG24Pedro";

    const props = defineProps({
        title:String
    })


</script>
<template>

    <section>
        <div class="title item">
            <h1>{{ infoStore.name }}</h1>
            <h4>{{ subtitle }} {{ infoStore.version }}</h4>

        </div>
        <slot class="item"></slot>
    </section>

</template>
<style scoped>
    .title h1, .title h4 {
        float:right;
        margin-right: 2vw;
        text-align:right;
        width: 100%;
    }

    .logo {
        display: block;
        margin: 0 auto 2rem;
    }

    @media (min-width: 1024px) {
        .logo {
            margin: 0 2rem 0 0;
        }
    }
</style>