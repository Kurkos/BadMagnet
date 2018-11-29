
$('.touchMeNot').html(function() {
    return $.map($(this).text().split(''), function(el, i) {
    	if ($.trim(el)) {
				return '<p class="charecter">' + el + '</p>';
      } 
    }).join('');
});


 var mouse = {'x': 0, 'y': 0};

    homex = 0;
    homey = 0;
	forcex = 0;
	forcey = 0;
    magnet = 500;

    
    $(document).bind('mousemove', function(e) {
        mouse = {'x': e.pageX, 'y': e.pageY};
    });
    

$('.charecter').each(function(index, el){
$(el).data( "homex", parseInt($(el).position().left));
$(el).data( "homey", parseInt($(el).position().top));
});

$('.charecter').css('position','absolute');
    setInterval(function () {
        $('.charecter').each(function(index, el){
            el = $(el);
            position = el.position();
            x0 = el.offset().left;
            y0 = el.offset().top;
            x1 = mouse.x;
            y1 = mouse.y;
            distancex = x1-x0;
            distancey = y1-y0;

            distance = Math.sqrt((distancex * distancex) + (distancey * distancey));
            

            powerx = x0 - (distancex / distance) * magnet / distance;
            powery = y0 - (distancey / distance) * magnet / distance;
            
            forcex = (forcex + (el.data('homex') - x0) / 2) / 2.1;
            forcey = (forcey + (el.data('homey') - y0) / 2) / 2.1;
                        

            el.css('left', powerx + forcex);
            el.css('top',  powery + forcey);
        });
    }, 15);