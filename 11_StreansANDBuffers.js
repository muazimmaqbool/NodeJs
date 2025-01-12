/*
Streams:
    A stream is a sequence of data that is being movied from one point to another over time
    Examples:
        ->A data being moved over the internet from one computer to another.
        ->A data being transferred from one file to another within the same computer.

    ->In Node.js: the idea is to processs the streams of data in chunks as they arrive instead of waiting for the 
                  entire data to be available before processing.
                  Example:
                    ->Watching a video on youtube:
                            (you don't wait for the entire video to be downloaded/fetched to watch it, the data arrives in chunks
                            and you watch in chunks while the rest of the data arrives over time)

                    ->Similarly transferring file contents from A to B
                            (the contents arrive in chunks and you transfer in chunks while the remaining content arrive over time)
        
        ->This (processing data in chunks) prevents unnecessary data downloads and memory usage.

    ?Note: the question is how exactly is that sequence of data moved ? for that we will have a look at bufferes

Buffers:
    Lets understand buffers with the example of a bus with 30 seating capacity.
        - 30 : seating capacity
        (we don't know the pace at which people come)
        Scenario 1:
        - if 100 : people arrive
        - only 30 : people are accommodated
        - 70 : people in queue (waiting)

        Scenario 2:
        - if only 1 : person arrives
        - then this 1 person has to wait for atleast for 10 people to arrive (as minimum bus can go with is 30 people)
    
        ->So we can not control the pace at which people arrive, you can only decide when is the right time to send people on the ride

        ->So the arrive where people wait is "Buffer"

        ->Node.js can control the pace at which data arrives in the stream:
                - it can only decide when is the right time to send data for processing.
                - if there is data already processed or too little data to process. Node puts the arriving data in a buffer

            Buffer: is a intentionally small area that Node maintains in the run-time to process a stream of data

        Example:
            ->Streaming a video online:
                -if your internet speed is fast enough, the speed of the stream will be fast enough instantly fill up the buffer
                 and send it out for processing.
                - that will repeat till the stream is finished
               
                - if your internet speed is slow, after processing the first chunk of data that arrived,
                  the video player will display a loading spinner, which indicates it is waiting for more data to arrive
                
                -Once the buffer is filled up and the data is processed the video player shows the video.

                -While video is playing more data will continue to arrive and wait in the buffer
  
                (watch at 5:01 from #24)
 */
//Node.js provides Buffer as a global feature so it's not required to import it
const bufferValue=new Buffer.from("Muazim"); // or new Buffer.from("Muazim","utf-8"); optional



console.log("bufferValue:",bufferValue)
// o/p : bufferValue: <Buffer 4d 75 61 7a 69 6d> //buffer contains raw binary data
/* this is the raw binary data, but node.js prints the hexidecimal/base16 notation of the binary number as printing
  8 bits binary of every character can flood your terminal
  if you past 4d in hexidecimal to binary converter: you will get 
  4d to binary is: 01001101 and to decimal numbe is 77 and 77 is the unicode of M
*/

console.log("bufferValue:",bufferValue.toJSON())
// o/p: bufferValue: { type: 'Buffer', data: [ 77, 117, 97, 122, 105, 109 ] }
// each number here is the unicode character code for the character in the string Muazim


console.log("bufferValue:",bufferValue.toString())
//bufferValue: Muazim

//can also write to buffers
bufferValue.write("CSE") // or "javascript"

console.log("new bufferValue:",bufferValue.toString())
// o/p: new bufferValue: CSEzim
/*
buffers have limited memory the 3 character override 3 characters form Muaizm
Here only upto 6 characters memory is assigned to buffere as initial Value given to it has 6 characters
so if you give it new value : javascript only first 6 characters will be printed i.e javasc

*/