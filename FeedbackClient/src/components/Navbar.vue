<script setup lang="ts">
</script>

<template>
    <h1>Feedback Site</h1>
    <div class="navbar">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/contact">Contact</RouterLink>
                <RouterLink to="/Feedback">Feedback</RouterLink>
            </nav>
        </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
    font-family: 'Fira Code';
    color: azure;
    background-color: rgba(20, 20, 20, 0.8);
    top: 0;
    z-index: 99;
    text-align: center;
}

h3 {
    font-size: 1.2rem;
}

.navbar {
    position: sticky;
    top: 0;
    z-index: 99;
    color: azure;
    background-color: rgba(20, 20, 20, 0.8);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding: 1rem;
}

nav {
    display: flex;
    align-content: center;
    gap: 2rem;
    color: lightblue;
    font-family: 'Fira Code';
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {

    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
