<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-transparent p-5 m-auto">
    <a class="navbar-brand ml-5">Auth / Register app (Basic)</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="nav navbar-nav m-auto">
            <li class="nav-item">
                <router-link active-class="active" class="nav-link" to="/home" exact v-if="signedUser">
                    <span>Home</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link active-class="active" class="nav-link" to="/account" exact><span>Login / Register</span></router-link>

            </li>
        </ul>
    </div>
 <!-- <div class="lead" id="userSigned">
        User: {{state.user}}
    </div>

-->

    <button class="btn btn-outline-danger ml-3" v-if="signedUser" @click="signOut">Sign out</button>
</nav>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex'

export default {
    name: 'Navbar',
    computed: {
        ...mapGetters(['signedUser'])
    },
    methods: {
        ...mapActions(['signOut'])
    }
}
</script>

<style>
a {
    font-size: 20px;
    letter-spacing: 3px;
}

#userSigned {
    box-shadow: 0px 0px 5px rgb(38, 4, 23);
    background-color: rgba(46, 8, 22, 0.713);
    padding: 5px;
    margin: 3px;
    border: 1px solid rgb(46, 14, 37);
    border-radius: 5px;
}
</style>
