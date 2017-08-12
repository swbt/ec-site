//vue.jsの動作確認

var appInput=new Vue({
	el:'#app-input',
	data:{
		message:'dd'
	}
})
var app2 = new Vue({
	  el: '#app-2',
	  data: {
	    message: 'You loaded this page on ' + new Date()
	  }
	})
new Vue({
    el : '#app3',
    data : {
        seen : true
    }
});
new Vue({
    el : '#app4',
    data : {
        todos : [
            { text : 'Apple' },
            { text : 'Orange' },
            { text : 'Strawberry' }
        ]
    }
});
new Vue({
    el : '#app5',
    data : {
        message : 'Hello from Vue.js!'
    },
    methods : {
        reverseMessage : function(e) {
            console.log('reverseMessage:', e, this);
            this.message = this.message.split('').reverse().join('');
        }
    }
});

new Vue({
	  el: '#staggered-list-demo',
	  data: {
	    query: '',
	    list: [
	      { msg: '' },
	      { msg: 'Jackie Chan' },
	      { msg: 'Chuck Norris' },
	      { msg: 'Jet Li' },
	      { msg: 'Kung Fury' }
	    ]
	  },
	  computed: {
	    computedList: function () {
	      var vm = this
	      return this.list.filter(function (item) {
	        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
	      })
	    }
	  },
	  methods: {
	    beforeEnter: function (el) {
	      el.style.opacity = 0
	      el.style.height = 0
	    },
	    enter: function (el, done) {
	      var delay = el.dataset.index * 150
	      setTimeout(function () {
	        Velocity(
	          el,
	          { opacity: 1, height: '1.6em' },
	          { complete: done }
	        )
	      }, delay)
	    },
	    leave: function (el, done) {
	      var delay = el.dataset.index * 150
	      setTimeout(function () {
	        Velocity(
	          el,
	          { opacity: 0, height: 0 },
	          { complete: done }
	        )
	      }, delay)
	    }
	  }
	})