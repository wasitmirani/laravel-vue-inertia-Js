<template>
<div class="flex flex--column flex--align-center flex--justify-center">
    <div class="logos">
        <img src="" width="240" alt="" />
        <img src="" width="240" alt="" />
    </div>

    <div class="title">
        <h1 class="vue">Vue 3</h1>

        <h1 class="plus">+</h1>
        <h1 class="laravel">Laravel 8</h1>
    </div>

    <router-view />
</div>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.");
    },
};
</script>
