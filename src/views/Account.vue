<template>
<div class="container">

    <h1>Login / Register page</h1>
    <hr class="bg-warning">

    <div class="row mt-5">

        <div class="col">
            <Login />
        </div>

        <div class="col">
            <Register />
        </div>

    </div>

</div>
</template>

<script>
import Login from '../components/Login'
import Register from '../components/Register'

export default {
    components: {
        Login,
        Register
    }
}
</script>

<style>
.container {
    height: 800px;
}
</style>
