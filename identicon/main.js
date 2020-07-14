new Vue({
  el: '#app',
  data() {
    return {
      textInput: ""
    }

  },
  computed: {
    identicon() {
      return jdenticon.toSvg(this.textInput, 200);
    }
  },
  methods: {
    onInput() {
      this.textInput = event.target.value;
    }
  },
  template: `
    <div>
        <h3>Identicon Generator</h3>
        <div>
            Input:
        <input  v-on:input="onInput" />
        </div>
        <div>
            Output:
                {{ textInput }}
            <div v-html="identicon"></div>
        </div>
    </div>


  `
});
