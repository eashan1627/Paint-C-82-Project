var mouse_event = "empty";

var last_x, last_y;

canvas = document.getElementById("my-canvas");

ctx = canvas.getContext("2d");
color = "red";
width_of_line = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    mouse_event = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown") {
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y); 
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.arc(  current_position_of_mouse_x, current_position_of_mouse_y, 40, 0, 2*Math.PI);
        ctx.stroke();
    }
    last_x = current_position_of_mouse_x;
    last_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouse_event = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouse_event = "mouseleave";
}

function cleararea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}