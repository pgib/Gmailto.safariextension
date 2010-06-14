var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++)
{
	if (links[i].href.match(/^mailto:/))
	{
		links[i].originalHref = links[i].href;
		
		var queryStringIndex = -1; 
		var endIndex = links[i].href.length;
		var subject = "";
		var body = "";
		
		if ((queryStringIndex = links[i].href.indexOf("?")) != -1)
		{
			endIndex = queryStringIndex;
			
			var params = links[i].href.substring(queryStringIndex + 1).split("&");
			
			for (var j = 0; j < params.length; j++)
			{
				var param = params[j].split("=");
				
				switch (param[0])
				{
					case "subject":
					{
						subject = param[1];
					}
					break;
					
					case "body":
					{
						body = param[1];
					}
				}
			}
		}
		
		
		links[i].target = "_blank";
		links[i].href="http://mail.google.com/mail/?view=cm&fs=1&tf=1&to=" + escape(links[i].href.substring(7, endIndex)) + "&su=" + subject + "&body=" + body;
	}
}

