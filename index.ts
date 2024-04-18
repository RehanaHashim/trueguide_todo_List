#! /user/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"
 
let todoList: string[] = [];
let conditions = true;
  
console.log(chalk.bgBlueBright.bold("\n\t Welcome to my project todo-List Application\n \t"));

let main = async () => {
    while(conditions){
        let option = await inquirer.prompt(
            [
                {
                    name: "choice",
                    type: "list",
                    message:"Select an option you want to do:",
                    choices: ["Add Task", "Delete task", "Update Task", "View Todo-List" ,"Exit"], 
                }
            ]
        );
            
            if(option.choice === "Add Task")
                {
                await addTask()
                }
            else if (option.choice === "Delete task")
                {
                await deleteTask()
                }
            else if (option.choice === "Update Task" )
                {
                 await updateTask()
                }
            else if (option.choice === "View Todo-List")
                {
                 await viewTask()
                }
            else if(option.choice === "Exit"){
                conditions = false;
            }
    }
}

// function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt(
        [
            {
                name: "task",
                type: "type",
                message: "Enter your new task: ",
            }
        ]
    );
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in todo-List.`);
}

// function to view all todo-list tasks

let viewTask = async () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index)=>{
        console.log(`${index + 1}: ${task}`)
    }
);
}
// function to delete a task from the list
let deleteTask = async () => {
    await viewTask()

    let taskIndex = await inquirer.prompt(
        [
            {
                name: "index",
                type: "number",
                message: "Enter the index no. of the task you want to delete :",
            }
        ]
    );
        let deleteTask = todoList.splice(taskIndex.index - 1,1);
        console.log(`\n ${deleteTask} This task has been deleted successfully from your todo-List.`)
}

// function to update Task
let updateTask = async() => {
    await viewTask()
    let update_task_index = await inquirer.prompt(
        [
            {
                name: "index",
                type: "number",
                message: "Enter the `index task you want to update: "
            },
        {
            name: "new_task",
            type: "input",
            message: "Now your enter new task: ",

        }
        ]);
todoList[update_task_index.index - 1] = update_task_index.new_task
console.log(`\n Task at index no. ${update_task_index.index - 1} Updated successfully [for updated list check option : "view Todo-List".]`)
}
main();
       

