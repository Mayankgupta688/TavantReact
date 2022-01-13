function getData(){console.log("Hello All");
};

var data = getData;

(() => {
    console.log("Hello");
})();
