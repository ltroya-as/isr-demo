export default defineEventHandler(async (event) => {
  try {
    const response = await $fetch<{
      datetime: string;
      timezone: string;
      utc_datetime: string;
      utc_offset: string;
    }>('http://worldtimeapi.org/api/timezone/UTC');

    return response;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch time'
    });
  }
});
