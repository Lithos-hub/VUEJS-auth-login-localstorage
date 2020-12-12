<template>
<div class="footer fixed-bottom">
    <div class="container">

        <div class="row pt-3">

            <div class="col-12 text-center">

                <p class="lead text-info" id="text1">App made with: </p>

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

/*  MOBILE RESPONSIVE  */
@media only screen and (min-width: 360px) {
    .footer {
    width: 100%;
    background-color: #161616;
    height: 140px;
    bottom: 0px;
    margin-top: 60px;
}

#text1 {
    display: inline;
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

}
/* LAPTOP RESPONSIVE */
@media only screen and (min-width: 767px) {
    .footer {
    position: absolute;
    width: 100%;
    background-color: #161616;
    height: 140px;
    bottom: 0px;
}

#text1 {
    display: inline;
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

}

/* DESKTOP RESPONSIVE */
@media only screen and (min-width: 1370px) {
    .footer {
            position: absolute;
    width: 100%;
    background-color: #161616;
    height: 190px;
    bottom: 0px;

}

#text1 {
    display: block;
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

}
</style>
