(() => {
    var submit = document.querySelector("#submit");

    function orbits(e) {
        e.preventDefault();
        console.log("function works properly");
        var fname = document.querySelector("#fname").value;
        var lname = document.querySelector("#lname").value;
        var email = document.querySelector("#email").value;
        var phone = document.querySelector("#phone").value;
        var comment = document.querySelector("#comment").value;
        console.log(fname, lname, email, phone, comment);

        if(fname == "" || lname == "" || email == "" || phone == "" || comment == ""){
            alert("you missing some required field");
        }else{
            
            console.log("functionality works successfully");
            window.location.href = ' includes/index.php';
        }

    }


    submit.addEventListener("click", orbits, false);






































})();
