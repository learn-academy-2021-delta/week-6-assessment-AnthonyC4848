# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: You can migrate the tables with $rails db: migrate. the foreign key should be named id on the Student model to reference the Cohort model

  Researched answer: By migrating the database you can create a foreign key column named exactly the same on the Cohort model



2. Which RESTful routes must always be passed params? Why?

  Your answer: Show: show is the method that will find a specific page to display for you.
  Update: update method needs a param to find which item to update.
  Destroy: destroy method requires a param to delete a specific item the user selected.

  Researched answer:
  Show, Update, And Delete all require a param because they all need a specific piece of data to manipulate.



3. Name three rails generator commands. What is created by each?

  Your answer: rails c: This will take you into the rails console. This is used to check your work quickly in the terminal using ruby code. 
  rails s: This will start up your server for your rails app to run locally on your computer using your terminal.
  rails new app_name: This will create your new rails app!

  Researched answer: rails c: rails c is the sandbox used to test code and change data without making any real changes on the website.
  rails s: This command launches a web server of your application. This is how you will see your code put to work!
  rails new: This will create your new rails app pre making files for you.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students This is the index method. This will show all students on the home page.

method="POST"   /students This is the Create method. This will create the new student 

method="GET"    /students/new This is the new method. This will bring the form up for the user to input a new student

method="GET"    /students/2 This is the show method. This will find the second student created.

method="GET"    /students/2/edit This is the edit method. This will bring the form up fot the user to edit information about a student.

method="PATCH"  /students/2 This is the update method. This will update the student that was edited

method="DELETE" /students/2 This is the destroy method. This will delete the second student.



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1)As a user i can see a page with the title To Do List
2)As a user i can see an empty list with bullet points
3)As a user i can see a button called Add Item
4)As a user i can interact with Add item button and type in an item
5)As a user i can see the item on the to do list
6)As a user i can edit my post with an edit button.
7)As a user i can see the updated item replaced the old item on my list
8)As a user i can see a delete button to delete an item from my list
9)As a user i can see the to do list with 1 less item
10)As a user if item does not contain content. do not update or add item.