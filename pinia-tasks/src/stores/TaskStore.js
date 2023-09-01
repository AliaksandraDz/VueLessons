import { defineStore } from 'pinia'

//this func creates a store:
//1 arg - store name, 2 arg - obj where state is defined
export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        loading: false
        //use different stores for different types of data for convenience 
        //but we can use different types in one store if we want:
        // name: 'Sasha'
    }),
    

    //getter - a type of func (we have an obj of funcs below) which gets state or its part, also can alter what values are returned (return only favorites or only titles)
    //getters don't alter state, they just return kinda a computed property
    getters: {
        favs() {
            //to access state use this
            return this.tasks.filter(task => task.isFav)
        },
        favCount() {
            //2 decisions: mine is the 1st and better
            // return this.favs.length
            return this.tasks.reduce((sum, current) => {
                return current.isFav ? sum + 1 : sum
            }, 0)
        },
        //2 decisions: mine is the 1st and better
        // totalCount() {
        //     return this.tasks.length
        // }
        //arr funcs dont have this so pass state as a param
        totalCount: (state) => {
            return state.tasks.length
        }
    },
    //actions - to change or update state in store, it's obj
    actions: {
        async getTasks() {
            this.loading = true
            const res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()

            this.tasks = data
            this.loading = false
        },
        async addTask(task) {
            this.tasks.push(task)

            const res = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {'Content-type': 'application/json'}
            })

            if(res.error) {
                console.log(res.error)
            }
        },
        async deleteTask(id) {
            this.tasks = this.tasks.filter(task => {
                return task.id !== id
            })

            const res = await fetch('http://localhost:3000/tasks/' + id, {
                method: 'DELETE'
            })

            if(res.error) {
                console.log(res.error)
            }
        },
        async toggleFav(id) {
            const task = this.tasks.find(task => task.id === id)
            task.isFav = !task.isFav

            const res = await fetch('http://localhost:3000/tasks/' + id, {
                method: 'PATCH',
                body: JSON.stringify({ isFav: task.isFav}),
                headers: {'Content-type': 'application/json'}
            })

            if(res.error) {
                console.log(res.error)
            }
        },
    }
})