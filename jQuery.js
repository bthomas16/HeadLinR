$(document).ready(function(){

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

    // function delayOrbit(){
    //   if (loaderTime === 0) {
    //   $('.toHide').removeClass('toHide')
    //   }
    //       delayOrbit()
    // }


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

    function hidePreLoaderUK() {
      var preloader2 = $('.spinner-wrapper-uk')
      preloader2.fadeOut(loaderTime)
    }
     hidePreLoaderUK()

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

    $('.back').click(function(){
    parent.history.back();
    return false;
       });
    $('.back1').click(function(){
    parent.history.back();
    return false;
       });
})
