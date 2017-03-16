$(document).ready(function(){

    $('.container').css('visibility', 'visible')

    loaderTime = 2000
    delayTime=1000

    var url = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
    var rssArray = []

        $.get(url)
        .then(function(varData) {
          console.log(varData.articles)
          for (var i =0; i < varData.articles.length; i++){
            var  varTitles = "<h5> " +varData.articles[i].title+"</h5>"
            var  varLinks = "<a href=' " + varData.articles[i].url+"'> Full Story Here </a>"
            var  varDescription = "<h6> " + varData.articles[i].description+"</h6>"
            var rss = varTitles  + ' ' + varLinks + ' ' + varDescription
            console.log("This is RSS: "+rss)
            var currentNum = i+1
            $("#bbc"+currentNum).append(rss)
             }
           })


    function hidePreLoaderUK() {
      var preloader2 = $('.spinner-wrapper-uk')
      preloader2.fadeOut(loaderTime)
    }
     hidePreLoaderUK()

    $('.back').click(function(){
    parent.history.back();
    return false;
       });
    $('.back1').click(function(){
    parent.history.back();
    return false;
       });
})
