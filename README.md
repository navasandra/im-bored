# im-bored

The name of the project is pretty much self-explanatory - one push of a button gets you a random activity to do when you have no idea what you would like to do.
It gives you the possibility to reject the activity offered or save it to your list (you can later edit (add a link or your own comment) or remove the selected activity should you wish).

When asking for the activity, a call to bored-api (http://www.boredapi.com/) is made, if you want to save the activity, the data is passed to backend (java spring) and it's stored in h2 database embedded in application, if the shown activity is not to your liking and you decide to skip it, a new call to bored-api is made and a new activity is shown. 

*To do: 
**Add proper styling
**Add option to get an activity based on its type
