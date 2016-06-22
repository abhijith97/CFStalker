console.log(process.argv[2]+" SUBMISSIONS \n")
var request=require("request");

request("http://codeforces.com/api/user.status?handle="+process.argv[2]+"&count=300", function(error, response, body)
{
	
	var t=JSON.parse(body);
	// console.log(t.result[1].problem.index);
	var len=t.result.length;
	var count=0;
	for(var i=0 ; i<len; i++)
	{
		if(t.result[i].problem.index==process.argv[3] && t.result[i].verdict=="OK")
		{
			count++;
			console.log("====================================================");
			// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(t.result[i].creationTimeSeconds*1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
console.log(count+")Level: " +t.result[i].problem.index+"| Name: " +t.result[i].problem.name + "| ID: " +t.result[i].problem.contestId + "| Tags: " +t.result[i].problem.tags + "| Time: " +formattedTime +  "\n" + "Verdict: "+t.result[i].verdict)
}
}
}
);


