<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto mt-2">
                <select class="form-control" @change="select">
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
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Company name</th>
                    <th>Adress</th>
                    <th>Web site</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in count.datas " :key="index">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.company.name }}</td>
                    <td>{{ item.address.city }}</td>
                    <td>{{ item.website }}</td>
                </tr>
            </tbody>
        </table>
        <div class="text-center">
            <button @click="minus" class="btn btn-danger">prev</button>
            <span>{{ count.num }}</span>
            <button @click="puls" class="btn btn-success">next</button>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import axios from 'axios';

const select = (e) => {
    count.limit = e.target.value
    getUser()
}

const count = reactive({
    num: 1,
    limit: 1,
    datas: []
});

const puls = () => {
    count.num++
    getUser()
}
const minus = () => {
    if (count.num > 1) {
        count.num--
        getUser()
    }
}

const getUser = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users?_page=${count.num}&_limit=${count.limit}`).then(res => {
        count.datas = res.data
    })
}
getUser()
</script>
<style scoped></style>