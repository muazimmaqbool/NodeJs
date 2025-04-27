/*
->Mehods to share data:
    -How data is send and received between a client(like a web browser) and a sever (here built with node.js)
    -There are some methods out there to share and receive data according to their needs:
        1)GET
        2)POST
        3)PATCH
        4)PUT
        5)DELETE

    1)GET method: used to get request for some data/information from the server
                  example: when you enter an websites url in the browser, the browser send the GET to the server to
                           fetch the web page
                           
    2) POST method: used to send some new data to the server
                    example: when you fill a signup form and click submit, the browser sends a POST request with your details to the server

    3) PATCH method: used to update some part of the existing data on the server
                     example: when you edit your profile picture only, a PATCH request is sent to update just that part

    4) PUT method: used to completely update/replace existing data on the server
                   example: when you edit your entire profile information and save it, a PUT request replaces the old profile with the new one

    5) DELETE method: used to delete some data from the server
                      example: when you delete your account, a DELETE request is sent to remove your data from the server
*/