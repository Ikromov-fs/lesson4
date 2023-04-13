<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto mt-2">
                <select class="form-control" @change="todoLimit">
                    <option value="" selected hidden>Change limit</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
        <table class="table table-hover border mt-1">
            <thead>
                <tr>
                    <th>T/R</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item, index in todoDatas.dataTodo" :key="index">
                    <td>{{ item.id }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.body }}</td>
                </tr>
            </tbody>
        </table>
        <div class="text-center">
            <button class="btn btn-danger" @click="mius">prev</button>
            <span>{{ todoDatas.count }}</span>
            <button class="btn btn-success" @click="puls">next</button>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { reactive } from 'vue';
const todoLimit = (e) => {
    todoDatas.todolimt = e.target.value
    getTodo()
}
const todoDatas = reactive({
    dataTodo: [],
    todolimt: 1,
    count: 1,
})

const mius = () => {
    if (todoDatas.count > 0) {
        todoDatas.count--
        getTodo()
    }
}
const puls = () => {
    todoDatas.count++
    getTodo()
}

const getTodo = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${todoDatas.count}&_limit=${todoDatas.todolimt}`).then((res) => {
        todoDatas.dataTodo = res.data
    })
}
getTodo()
</script>
<style scoped></style>