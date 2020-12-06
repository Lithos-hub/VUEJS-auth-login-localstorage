<template>
<div class="card bg-transparent">
    <div class="card-body">
        <h5 class="card-title text-center">LOGIN</h5>
        <p class="card-text lead text-warning">Do you already have an account with us? Enter your access data</p>

        <form @submit.prevent="processForm">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control input-font" v-model.trim="email">
                <small class="form-text text-info">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control input-font" v-model.trim="password">
            </div>

            <button type="submit" class="btn btn-success btn-block" :disabled="disable">Login!</button>

        </form>

    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapState
} from 'vuex'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        disable() {
            if (!this.email.includes('@')) {
                return true
            }
            if (this.password.length > 5) {
                return false
            }
            return true
        },
        ...mapState(['error'])
    },
    methods: {
        ...mapActions(['loginUser']),
        processForm() {
            this.loginUser({
                email: this.email,
                password: this.password
            })
            this.email = '';
            this.password = '';

        }
    }
}
</script>

<style>
.card {
    box-shadow: 0px 0px 20px rgb(38, 5, 27);
    transition: transform .2s;

}

.card:hover {
    transform: scale(1.1);
    transition: 1s;
}

.input-font {
    font-size: 20px;
    font-weight: bold;
    color: black;
}
</style>
