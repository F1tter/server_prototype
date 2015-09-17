var http = require("HTTP");
var twitterAPI = ('https://api.twitter.com/1.1/statuses/');
var userName = ("f1tter_dev");
var twitterUser = http.get(twitterAPI + userName + ".json", function(res){
    var twitterData = res.val();
    return twitterData;
});

var values {
    Uname: "twiterUserJSON.user",
    Text: "twitterUserJSON.text",
    Uimage: "twitterUserJSON.profile_image_url"
};

//set up function to loop 
	//for (var key in values){

	//}
		//write new data to page.