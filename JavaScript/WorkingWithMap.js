var myArray = [10, 20, 30, 40, 50, 60, 200, 300];

var newArray = myArray.map(function(val) {
    return val + 100;
})

var employeeList = [{
        name: "Mayank Gupta",
        avatar: "https://image.shutterstock.com/image-photo/smiling-black-white-coworkers-looking-600w-648579007.jpg",
        createdAt: "Today",
        id: "1"
    }, {
        name: "Anshul Gupta",
        avatar: "https://image.shutterstock.com/image-photo/smiling-black-white-coworkers-looking-600w-648579007.jpg",
        createdAt: "Today",
        id: "2"
    }, {
        name: "Ankit Gupta",
        avatar: "https://image.shutterstock.com/image-photo/smiling-black-white-coworkers-looking-600w-648579007.jpg",
        createdAt: "Today",
        id: "3"
    }, {
        name: "Meha Gupta",
        avatar: "https://image.shutterstock.com/image-photo/smiling-black-white-coworkers-looking-600w-648579007.jpg",
        createdAt: "Today",
        id: "4"
    }, {
        name: "Aniket Gupta",
        avatar: "https://image.shutterstock.com/image-photo/smiling-black-white-coworkers-looking-600w-648579007.jpg",
        createdAt: "Today",
        id: "5"
}];

var newEmployee = employeeList.map(function(employee) {
    return {
        userName: employee.name,
        userId: employee.id
    }
});
