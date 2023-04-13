<template >
    <div class="d-flex justify-content-center mt-2">
        <ul class="d-flex  gap-5">
            <li class="list-group" v-for="item in data">
                <router-link class="text-decoration-none" :to="item.href">{{ item.name }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script setup>

const props = defineProps({
    data: {
        type: Array
    }
})

</script>
<style scoped ></style>