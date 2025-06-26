<template>
  <div>
    <h1>Welcome to My Vue App</h1>
    <div v-if="time">
      <p>Current Time: {{ time.datetime }}</p>
      <p>Timezone: {{ time.timezone }}</p>
    </div>
    <p v-else>Loading time...</p>
  </div>
</template>

<script setup lang="ts">
interface TimeResponse {
  datetime: string;
  timezone: string;
  utc_datetime: string;
  utc_offset: string;
}

const { data: time } = await useFetch<TimeResponse>('/api/time', {
  server: true
});
</script>
