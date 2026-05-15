export default {
  async fetch(request, env, ctx) {
    return new Response("Worker is initializing... please wait for the build to complete.");
  }
}
