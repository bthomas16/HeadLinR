$(document).ready(function(){

    loaderTime = 2000
    delayTime=1000


var url = "https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
    $.get(url, (function(apData) {
      console.log(apData.articles[0].title)
      for (var i =0; i < apData.articles.length; i++){
        var  cnnTitles = apData.articles[i].title
        console.log(cnnTitles)
        pushData()
      }
    }))

    function pushData(){
        $(".c1").contents().append(cnnTitles)
    }


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

      $('.back').click(function(){
      history.go(-1)
      return true;
         });
      $('.back1').click(function(){
        history.go(-1)
        return true;
           });
})
