const app = Vue.createApp({  // it's a method in VUE object to create vue app
    // this obj is a root component. it will controll the app section
    // it will contain data and functions to react to events
    // we can also specify the component template, but it's messy:
    //template: "<h2>I am a template</h2>"
    //so this widget allowes to insert dynamic!! data
    data() {
        return {
            showBooks: true,
            title:"The Final Empire",
            author: "Brandon Sanderson",
            age: 45
        }
    },
    methods: {
        // changeTitle(title) {
            // this.title = title //this references to component itself
        // }
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount("#app") //indicate to the app which path of the page to mount this app. indicate using a selector