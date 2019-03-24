<template>
    <div class="submitSuccess">
        <div class="submitRight">
            <img src="../assets/reflect2.png" alt="reflect">
            <img src="../assets/right.png" alt="right">
        </div>
        <p>提交成功</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .submitSuccess {
        width: 6.9rem;
        height: 4.18rem;
        border-radius: 0.1rem;
        border: 0.02rem solid #073b79;
        background-color: #fbfdff;
        margin-top: 2.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        box-sizing: border-box;
        padding-top: 0.67rem;
    }
    .submitRight {
        width: 2.02rem;
        height: 2.02rem;
        background-color: #9bc2ff;
        border-radius: 50%;
        border: 0.02rem solid #073b79;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .submitRight img:nth-child(1) {
        width: 0.55rem;
        height: 0.47rem;
        position: absolute;
        left: 0.2rem;
        top: 0.2rem;
    }
    .submitRight img:nth-child(2) {
        width: 0.91rem;
        height: 0.65rem;
        position: absolute;
    }
    p {
        font-size: 0.44rem;
        font-family: tiaotiao;
        color: #073b79;
        width: 100%;
        text-align: center;
    }
</style>