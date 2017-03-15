$(document).ready(function(){

    loaderTime = 2000
    delayTime=1000

    var url = "https://newsapi.org/v1/articles?source=die-zeit&sortBy=latest&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
    var rssArray = []

        $.get(url)
        .then(function(newsweekData) {
          console.log(newsweekData.articles[0].title)
          for (var i =0; i < newsweekData.articles.length; i++){
            var  newsweekTitles = newsweekData.articles[i].title
            var  newsweekLinks = newsweekData.articles[i].url
            var rss = newsweekTitles  + ' ' + newsweekLinks
            console.log("This is RSS: "+rss)
            var currentNum = i+1
            $("#int"+currentNum).append(rss)
             }
           })

           var url1 = "https://newsapi.org/v1/articles?source=bild&sortBy=top&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
           var rssArray = []

               $.get(url1)
               .then(function(indiaTimesData) {
                 console.log(indiaTimesData.articles[0].title)
                 for (var i =0; i < indiaTimesData.articles.length; i++){
                   var  indiaTimesTitles = indiaTimesData.articles[i].title
                   var  indiaTimesLinks = indiaTimesData.articles[i].url
                   var rss = indiaTimesTitles  + ' ' + indiaTimesLinks
                   console.log("This is RSS: "+rss)
                   var currentNum = i+1
                   $("#int1-"+currentNum).append(rss)
                    }
                  })

                  var url2 = "https://newsapi.org/v1/articles?source=spiegel-online&sortBy=top&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
                  var rssArray = []

                      $.get(url2)
                      .then(function(focusData) {
                        console.log(focusData.articles[0].title)
                        for (var i =0; i < focusData.articles.length; i++){
                          var  focusTitles = focusData.articles[i].title
                          var  focusLinks = focusData.articles[i].url
                          var rss = focusTitles  + ' ' + focusLinks
                          console.log("This is RSS: "+rss)
                          var currentNum = i+1
                          $("#int2-"+currentNum).append(rss)
                           }
                         })

                         var url3 = "https://newsapi.org/v1/articles?source=spiegel-online&sortBy=top&apiKey=edd5090deb6b47eaa1aa6368b9779ebe"
                         var rssArray = []

                             $.get(url3)
                             .then(function(hinduData) {
                               console.log(hinduData.articles[0].title)
                               for (var i =0; i < hinduData.articles.length; i++){
                                 var  hinduTitles = hinduData.articles[i].title
                                 var  hinduLinks = hinduData.articles[i].url
                                 var rss = hinduTitles  + ' ' + hinduLinks
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
