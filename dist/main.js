
$(document).ready(function() {
// $( "#myDiv" ).css( "border", "3px solid red" );
	var aaron = 1;
	var keith = [];
	
	$("#button").on("click",doStuff);
	
	function doStuff(apple){
		keith.push($("#input").val());
		console.log(keith);
		}

	var newString = "";
	
//$('.test').click(function() {
 //   $(this).crossOut;
//	});	
	
	$("#button").on("click",render);
	
	
	function render(asdf){
		$("#input").val("");
		$("#section").html(newString);
		var house = "<ol><li class ='cross'>" + keith.join("</li><li class ='cross'>") + "</li><ol>";
		$("#section").html(house);
		$(".cross").on("click",crossOut);				
		}
	
		function crossOut(){if(aaron===1){
						$(this).css("text-decoration","line-through");
						console.log("crossy");
						aaron=2;}

		 			else {
						$(this).css("text-decoration","none");
						console.log("uncrossy");
						aaron=1;} 
				}




		//function uncrossOut(){$("#section").css("text-decoration","none";aaron=2);}
		//$("this").on("click", crossOut);	
	

});





