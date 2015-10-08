$(function() {
    $(window).scroll( function(){
        $('.fadeInBlock').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 400;  
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);     
            }
        }); 
    });
});

$( "#phonetop_link" ).click(function() {
  $( "#phoneTop" ).slideToggle( "fast", function() {
  });
});

// show snippet source code
var $button = $("<div id='source-button' title='See the HTML source code.' class='btn btn-default btn-xs'><i class='fa fa-2x fa-code'></i></div>").click(function(){
  var html = $(this).parent().html();
  html = cleanSource(html);
  $("#source-modal textarea").text(html);
  $("#source-modal").modal();
}).tooltip({placement:'left'});

$(".show-source").hover(function(){
  $(this).append($button);
  $button.show();
}, function(){
  $button.hide();
});

$("#btnCopy").click(function(){

  selectText('sourceCode');
  
});

function selectText(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select();
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
  }
}

function cleanSource(html) {
  var lines = html.split(/\n/);
  
  lines.shift();
  lines.splice(-1, 1);
  
  var indentSize = lines[0].length - lines[0].trim().length,
    re = new RegExp(" {" + indentSize + "}");
  
  lines = lines.map(function(line){
    if (line.match(re)) {
      line = line.substring(indentSize);
    }
    return line;
  });
  
  lines = lines.join("\n");  
  return lines;
}


