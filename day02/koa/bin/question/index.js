import inquirer from "inquirer";

export async function question() {
    return await inquirer.prompt([{
        type: "input",
        name: "packageName",
        message: "set package name"
    }, {
        type: "number",
        name: "port",
        message: "set port",
        default: () => 8080
    }, {
        type: "checkbox",
        choices: [
            {
                name: "koaRouter",
            }, {
                name: "koaStatic"
            }
        ],
        name: "middleware",
        message: "set middleware"
    }]);
}