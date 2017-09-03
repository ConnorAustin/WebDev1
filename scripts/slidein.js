$('.slideInChildren').each(function() {
  $(this).children().each(function() {
    $(this).addClass('slideIn');
  });
});

function inView(jQueryObj) {
  var top = jQueryObj.offset().top;
  var bot = top + jQueryObj.height();
  
  var windowTop = $(window).scrollTop();
  var windowBot = windowTop + $(window).height();
  
  return bot < windowBot && windowTop < top;
}

function updateSlidein() {
  $('.slideIn').each(function() {
    
    if(inView($(this))) {
      $(this).addClass('slideInAnim');
    }
  });
  
  $('.slideInChildren').each(function() {
    if(inView($(this))) {
      var len = $(this).children().length;
      $(this).children().each(function(index) {
        var obj = $(this);
        setTimeout(function(){
          obj.addClass('slideInAnim');
        }, 900 * index / len);
      });
    }
  });
}

$(window).scroll(updateSlidein);
updateSlidein();

$('input').keypress(function (e) {
  if($(this).hasClass('fileInput')) {
    return;
  }
  
  if (e.which == 13) {
    window.location.href = "missions.html";
  }
});
