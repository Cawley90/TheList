$(document).ready(function(){
    
	//adding new items to the list
    $('#button').click(function(){
       var toAdd = $('input[id=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '<img src = "img/bin.png" id="bin"></div>');
        $('#checkListItem').val('');


        //If users enter nothing, prompt "why you do this".
        if (toAdd.length == 0) {
        alert('You want to add nothing to your to do list?  Seriously?  New level of laziness achieved.');
        $('.list').closest('.item').remove(); 
        //return false;  <--- another attempt at getting it to remove empty div, didn't work
        }


 });

    //Push enter to add, as opposed to clicking the button.  Return false prevents the page from refreshing upon pushing enter.
    $('#checkListItem').keypress(function(e){
   		if(e.which == 13) {
   		$('#button').click();
        return false;
          		
   		}
   });

   	//clear list
    $('#delbutton').click(function(){
    	$('.list').empty();

    })
    
    //strikethrough on completed items
    $(document).on('click', '.item', function(){
        $(this).toggleClass('itemdone', 'item');

     });

    //delete specific item
    $(document).on('click', '#bin', function(){
      $(this).closest('.item').remove();

    })

    //Am I doing this right?  This is a test.
    //$(document).keypress(function(e){
    	//if(e.which == 13) {
    		//alert("Well you're doing something right");
    	//}
    //});

 
});

