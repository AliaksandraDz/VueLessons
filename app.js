const app = Vue.createApp({  // it's a method in VUE object to create vue app
    // this obj is a root component. it will controll the app section
    // it will contain data and functions to react to events
    // we can also specify the component template, but it's messy:
    //template: "<h2>I am a template</h2>"
    //so this widget allowes to insert dynamic!! data
    data() {
        return {
            url: 'https://aliaksandradz.github.io/React/',
            showBooks: true,
            // title:"The Final Empire",
            // author: "Brandon Sanderson",
            // age: 45,
            // x: 0,
            // y: 0
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img:'assets/1.jpg', isFav: true},
                { title: 'the way of kings', author: 'brandon sanderson', img:'assets/2.jpg', isFav: false},
                { title: 'the final empire', author: 'brandon sanderson', img:'assets/3.jpg', isFav: true},
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        // handleEvent(e, data) { //when event happens, we have access to event obj, it's the first arg in func event handler
        //     console.log(e, e.type)
        //     if (data) {
        //         console.log(data)
        //     }
        // },
        // handleMousemove(e) {
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    },
    computed: { //computed properties are dynamic and describe a value that depends on other values
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount("#app") //indicate to the app which path of the page to mount this app. indicate using a selector