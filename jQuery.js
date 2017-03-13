$(document).ready(function(){
  $(window).load(function(){

    loaderTime = 2000
    delayTime=1000

    $('.progressive').click(function(){
      $('.progressive').toggleClass('active')
      $('.fox').fadeToggle('hidden')
      $('.thehill').fadeToggle('hidden')
      $('.wh').fadeToggle('hidden')
    })

    $('.conservative').click(function(){
      $('.conservative').toggleClass('active')
      $('.cnn').fadeToggle('hidden')
      $('.reuters').fadeToggle('hidden')
      $('.nytimes').fadeToggle('hidden')
      $('.ap').fadeToggle('hidden')
    })

    $('.facts').click(function(){
      $('.cnn').fadeToggle('hidden')
      $('.reuters').fadeToggle('hidden')
      $('.nytimes').fadeToggle('hidden')
      $('.ap').fadeToggle('hidden')
      $('.fox').fadeToggle('hidden')
      $('.thehill').fadeToggle('hidden')
      $('.wh').fadeToggle('hidden')
    })

    function hidePreLoader() {
    var preloader = $('.spinner-wrapper')
    preloader.fadeOut(loaderTime)
    }
    hidePreLoader()

    function hidePreLoaderMexico() {
    var preloader1 = $('.spinner-wrapper-mexico')
    preloader1.fadeOut(loaderTime)
    }
    hidePreLoaderMexico()

    function hidePreLoaderEU() {
      var preloader2 = $('.spinner-wrapper-eu')
      preloader2.fadeOut(loaderTime)
    }
     hidePreLoaderEU()


    function hidePreLoaderCanada() {
    var preloader3 = $('.spinner-wrapper-canada')
    preloader3.fadeOut(loaderTime)
    }
      hidePreLoaderCanada()

    function hidePreLoaderChina() {
    var preloader4 = $('.spinner-wrapper-china')
    preloader4.fadeOut(loaderTime)
    }
      hidePreLoaderChina()

var monkey = $('.country-container')

    $('.back').click(function(){
    parent.history.back();
    return false;
       });
    })
})
