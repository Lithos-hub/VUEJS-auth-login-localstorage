<template>
<div class="container">

    <h1>Home page</h1>
    <hr class="bg-warning">

    <div class="h-100">
        <div class="jumbotron bg-transparent">
            <h1 class="display-5 text-center">This route is protected by authentication</h1>
            <h3>
                <div class="alert alert-success text-center mt-5" role="alert">
                    You logged in successfully!
                </div>
            </h3>

        </div>

    </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
    components: {

    }
}
</script>

<style>
* {

    color: rgb(255, 255, 255);

}
</style>
