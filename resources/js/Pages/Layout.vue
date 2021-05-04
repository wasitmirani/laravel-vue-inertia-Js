<template>
  <main>
    <header>
        <ul class="list-inside bg-rose-200 ...">
        <li><inertia-link href="/">Home</inertia-link></li>
        <li><inertia-link href="/about">About us</inertia-link></li>
        </ul>

    </header>
    <article>
    <slot />
    </article>
  </main>
</template>

<script>
  export default {
    props: {
      title: String,
    },
    watch: {
      title: {
        immediate: true,
        handler(title) {
          document.title = title
        },
      },
    },
  }
</script>
