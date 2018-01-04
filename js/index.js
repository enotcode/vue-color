var app = new Vue({
  el: '#app',
  data: {
    mycolor: '#000000'
  },
  methods: {
      generator: function(event){
        this.mycolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
        document.body.style.background = this.mycolor
      }
    }
})