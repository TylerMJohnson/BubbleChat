# BubbleChat

Combined graph theory with a console that users can type and submit messages. These chat messages will generate a graph where each node is a word, and each edge is the space between words. The size of the node is determined by occurrences or frequency of input. Therefore, words with more frequency create a larger node and words with less frequency will have a smaller node. Users can click on nodes to browse the chat messages that contain that word.  

**How to start:**
Run app.js and load in your browser http://localhost:3000/chat
or http://localhost:3000/chat1 
Note: if you do load chat1, you should remove the edges which can be found in bubblechat1.html

A simple Express RESTFul API was created to POST and GET comments. 
Socket.io was also used to broadcase messages to other connected clients.
The data collection portion of this project can be found at https://github.com/TylerMJohnson/BubbleChatDataCollection

**Suggested Improvements***
**1.** D3.js custom tick method to calculate node positioning. The simulation parameters contradict themselves and the graph produced is not exactly what was envisioned. Ideally bigger nodes should go to the middle and smaller nodes on the outside. No nodes should overlap.

**2.** Decay functionality. Have nodes decay over time based on how many messages are inputted and the amount of concurrent connected users. This will allow for the focus of the conversation to easily change over time. The flaw at this time is that if a word is extremely popular in the morning like “morning” it will dominate the conversation and still be enormous later into the day.

**3.** MongoDB used to store and load data. MongoDB supports JSON files so the transition from the current system to the implementation of a MongoDB connection is minimal. The reason this first version did not use a database system is because the focus was not on the back-end development but to determine whether the front-end is possible.

**4.** Further integration of the machine learning library provided by Stanford's CoreNLP. This project has an AIExample.java class that shows how different attributes of sentences can be determined by their model. To be specific, taking input, feeding it into the model, determining sentiment or category and appending these values to the comment object.

**5.** Allow users to choose to filter nodes. Suggestion #3 allows for sentiment or category. Users can filter their view by positive, negative, neutral or a combination of these. Allow users to view specific categories such as “sports” “stocks” “general”. It is also evident that there needs to be a filter for inappropriate words so this application can be youth friendly.

**6.** Spam prevention. Prevent the users from repeating excessively or having a “bubble war.”

**7.** Limit the number of characters in an input string.

**8.** Use a dictionary to determine if words exist. Currently you can spam “sdfjdskfjdslf”.

**9.** Color themes. Allow users to pick the colors of bubbles based on theme. If two teams are playing a sport against one another, have a “warriors vs lakers” color theme.

**10.** Create a historical stimulator so you can rewind and watch bubbles develop over time.

**11.** Improved CSS to have the front-end be more appealing.
