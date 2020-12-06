<template>
<div class="card bg-transparent">
    <div class="card-body">
        <h5 class="card-title text-center">REGISTER</h5>
        <p class="card-text lead text-warning">Please register to be able to access all the content of the website</p>

        <form @submit.prevent="processForm">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control input-font" v-model.trim="email">
                <small class="form-text text-info">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Set a password</label>
                <input type="password" class="form-control input-font" v-model.trim="pass1">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Repeat the password</label>
                <input type="password" class="form-control input-font" v-model.trim="pass2">
            </div>

            <button type="submit" class="btn btn-danger btn-block" :disabled="disable">Sign up!</button>
        </form>

    </div>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex'

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            pass1: '',
            pass2: ''
        }
    },
    computed: {
        disable() {
            if (!this.email.includes('@')) {
                return true
            }
            if (this.pass1.length > 5 && this.pass1 === this.pass2) {
                return false
            }
            return true
        }
    },
    methods: {
        ...mapActions(['registerUser']),
        processForm() {
            this.registerUser({
                email: this.email,
                password: this.pass1
            })
            this.email = '';
            this.pass1 = '';
            this.pass2 = '';
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
