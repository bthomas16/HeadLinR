$(document).ready(function(){

    loaderTime = 2000
    delayTime=1000


var url = "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"

    $.get(url)
    .then(function(varData) {
      console.log(varData.articles[0].title)
      for (var i =0; i < varData.articles.length; i++){
        var  varTitles = "<h5> " +varData.articles[i].title+"</h5>"
        var  varLinks = "<a href=' " + varData.articles[i].url+"'> Full Story Here </a>"
        var  varDescription = "<h6> " + varData.articles[i].description+"</h6>"
        var rss = varTitles  + ' ' + varLinks + ' ' + varDescription
        console.log("This is RSS: "+rss)
        var currentNum = i+1
        $("#cnn"+currentNum).append(rss)
        // $()#cnn.attr('href', cnnLinks)
         }
       })


      //  $('.tish').each(function(){
      //    this.href += '?a=text'
      //  })

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
    parent.history.back();
    return false;
       });
})
