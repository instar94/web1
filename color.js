var link = {
  setColor:function(color){
      // var alist = document.querySelectorAll('a');
      // var i =0;
      // while (i< alist.length){
        // alist[i].style.color=color;
        // i=i+1;
          // }
        // }
        $('a').css('color',color);
      }
}
var Body = {
  setColor:function (color){
  // document.querySelector('body').style.color = color;
      $('body').css('color',color);
    },
 setBackgroundColor:function (color){
  // document.querySelector('body').style.backgroundColor = color;
  $('Body').css('backgroundColor',color);
    }
  }

      function nightDayHandler(self){
        var target = document.querySelector('body');
        if(self.value === 'night'){
          Body.setBackgroundColor('dimgrey');
          Body.setColor('white');
          self.value = 'day';
          link.setColor('white');

          } else{
          Body.setBackgroundColor('white');
          Body.setColor('black');
          self.value='night';
          link.setColor('black');
          }
        }
