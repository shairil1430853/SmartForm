// Your jQuery goes here

var bool = [0,0,0];

var userData = {
	email:"",
	name: ""
};

$("#butWelcome").click(function(event){
	$("#welcome").hide();
	$("#q1").show();
});

$('#q1Next').click(function(event){

	userData.email = $('#inputEmail').val();
	userData.name = $('#inputName').val();

	if( userData.name=="tusher" && userData.email=="shairil3795@gmail.com")
	{
		$("#q1").hide();
		$("#q2").show();
	}
	
});

$("#askHTML").click(function(event){
	$("#q2").hide();
	$("#q2a").show();
});

$("#askCSS").click(function(event){
	$("#q2").hide();
	$("#q2b").show();
});

$("#askJSCRIPT").click(function(event){
	$("#q2").hide();
	$("#q2c").show();
});

$("#htmlNext").click(function(event){
	if(($("#chk1").is(':checked')||$("#chk2").is(':checked')||$("#chk3").is(':checked')||$("#chk4").is(':checked')&&($("#ch5").is(':checked')||$("#chk6").is(':checked')||$("#chk7").is(':checked')||$("#chk8").is(':checked'))))
	{
		bool[0]=1;
		if(bool[0]==1 && bool[1]==1 && bool[2]==1) goToQ3();
    	else{
    		$("#q2").show();
			$("#q2a").hide();
		}
	}

	if(bool[0]==1&&bool[1]==1&&bool[2]==1) goToQ3();
});

$("#htmlPrev").click(function(event){
	$("#q2").show();
	$("#q2a").hide();
});

$("#cssPrev").click(function(event){
	$("#q2").show();
	$("#q2b").hide();
});

$("#cssNext").click(function(event){
	if(($("#chk9").is(':checked')||$("#chk10").is(':checked')||$("#chk11").is(':checked')&&($("#ch12").is(':checked')||$("#chk13").is(':checked')||$("#chk14").is(':checked')||$("#chk15").is(':checked'))))
	{
		bool[1]=1;
		if(bool[0]==1 && bool[1]==1 && bool[2]==1) goToQ3();
    	else{
    		$("#q2").show();
			$("#q2b").hide();
		}
	}
});

$("#jscriptPrev").click(function(event){
	$("#q2").show();
	$("#q2c").hide();
});

$("#jscriptNext").click(function(event){
	if(($("#ch16").is(':checked')||$("#chk17").is(':checked')||$("#chk18").is(':checked')||$("#chk19").is(':checked')&&($("#ch21").is(':checked')||$("#chk22").is(':checked')||$("#chk23").is(':checked')||$("#chk20").is(':checked'))))
	{
		bool[2]=1;
		if(bool[0]==1 && bool[1]==1 && bool[2]==1) goToQ3();
    	else{
    		$("#q2").show();
			$("#q2c").hide();
		}
	}

	if(bool[0]==1 && bool[1]==1 && bool[2]==1) goToQ3();

	console.log(bool[0]);
	console.log(bool[1]);
	console.log(bool[2]);

});

function goToQ3() {
	$("#q2a").hide();
	$("#q2b").hide();         
	$("#q2c").hide();         
    $("#q3").show();    

    console.log('CALLED');
}
