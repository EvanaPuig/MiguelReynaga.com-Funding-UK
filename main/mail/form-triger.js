"use strict";
$(document).ready(function() {
	
    $("#footer-form-btn").on('click',function() { 
       
	    var proceed = true;
        //simple validation at client's end
        //loop through each field and we simply change border color to red for invalid fields		
		$("#contact_form input[required=required]").each(function(){
			 
			if(!$.trim($(this).val())){ //if this field is empty 
				$(this).parent().addClass('red'); //change border color to red   
				proceed = false; //set do not proceed flag
			}
			else{ //if this field is empty 
				$(this).parent().removeClass('red'); //change border color to red   
			}
				
		});
       
        if(proceed) //everything looks good! proceed...
        {
			//get input field values data to be sent to server
            post_data = {
				'user_name'		: $('input[name=name]').val(), 
				'user_email'	: $('input[name=email]').val(),  
				'user_message'	: $('textarea[name=message]').val()
			};
            
            //Ajax post data to server
            $.post('mail/contact.php', post_data, function(response){  
				if(response.type == 'error'){ //load json data from server and output message     
					output = '<div class="modal" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" href="javascript:location.reload(true)">x</a><h4 class="modal-title">Ooops</h4></div><div class="modal-body"><div class="error">'+response.text+'</div></div></div></div></div>';
				}else{
				    
					output = '<div class="modal" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" href="javascript:location.reload(true)">x</a><h4 class="modal-title">THANK YOU!</h4></div><div class="modal-body"><div id="overlay_form" class="success">'+response.text+'</div></div></div></div></div>';
				
				}
				$("#contact_results").hide().html(output).slideDown();
            }, 'json');
        }
    });
    
});
