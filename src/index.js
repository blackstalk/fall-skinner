import Vue from "vue"
import s from "./store"
import Logo from "./components/Logo.vue"
import "./style.css"
import './style.scss';

// Lazy load scripts for components, not routes!
// const coolDiv = document.querySelector("#cool")
// if (coolDiv) import("./components/cool.js")

/* eslint-disable no-new */
new Vue({
  el: "#app",
  delimiters: ["${", "}"],
  components: {
    Logo
  },
  data: {
    privateState: {},
    sharedState: s.state,
    heroReadMoreBtn: document.querySelector('.hero-read-more'),
  },
  mounted() {
    console.log('mounted');
  },
  methods: {
    printPage(){
      window.print();
    },
    scrollToRecipes(){
      document.getElementById('scroll-here-plz').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    },
    goHome(){
      window.location.href='/';
    }
    
  }
})
/* eslint-enable */
