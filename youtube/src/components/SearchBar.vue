<template>
  <div class="input-div">
    <input  @input="onInput" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput: function(event) {
      this.$emit('termChange', event.target.value);
    }
  }
};
</script>


<style>
  input: {
    width: 75%;

  }
  .input-div {
    text-align: center;
    margin: 20px;
  }
  .list-group {
    text-align: left;
  }
</style>
