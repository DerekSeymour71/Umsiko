

$(document).ready(
        
       function(){
        $(".fa-address-card").click(function(){
          
          $(this).toggleClass('fa-window-close fa-address-card'); 
          $(".menu").toggle(); 
        }) 
        
        $(".menu_link").click(
          function(){
            $(".fa-window-close").toggleClass('fa-window-close fa-address-card'); 
            $(".menu").toggle(); 
           
          }
        ); 

        
        $(".Btn_Read_More").click(
          function(){
            var parent = $(this).parent(); /*move up 1 level to grid item */
            var sibling = parent.next();   /*move across to the next grid item*/
            
            
            $(this).text(function(i, text){
              
              var button_text = $.trim(text);
              
              console.log("this is" + button_text);

              if (button_text == "Show More"){
                return text = "Show Less"
              }
              else
              {
                return text = "Show More" 
              };
 
           
               
            })
            
            /*var sibling_content = sibling.children();*/
            
            /*begin console/
              console.log(parent.attr('class'));
              console.log(sibling.attr('class'));
              console.log(sibling_content.attr('class'));
            /*end*/
            
            sibling.toggle();
           
          

          }
            
          
        );
  
       
        
  
      }
)          


/* $(".Btn_Read_More").click(
          function(){
            var text = $(this).text;
            var content = $(this).parent();
            var height;
            $(this).text() === "Show More" ? height="100%" : height =100;   
            $(content).height(height);
            
            $(this).text(function(i, text){
              return text === "Show More" ? "Show Less" : "Show More";
            });
            
          }
        ); */
