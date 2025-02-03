# URL_Shortner
=======
This is backend of website which you can use to get a shortened id for your url. You will be redirected to the url given by you when ou got to a GET path with id.It also shows analytics like no. of clicks and their respective timestamps.It is implemeted using MongoDB and Node.js
The valid requests are:
POST "/url" : You will have to provide url in form-url-encoded and you will obtain an id.
GET "/:id" : Redirects to specified URL.
GET "/url/analytics/:id": Gives the total no. of clicks and timestamps of the clicks for the given id.
>>>>>>> 3b9f997 (Added README)
