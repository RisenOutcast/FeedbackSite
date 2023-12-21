<template>
    <div class="feedbackItem">
        <div class="feedbackItem-top">
            <div>
                <h3>
                    <slot name="heading"></slot>
                    Testi Testman
                </h3>
                <p>testi.testman@test.org</p>
                <slot></slot>
            </div>
            <h2>4/5</h2>
        </div>
        <div class="feedbackItem-bottom">
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi
                consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.</p>
        </div>
    </div>
</template>
  
<style scoped>
.feedbackItem {
    width: 25rem;
    height: 20rem;
    padding: 1rem;
    background-color: hsla(0, 0%, 47%, 0.326);
    border-radius: 1rem;
    color: azure;
    font-family: 'Fira Code';
}

.feedbackItem-top {
    width: 23rem;
    display: flex;
    justify-content: space-between;
}

.feedbackItem-bottom {
    margin-top: 1rem;
    padding: 0.5rem;
    background-color: rgba(94, 94, 94, 0.546);
    height: 14rem;
    border-radius: 1rem;
    font-family: Verdana;
}

p {
    font-size: 0.8rem;
}
</style>
  