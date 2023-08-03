<template>
    <div class="backdrop"> <!--backdrop - for a faded background behind the modal-->
            <div class="modal">
                <p>modal content</p>
            </div>
    </div>
</template>

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
</style>