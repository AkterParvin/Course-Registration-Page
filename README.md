
# Course Registration

This simple Course Registration webpage was given as my assignment-07 project and i tried my best to make it pixel pefect.

## Best Features Of This Project

- Can avail courses according to our available credit hours.
- Can monitor total amount of used credit hours.
- will be alerted if we exceed the credit hour limit.



## Lessons Learned: 
## How to manage states according to the project>

i have use two different types of state in this projetc.
Number one is having an empty array as its default value,which is like below-
const [courses, setCourses] = useState([]);

This state will set the newly teken courses names to the list item which is showing into another component called Credit.jsx
and this state will also preserve the taken courses as objects into its given deafult empty array .
In this project i ahve used another type of state which is using a number(0) as its default value,such as-
 const [takenCoursePrice, setTakenCoursePrice] = useState(0);

 By this state my internal function can set the newly taken course price and then calculate it in order to validate the total price amount of those taken  courses does not exceed the given total credit hour limit.

 I hope my project will be functionabel project...
