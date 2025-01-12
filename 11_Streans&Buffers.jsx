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
*/