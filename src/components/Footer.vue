<template>
<div class="footer fixed-bottom">
    <div class="container">

        <div class="row pt-3">

            <div class="col-12 text-center">

                <p class="lead text-info">App made with: </p>

                <i class="fab fa-vuejs"></i> and <i class="fab fa-bootstrap"></i>

                <p class="lead mt-2"> Using <span class="text-warning">LocalStorage</span></p>

            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
.footer {
    width: 100%;
    background-color: #161616;
    height: 190px;
    bottom: 0px;
    margin-top: 60px;
}

.fab {
    font-size: 50px;
}

.fa-vuejs {
    color: #00BB7C;
    margin-right: 10px;

}

.fa-bootstrap {
    color: #7952B3;
    margin-left: 10px;
}
</style>
