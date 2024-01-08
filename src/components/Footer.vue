<template>
    <div class="container-fluid">
        <div class="row bg-body-secondary">
            <p class="lead fixed-bottom bg-secondary">
                Taryn-lee's Portfolio &copy;<span>{{ currYear }}</span><i class="bi bi-linkedin"></i><i class="bi bi-facebook"></i></p>
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