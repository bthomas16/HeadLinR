$(document).ready(function(){
  $(window).load(function(){

    loaderTime = 2400
    delayTime=1000

    function hidePreLoader() {
    var preloader = $('.spinner-wrapper')
    preloader.fadeOut(loaderTime)
    }
      hidePreLoader()
      console.log("made it here")


// function loadOrbit() {
//   var delayer = $('.orbitlistJS-orbit-1')
//   delayer.show(delayTime)
//   }
//   loadOrbit()
//   console.log("hello")
})

function select(){
  var country = $('select')
  country.material_select()
  }
})
