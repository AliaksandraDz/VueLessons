<template>
    <div class="backdrop" @click.self="closeModal"> <!--backdrop - for a faded background behind the modal. .self - click event modifier, only trigger handler if event.target is the element itself, not from a child element -->
        <div class="modal" :class="{ sale: theme === 'sale'}"> <!--sale is a dynamic class, if condition is true, the class apperas-->
            <!-- slot outlet -->
            <slot>default content</slot> <!--to pass a template fragment to a child component, when content is too big for props. default contnent will appear only if we don't pass in a default slot-->
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<!--to use props in components, tell vue that it should accept props. get acces to component obj for this-->
<script>
export default ({
    props: ['theme'], // must be a string
    methods: {
        closeModal() {
            this.$emit('close') // create (emit) a custom event with the name 'close'
        }
    }
})
</script>


<!-- <style scoped> if not scoped, this style will be applied to all components. it attaches a data-v-"code" attribute to these elements, which is performance consuming -->
<style>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px; /*Add rounded corners*/
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%
    }
    .modal h1 { /* specfying selectors is a better option than scoped */
        color: #03cfb4;
        border: none;
        padding: 0;
    }
    .modal p {
        font-style: normal;
    }
    .modal .actions {
        text-align: center;
        margin: 30px 0 10px 0; /* t r b l */
    }
    .modal .actions a {
        color: black;
        padding: 8px;
        border: 1px solid white;
        text-decoration: none;
        margin: 10px;
    }
    .modal.sale {
        background: crimson;
        color: white;
    }
    .modal.sale h1 {
        color: white;
    }
    .modal.sale .actions {
        color: white;
    }
    .modal.sale .actions a {
        color: white;
    }
</style>