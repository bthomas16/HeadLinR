$(document).ready(function(){

    loaderTime = 2000
    delayTime=1000


// var url = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
//     $.get(url, (function(apData) {
//       console.log(apData.articles[0].title)
//       for (var i =0; i < apData.articles.length; i++){
//         var  cnnTitles = apData.articles[i].title
//         console.log(cnnTitles)
//         pushData()
//       }
//     }))
//
//     function pushData(){
//         $(".ap1").contents().append(cnnTitles)
//     }

    var url = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"

        $.get(url).then(function(apData) {
          console.log(apData.articles[0].title)
          for (var i =0; i < apData.articles.length; i++){
            var  apTitles = apData.articles[i].title
            var  apLinks = apData.articles[i].url
              console.log(apTitles)
              var rss = (apTitles + apLinks)

          }
              return rss
        }).then(function(rss) {
            $(".bbc2").html(rss)
            console.log('bishicles')
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
