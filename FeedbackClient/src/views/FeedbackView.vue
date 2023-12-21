<script setup lang="ts">
import FeedbackItem from '../components/FeedbackItem.vue'
</script>

<template>
    <main>
        <h1>Feedbacks</h1>
        <div class="feedbackContainer">
            <FeedbackItem></FeedbackItem>
            <FeedbackItem></FeedbackItem>
            <FeedbackItem></FeedbackItem>
            <FeedbackItem></FeedbackItem>
            <FeedbackItem></FeedbackItem>
            <FeedbackItem></FeedbackItem>
            <FeedbackItem></FeedbackItem>
            <FeedbackItem></FeedbackItem>
            <FeedbackItem></FeedbackItem>
            <FeedbackItem></FeedbackItem>
            <FeedbackItem></FeedbackItem>
        </div>
    </main>
</template>

<script lang="ts">
    const fetchMaxAmount = async () => {
        var url = 'http://localhost:7002/Feedback';
        var data;
        try {
          const response = await fetch(url);
          data = await response.json();
        } catch (error) {
          console.log(error)
        }
    };
</script>

<style scoped>
.feedbackContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin: 4rem;
}
</style>

