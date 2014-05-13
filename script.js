$(document).ready(function(){
    
	//adding new items to the list
    $('#button').click(function(){
       var toAdd = $('input[id=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
        $('#checkListItem').val('');


        //If users enter nothing, prompt "what's wrong with you?"
        if (toAdd.length == 0) {
        	alert('You want to add nothing to your to do list?  Seriously?  New level of laziness achieved.');
        }
 });

    //Push enter to add, as opposed to clicking the button.
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


    //Am I doing this right?  This is a test.
    //$(document).keypress(function(e){
    	//if(e.which == 13) {
    		//alert("Well you're doing something right");
    	//}
    //});

 
});

