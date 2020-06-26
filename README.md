# Edunomics Problem Statement

1. Frontend Task 
 
  There is an use case where a ball is dropped at certain height h1 to a fixed horizontal plane and then the ball bounces back at height h2  and drops at height h3 and so on till the height becomes 0.You have to develop a web application which will plot a graph between all the heights and  time and display total number of bounce, where coefficient of restitution  value can be changed via slider.

2. Backend Task

There is an use case where a ball is dropped at certain height h1 to a fixed horizontal plane and then the ball bounces back at height h2  and drops at height h3 and so on till the height becomes 0.You have to develop a Restful API in NodeJs which will
   -Return number of bounces and an array of coordinates that can be used to plot a graph between all the heights and  time, where coefficient of restitution,h1 are variable.
   -An API which will return result of past calculations.(For storing calculations use json file instead of any database). 


# Tasks solved - 
1. The web page displays the graph which has plotted the height of the ball vs time for a given coefficient of restitution and initial height.
2. The user can set a particular initial height and coefficient of restitution and hit the submit button. The backend side of things will use this information and perform calculations to obtain the values of the height of the ball for varying values of time - changing at a rate of 0.01s. The number of bounces is also being calculated.
3. After the calculations are performed they are stored in the mongoDB database(API), and the user is directed to the route /api/coordinates that displayes the calculated values for the height and coefficient of restitution entered by the user.
