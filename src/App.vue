<template>
    <div id="app">
        <transition name="fade">
            <component 
                :is="info.currentComponent" 
                :info.sync="info" 
            ></component>
        </transition>
        <p><strong>©</strong>&nbsp;红岩网校工作站</p>
    </div>
</template>
<script>
import preStorage from './components/preStorage.vue'
import preStorageSuccess from './components/preStorageSuccess'
import submitSuccess from './components/submitSuccess'
import message from './components/message'
import waitLoad from './components/waitLoad'

export default {
    components: {
        preStorage,
        preStorageSuccess,
        submitSuccess,
        message,
        waitLoad
    },
    data() {
        return {
            info: {
                message: {
                    ticket: "",
                    name: ""
                },
                currentComponent: "",
            }
        }
    },
    mounted() {
        this.axios.post(`${window.g.apiUrl}cetsearch/message/preset/get`)
            .then(res =>{
                let message = res.data.data;
                if(message.username.length === 0) {
                    this.info.currentComponent = "preStorage"
                } else {
                    this.info.currentComponent = "message"
                    this.info.message.ticket = message.admission_card_id;
                    this.info.message.name = message.username;
                }
            })
            .catch(err =>{
                alert("请求超时");
                console.log(err);
                this.info.currentComponent = "preStorage";
            })
    }
};
</script>

<style scoped>
    #app {
        width: 100vw;
        height: 100vh;
        background-color: #c2daff;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    #app p {
        align-self: flex-end;
        position: relative;
        bottom: 0.20rem;
        font-size: 0.2162rem;
        color: #3768b5;
        letter-spacing: 0.03rem;
        font-family: "PingFangSC-Regular", sans-serif;
    }
    #app p strong {
        font-size: 0.2588rem;
    }
    .fade-enter-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
