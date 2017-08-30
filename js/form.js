
var kusercheck = false;
var userok = false;
var emailcheck = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;


$(document).ready(function(){
	$(document).on("keypress", "form", function(event) { 
    	return event.keyCode != 13;
	});	
	$("#signinform").on("submit", function() {
		if(userok) {
			console.log("form ok");
			return true;
		} else {
			return false;
		}
	});

	$("input").on("keyup", function() {
		if($(this).attr("id") == "username" && kusercheck == false) {
			kusercheck = true
			console.log(kusercheck);
		} 
		if($(this).attr("id") == "username" && $("#username").val().indexOf("@") != -1) {
    		if((emailcheck.test($("#username").val()))) {	
    			$("#username").siblings('#errormess2').css("display", "none");
		    	$("#username").siblings(".errormess").css("display", "none");
		    	$("#username").siblings(".errorbar").css("display", "none");
		    	userok = true;
		    }
	    	console.log("valid email");
	    } else if( $(this).attr("id") == "username" && $("#username").val().length > 1) {
    		$("#username").siblings("#errormess2").css("display", "none");
    		$("#username").siblings(".errormess").css("display", "none");
    		$("#username").siblings(".errorbar").css("display", "none");
    		console.log("check username length");
    		userok = true;
    	}
	});
	

    $("input").on('blur', function(){
    	var a = $(this).attr("id");
    	var l = $(this).val().length;
    	//hasAmp = patt1.test($("#username").val());

    	if(l === 0 && a == "username" && kusercheck)  {
			$("#username").siblings("#errormess2").text("Something's missing. Please check and try again.").css("display", "block");
			$("#username").siblings(".errormess").css("display", "none");
			$("#username").siblings(".errorbar").css("display", "block");
			console.log("check blur kusercheck");
			userok = false;
		} else if(a == "username" && $("#username").val().indexOf("@") != -1) {
    		if(!(emailcheck.test($("#username").val()))) {
	    		$("#username").siblings("#errormess2").text("Sorry, that doesn't look right. Please check it's a proper email.").css("display", "block");
	    		$("#username").siblings(".errormess").css("display", "none");
	    		$("#username").siblings(".errorbar").css("display", "block");
	    		console.log("blur not valid email");
	    		userok = false;
    		} else {
    			console.log("blur valid email");
    			userok = true;
    		}
    	} else if(l == 0) {
    		//do nothing
    	} else if(l == 1) {
    		if(a == "username") {
	    		$("#username").siblings('#errormess2').css("display", "none");
	    		$("#username").siblings(".errormess").css("display", "block");
	    		$("#username").siblings(".errorbar").css("display", "block");
	    		console.log("blur display username field if length 1")
	    		userok = false;
	    	} 
	    } 
    });    	
});
