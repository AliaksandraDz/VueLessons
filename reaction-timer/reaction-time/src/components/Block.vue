<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    click me
  </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime:  0
        }
    },
    mounted() { //each component goes through a lifecycle. when a comp is mounted to the DOM,
        //we can use a hook to access the data, events, templates. must be used in exprot
        //this function will fire only when the component is mounted in the DOM
        setTimeout(()=> { // run a function once after the interval of time
            this.showBlock = true
            this.startTimer()
        }, this.delay)
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime +=10
            }, 10) //runs the function regularly after the given interval of time.

        },
        stopTimer() {
            clearInterval(this.timer) //to stop setInterval calls
            console.log(this.reactionTime)
            this.$emit('end', this.reactionTime)
        }

    }
}
</script>

<style>
    .block{
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>