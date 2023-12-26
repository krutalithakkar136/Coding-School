function loginbtn(msg,myYes)
{
    var n=document.getElementById("idemail").value
	var m=document.getElementById("idpass").value
    if(n=="" || m=="")
    {
        var confirmBox = $("#conf");
        confirmBox.find(".mess").text(msg);
        confirmBox.find(".ok").unbind().click(function () {
            confirmBox.hide();
        });
        confirmBox.find(".ok").click(myYes);
        confirmBox.show();
    }
    else if(n=="demo@gmail.com" && m=="demo123")
    {
        var confirmBox = $("#confirm");
        confirmBox.find(".message").text(msg);
        confirmBox.find(".yes").unbind().click(function () {
            window.open("index.html","_self");
        });
        confirmBox.find(".yes").click(myYes);
        confirmBox.show();
    }
    else
    {
        var confirmBox = $("#confirm1");
        confirmBox.find(".message1").text(msg);
        confirmBox.find(".yes1").unbind().click(function () {
            confirmBox.hide();
        });
        confirmBox.find(".yes1").click(myYes);
        confirmBox.show();
    }
}

function createbtn(msg, myYes) {
    var x=document.getElementById("idname").value
	var y=document.getElementById("idemail").value
	var z=document.getElementById("idpass").value
    if(x=="" || y=="" || z=="")
	{
		var confirmBox = $("#conf");
        confirmBox.find(".mess").text(msg);
        confirmBox.find(".ok").unbind().click(function () {
            confirmBox.hide();
        });
        confirmBox.find(".ok").click(myYes);
        confirmBox.show();
	}

    else
    {
        var confirmBox = $("#confirm");
        confirmBox.find(".message").text(msg);
        confirmBox.find(".yes").unbind().click(function () {
            window.open("index.html","_self");
        });
        confirmBox.find(".yes").click(myYes);
        confirmBox.show();
        
    }
}