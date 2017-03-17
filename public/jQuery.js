$(document).ready(function(){

  $('.container').css('visibility', 'visible')

    $(window).resize(function(){location.reload();});

    loaderTime = 1200
    fadeTime=200

    function checkPosition() {
      if ($(window).width() < 750) {
        $('div').remove('.wh')
      }
    }

$(window).resize(function(){location.reload();});

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
        $('.wsj').fadeToggle('hidden')
      })

      $('.facts').click(function(){
        $('.cnn').fadeToggle('hidden')
        $('.reuters').fadeToggle('hidden')
        $('.nytimes').fadeToggle('hidden')
        $('.ap').fadeToggle('hidden')
        $('.wsj').fadeToggle('hidden')
        $('.wh').fadeToggle('hidden')
      })

      // $('select').material_select();

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

    function hidePreLoaderInternational() {
    var preloader3 = $('.spinner-wrapper-international')
    preloader3.fadeOut(loaderTime)
    }
      hidePreLoaderInternational()

    function hidePreLoaderGermany() {
    var preloader4 = $('.spinner-wrapper-germany')
    preloader4.fadeOut(loaderTime)
    }
      hidePreLoaderGermany()

      $('.back').click(function(){
      history.go(-1)
      return true;
         });
    $('.back1').click(function(){
      history.go(-1)
      return true;
         });
})
