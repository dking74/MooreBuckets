<template>
    <b-navbar toggleable="lg" type="light" sticky variant='light'>
      <b-navbar-brand href="/">
        <img src="../assets/MooreBuckets-logo.png" width=125 height=50 alt="Moore Buckets Logo">
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Link 1</b-nav-item>
          <b-nav-item href="#">Link 2</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>

export default {
  name: 'NavBar',
  data() {
    return {
      navStyle: {
        background: "linear-gradient(135deg, hsla(249, 94%, 47%, 1) 0%, hsla(274, 84%, 45%, 1) 33%, hsla(318, 76%, 43%, 1) 64%, hsla(1, 94%, 55%, 1) 100%)"
      },
    }
  },
}
</script>