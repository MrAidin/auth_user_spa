<template>
    <div v-if="authStore.user">
        <h1>{{authStore.user.name}}</h1>
        <h2>{{authStore.user.email}}</h2>
    </div>
    <div v-else>
        Go To login
    </div>
    <h1>{{ user?.name }}</h1>
    <p>{{ user?.email }}</p>
</template>

<script setup>
import {onMounted} from "vue";
import {useAuthStore} from "../stores/auth.js";

const authStore = useAuthStore();
onMounted(async () => {
    await authStore.getUser()

});

</script>


