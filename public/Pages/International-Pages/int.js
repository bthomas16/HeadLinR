$(document).ready(function(){

    $('.container').css('visibility', 'visible')

    loaderTime = 2000
    delayTime=1000

    var url = "https://newsapi.org/v1/articles?source=newsweek&sortBy=top&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
    var rssArray = []

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
            $("#int"+currentNum).append(rss)
             }
           })

           var url1 = "https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
           var rssArray = []

               $.get(url1)
               .then(function(varData) {
                 console.log(varData.articles[0].title)
                 for (var i =0; i < varData.articles.length; i++){
                   var  varTitles = "<h5> " +varData.articles[i].title+"</h5>"
                   var  varLinks = "<a href=' " + varData.articles[i].url+"'> Full Story Here </a>"
                   var  varDescription = "<h6> " + varData.articles[i].description+"</h6>"
                   var rss = varTitles  + ' ' + varLinks + ' ' + varDescription
                   console.log("This is RSS: "+rss)
                   var currentNum = i+1
                   $("#int1-"+currentNum).append(rss)
                    }
                  })

                  var url2 = "https://newsapi.org/v1/articles?source=focus&sortBy=top&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
                  var rssArray = []

                      $.get(url2)
                      .then(function(varData) {
                        console.log(varData.articles[0].title)
                        for (var i =0; i < varData.articles.length; i++){
                          var  varTitles = "<h5> " +varData.articles[i].title+"</h5>"
                          var  varLinks = "<a href=' " + varData.articles[i].url+"'> Full Story Here </a>"
                          var  varDescription = "<h6> " + varData.articles[i].description+"</h6>"
                          var rss = varTitles  + ' ' + varLinks + ' ' + varDescription
                          console.log("This is RSS: "+rss)
                          var currentNum = i+1
                          $("#int2-"+currentNum).append(rss)
                           }
                         })

                         var url3 = "https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
                         var rssArray = []

                             $.get(url3)
                             .then(function(varData) {
                               console.log(varData.articles[0].title)
                               for (var i =0; i < varData.articles.length; i++){
                                 var  varTitles = "<h5> " +varData.articles[i].title+"</h5>"
                                 var  varLinks = "<a href=' " + varData.articles[i].url+"'> Full Story Here </a>"
                                 var  varDescription = "<h6> " + varData.articles[i].description+"</h6>"
                                 var rss = varTitles  + ' ' + varLinks + ' ' + varDescription
                                 console.log("This is RSS: "+rss)
                                 var currentNum = i+1
                                 $("#int3-"+currentNum).append(rss)
                                  }
                                })

    function hidePreLoader() {
    var preloader = $('.spinner-wrapper')
    preloader.fadeOut(loaderTime)
    }
    hidePreLoader()

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
    parent.history.back();
    return false;
       });
    $('.back1').click(function(){
    parent.history.back();
    return false;
       });
})
