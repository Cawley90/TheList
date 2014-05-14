$(document).ready(function(){
    
  var listItem = $('#checkListItem');
  var list = $('.list');

	//adding new items to the list
    $('#button').click(function(){
       var toAdd = listItem.val();
        if (toAdd.length > 0) {
        $('.list').append('<div class="item">' + toAdd + '<img src = "img/bin.png" id="bin"></div>');
        listItem.val('');  
      }

      else {
        alert('You want to add nothing to your to do list?  Seriously?  New level of laziness achieved.')

      }
       


       


 });

    //Push enter to add, as opposed to clicking the button.  Return false prevents the page from refreshing upon pushing enter.
    blah.keypress(function(e){
   		if(e.which == 13) {
   		$('#button').click();
        return false;
          		
   		}
   });

   	//clear list
    $('#delbutton').click(function(){
    	list.empty();

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

