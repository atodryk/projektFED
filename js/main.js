function move() {
    var MyBar = document.getElementsByClassName("MyBar");
    var width = 1;
    var id1 = setInterval(frame1, 20);
    var id2 = setInterval(frame2, 20);
    var id3 = setInterval(frame3, 20);
    function frame1() {
        if (width >= 40) {
        clearInterval(id1);
        }   
        else {
            width++;
            MyBar[0].style.width = width + '%';
        }
    }
    function frame2() {
        if (width >= 30) {
            clearInterval(id2);
        }   
        else {
                width++;
                MyBar[1].style.width = width + '%';
        }
    }
    function frame3() {
        if (width >= 60) {
            clearInterval(id3);
        }   
        else {
            width++;
            MyBar[2].style.width = width + '%';
        }
    }
}

    move();