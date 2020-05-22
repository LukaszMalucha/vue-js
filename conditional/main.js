var app = new Vue({
    el: '#app',
    data: {
        product: "sunglasses",
        quantity: 150,
        sale: true,
        fruit: ['apple', 'banana', 'orange'],
        vegetables: ['carrot', 'beet', 'celery'],
        firstInputOptions: ['fruit', 'vegetables'],
        selected: 'fruit',
        secondInputSelected: '',
    },
    methods: {
    },
    computed: {
      secondInputOptions(){
        return this.selected === 'fruit' ? this.fruit : this.vegetables
      }
    },
})
