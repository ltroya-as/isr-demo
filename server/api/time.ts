export default defineEventHandler(async (event) => {
  try {
    const now = new Date();
    const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));
    
    return {
      datetime: now.toISOString(),
      timezone: 'UTC',
      utc_datetime: utcNow.toISOString(),
      utc_offset: '+00:00'
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : 'Internal Server Error',
    });
  }
});
