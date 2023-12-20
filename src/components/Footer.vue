<template>
    <div class="container">
        <div class="row">
            <p class="lead">
                Taryn-lee's Portfolio</p>
            <span>{{ currYear }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterComp',
        data() {
            return {
                currYear: new Date().getFullYear()
            } 
        }
    }
</script>

<style scoped>

</style>