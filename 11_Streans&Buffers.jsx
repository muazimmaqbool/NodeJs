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
            
    
 */