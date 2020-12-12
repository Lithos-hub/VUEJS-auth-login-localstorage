<template>
<div>
    <Navbar />

    <router-view />
    <Footer id="footer" />
</div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
    components: {
        Navbar,
        Footer
    }
}
</script>

<style>
body {
    font-family: 'Advent Pro', sans-serif;
}

body {
    width: 100%;
    background-image: url(assets/imgs/background.jpg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: top;

    -webkit-animation: fadein 1s;
    /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1s;
    /* Firefox < 16 */
    -ms-animation: fadein 1s;
    /* Internet Explorer */
    -o-animation: fadein 1s;
    /* Opera < 12.1 */
    animation: fadein 1s;
}

@keyframes fadein {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

#footer {
    position: fixed;
    bottom: 0px;

}
</style>
