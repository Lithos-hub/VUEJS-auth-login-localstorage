<template>
<div class="container">

    <h1>Login / Register page</h1>
    <hr class="bg-warning">

    <div class="row mt-5">

        <div class="col" id="left-col">
            <Login />
        </div>

        <div class="col" id="right-col">
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

/* MOBILE RESPONSIVE */
@media only screen and (min-width: 360px) {
    .container {
    height: 800px;
}
#left-col {
    min-width: 100%;
    margin-bottom: 50px;
}

#right-col {
    margin-bottom: 200px;
}

}
/* LAPTOP RESPONSIVE */
@media only screen and (min-width: 767px) {
    .container {
    height: 800px;
}
#left-col {
    min-width: 0%;
}
#right-col {
    margin-bottom: 0px;
}
}

/* DESKTOP RESPONSIVE */
@media only screen and (min-width: 1370px) {
    .container {
    height: 800px;
}
#left-col {
    min-width: 0%;
}
#right-col {
    margin-bottom: 0px;
}
}

</style>
