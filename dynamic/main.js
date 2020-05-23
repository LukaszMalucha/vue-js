new Vue({
  el: '#demo',
  name: 'Adding html',
  data() {
    return {
      inputs: []
    }
  },
  methods: {
    addInput() {
      this.inputs.push(this.inputs.length+1)
    }
  },
  computed: {
    buttonText() {
      return this.showInput ? 'Hide input' : 'Show input'
    }
  }
})