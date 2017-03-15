$(document).ready(function(){

    loaderTime = 2000
    delayTime=1000

    var url = "https://newsapi.org/v1/articles?source=die-zeit&sortBy=latest&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
    var rssArray = []

        $.get(url)
        .then(function(gnews1Data) {
          console.log(gnews1Data.articles[0].title)
          for (var i =0; i < gnews1Data.articles.length; i++){
            var  gnews1Titles = gnews1Data.articles[i].title
            var  gnews1Links = gnews1Data.articles[i].url
            var rss = gnews1Titles  + ' ' + gnews1Links
            console.log("This is RSS: "+rss)
            var currentNum = i+1
            $("#gnews"+currentNum).append(rss)
             }
           })

           var url1 = "https://newsapi.org/v1/articles?source=bild&sortBy=top&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
           var rssArray = []

               $.get(url1)
               .then(function(gnews2Data) {
                 console.log(gnews2Data.articles[0].title)
                 for (var i =0; i < gnews2Data.articles.length; i++){
                   var  gnews2Titles = gnews2Data.articles[i].title
                   var  gnews2Links = gnews2Data.articles[i].url
                   var rss = gnews2Titles  + ' ' + gnews2Links
                   console.log("This is RSS: "+rss)
                   var currentNum = i+1
                   $("#gnews1-"+currentNum).append(rss)
                    }
                  })

                  var url2 = "https://newsapi.org/v1/articles?source=spiegel-online&sortBy=top&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
                  var rssArray = []

                      $.get(url2)
                      .then(function(gnews3Data) {
                        console.log(gnews3Data.articles[0].title)
                        for (var i =0; i < gnews3Data.articles.length; i++){
                          var  gnews3Titles = gnews3Data.articles[i].title
                          var  gnews3Links = gnews3Data.articles[i].url
                          var rss = gnews3Titles  + ' ' + gnews3Links
                          console.log("This is RSS: "+rss)
                          var currentNum = i+1
                          $("#gnews2-"+currentNum).append(rss)
                           }
                         })

                         var url3 = "https://newsapi.org/v1/articles?source=spiegel-online&sortBy=top&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
                         var rssArray = []

                             $.get(url3)
                             .then(function(gnews4Data) {
                               console.log(gnews4Data.articles[0].title)
                               for (var i =0; i < gnews4Data.articles.length; i++){
                                 var  gnews4Titles = gnews4Data.articles[i].title
                                 var  gnews4Links = gnews4Data.articles[i].url
                                 var rss = gnews4Titles  + ' ' + gnews4Links
                                 console.log("This is RSS: "+rss)
                                 var currentNum = i+1
                                 $("#gnews3-"+currentNum).append(rss)
                                  }
                                })

                                var url4 = " https://newsapi.org/v1/articles?source=wirtschafts-woche&sortBy=latest&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
                                var rssArray = []

                                    $.get(url4)
                                    .then(function(gnews5Data) {
                                      console.log(gnews5Data.articles[0].title)
                                      for (var i =0; i < gnews5Data.articles.length; i++){
                                        var  gnews5Titles = gnews5Data.articles[i].title
                                        var  gnews5Links = gnews5Data.articles[i].url
                                        var rss = gnews5Titles  + ' ' + gnews5Links
                                        console.log("This is RSS: "+rss)
                                        var currentNum = i+1
                                        $("#gnews4-"+currentNum).append(rss)
                                         }
                                       })

                                       var url5 = " https://newsapi.org/v1/articles?source=wirtschafts-woche&sortBy=latest&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
                                       var rssArray = []

                                           $.get(url5)
                                           .then(function(gnews6Data) {
                                             console.log(gnews6Data.articles[0].title)
                                             for (var i =0; i < gnews6Data.articles.length; i++){
                                               var  gnews6Titles = gnews6Data.articles[i].title
                                               var  gnews6Links = gnews6Data.articles[i].url
                                               var rss = gnews6Titles  + ' ' + gnews6Links
                                               console.log("This is RSS: "+rss)
                                               var currentNum = i+1
                                               $("#gnews5-"+currentNum).append(rss)
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
