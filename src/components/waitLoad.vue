<template>
    <div class="waitload">

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    @keyframes wait{
        0% {
            transform: rotate(0);
        } 
        100% {
            transform: rotate(360deg);
        }
    }
    .waitload {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        position: absolute;
        align-self: center;
        background-color: transparent;
        opacity: 0.5;
        border-top: 0.15rem solid #294669;
        border-left: 0.15rem solid #666666;
        border-right: 0.15rem solid #666666;
        border-bottom: 0.15rem solid #666666;
        animation-name: wait;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
</style>