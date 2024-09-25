Report for the debugging of the programs. For making the project interesting, the developer has made a fuzzer using Machine Learning that will actually fuzz the functions inside the code and tell us possible errors. For doing this, we are going to make a harness which will take function make a huge amount of testcases similar to that of AFLFuzzer that can fuzz software but we will not be having any ASAN (Address Sanitizers) here as our program is written in Python and not in C/C++ but we still make use of this somewhere in the code so we will compile it temporarily with the ASAN function when using GCC and it may tell us possible debug information using the stack. Let's proceed with the neural network fuzzing.

This is kind of a coverage based fuzzing so let's move ahead in this. 



Let's view the tree analysis how and from where the images were analysed in video, image, and other formats, even in live video:


|index|Filename|Annotation tag|Upper left corner X|Upper left corner Y|Lower right corner X|Lower right corner Y|Origin file|Origin frame number|Origin track|Origin track frame number|isNight|
|---|---|---|---|---|---|---|---|---|---|---|---|
|0|dayTraining/dayClip1--00000\.jpg|go|698|333|710|358|dayTraining/dayClip1/dayClip1Shutter0\.000800-Gain-0\.mp4|0|dayTraining/dayClip1/dayClip1Shutter0\.000800-Gain-0\.mp4|0|0|
|1|dayTraining/dayClip1--00000\.jpg|go|846|391|858|411|dayTraining/dayClip1/dayClip1Shutter0\.000800-Gain-0\.mp4|0|dayTraining/dayClip1/dayClip1Shutter0\.000800-Gain-0\.mp4|0|0|
|2|dayTraining/dayClip1--00001\.jpg|go|698|337|710|357|dayTraining/dayClip1/dayClip1Shutter0\.000800-Gain-0\.mp4|1|dayTraining/dayClip1/dayClip1Shutter0\.000800-Gain-0\.mp4|1|0|
|3|dayTraining/dayClip1--00001\.jpg|go|847|390|859|410|dayTraining/dayClip1/dayClip1Shutter0\.000800-Gain-0\.mp4|1|dayTraining/dayClip1/dayClip1Shutter0\.000800-Gain-0\.mp4|1|0|
|4|dayTraining/dayClip1--00002\.jpg|go|698|331|710|356|dayTraining/dayClip1/dayClip1Shutter0\.000800-Gain-0\.mp4|2|dayTraining/dayClip1/dayClip1Shutter0\.000800-Gain-0\.mp4|2|0|

|index|Filename|Annotation tag|Upper left corner X|Upper left corner Y|Lower right corner X|Lower right corner Y|Origin frame number|isNight|
|---|---|---|---|---|---|---|---|---|
|0|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00000\.jpg|1|698|333|710|358|0|0|
|1|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00000\.jpg|1|846|391|858|411|0|0|
|2|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00001\.jpg|1|698|337|710|357|1|0|
|3|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00001\.jpg|1|847|390|859|410|1|0|
|4|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00002\.jpg|1|698|331|710|356|2|0|

|index|image\_id|label|x\_min|y\_min|x\_max|y\_max|frame|isNight|
|---|---|---|---|---|---|---|---|---|
|0|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00000\.jpg|1|698|333|710|358|0|0|
|1|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00000\.jpg|1|846|391|858|411|0|0|
|2|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00001\.jpg|1|698|337|710|357|1|0|
|3|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00001\.jpg|1|847|390|859|410|1|0|
|4|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00002\.jpg|1|698|331|710|356|2|0|

|index|image\_id|label|x\_min|y\_min|x\_max|y\_max|frame|isNight|clipNames|
|---|---|---|---|---|---|---|---|---|---|
|0|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00000\.jpg|1|698|333|710|358|0|0|dayClip1|
|1|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00000\.jpg|1|846|391|858|411|0|0|dayClip1|
|2|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00001\.jpg|1|698|337|710|357|1|0|dayClip1|
|3|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00001\.jpg|1|847|390|859|410|1|0|dayClip1|
|4|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00002\.jpg|1|698|331|710|356|2|0|dayClip1|

|index|image\_id|label|x\_min|y\_min|x\_max|y\_max|frame|isNight|clipNames|
|---|---|---|---|---|---|---|---|---|---|
|0|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00000\.jpg|1|698|333|710|358|0|0|dayClip1|
|1|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00000\.jpg|1|846|391|858|411|0|0|dayClip1|
|2|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00001\.jpg|1|698|337|710|357|1|0|dayClip1|
|3|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00001\.jpg|1|847|390|859|410|1|0|dayClip1|
|4|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip1/frames/dayClip1--00002\.jpg|1|698|331|710|356|2|0|dayClip1|

|index|image\_id|label|x\_min|y\_min|x\_max|y\_max|frame|isNight|clipNames|
|---|---|---|---|---|---|---|---|---|---|
|0|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip10/frames/dayClip10--00000\.jpg|1|323|288|335|308|0|0|dayClip10|
|1|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip10/frames/dayClip10--00000\.jpg|1|506|376|518|396|0|0|dayClip10|
|2|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip10/frames/dayClip10--00000\.jpg|1|587|369|599|389|0|0|dayClip10|
|3|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip10/frames/dayClip10--00000\.jpg|3|210|261|222|279|0|0|dayClip10|
|4|\.\./input/lisa-traffic-light-dataset/dayTrain/dayTrain/dayClip10/frames/dayClip10--00001\.jpg|1|330|286|342|306|1|0|dayClip10|

