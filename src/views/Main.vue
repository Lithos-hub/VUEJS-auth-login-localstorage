<template>
<div class="container-fluid" id="disclaimer">

    <h1 class="display-1">
        Welcome
    </h1>

    <h3 class="display-3">Please, login or sign up to view the full website</h3>

</div>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<style>
#disclaimer {
    bottom: 50%;
    text-shadow: 0px 0px 20px rgb(39, 8, 37), 0px 0px 10px rgb(68, 9, 9);
    padding: 100px;

}

/* MOBILE RESPONSIVE */
@media only screen and (min-width: 360px) {
    .display-1 {
        font-size: 2em !important;
    }
    .display-3 {
 font-size:1em !important;
    }
}
/* LAPTOP RESPONSIVE */
@media only screen and (min-width: 767px) {
        .display-1 {
        font-size: 5em !important;
    }
    .display-3 {
 font-size: 2.5em !important;
    }
}

/* DESKTOP RESPONSIVE */
@media only screen and (min-width: 1370px) {
        .display-1 {
        font-size: 10em !important;
    }
    .display-3 {
 font-size: 5em !important;
    }
}


</style>
