var friends = require("../data/friends");

module.exports = function(app) 
{
    app.get("/api/friends", function(req, res) 
    {
        console.log(friends);
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res)
     {
        var newFriend = req.body;
        console.log(newFriend.name);
        console.log(newFriend.picture);
        console.log("_________________________________________________");
        var bestFriend = [];

        function genFriend()
        {
            
            var topScore = 999;
            for(let i of friends)
            {
                var current = 0;
                console.log(i.name);
                for(var j = 0; j<10; j++)
                {
                    console.log(i.scores[j]);
                    console.log(newFriend.scores[j]);
                    current += Math.abs(i.scores[j] - newFriend.scores[j]);
                    console.log("Current Score: " + current);
                }
                if(current <= topScore)
                {
                    topScore = current;
                    bestFriend = i;
                }
            }
        }

        genFriend();
        console.log(bestFriend);
        friends.push(newFriend);
        res.send(bestFriend);
    });
};