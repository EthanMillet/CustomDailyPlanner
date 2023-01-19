

$(function () {
  

    var text9 = $("#hour-9").find("textarea");
    var text10 = $("#hour-10").find("textarea");
    var text11 = $("#hour-11").find("textarea");
    var text12 = $("#hour-12").find("textarea");
    var text1 = $("#hour-1").find("textarea");
    var text2 = $("#hour-2").find("textarea");
    var text3 = $("#hour-3").find("textarea");
    var text4 = $("#hour-4").find("textarea");
    var text5 = $("#hour-5").find("textarea");
    var saveBtn = $('.saveBtn');
    saveBtn.on('click', saveFunc);

    function saveFunc() {
        for (i = 1; i < 13; i++) {
            if (i != 6 && i != 7 && i != 8) {
    var tasks = $("#hour-" + i).find("textarea").val();
        localStorage.setItem("task" + i, JSON.stringify(tasks));
   };
    }
   }
    
    
   var timeformat = dayjs().format('H')
   console.log(timeformat);
    for (i = 9; i < 24; i++) {
        
        if (timeformat > i) {
            $(".hour-" + i).removeClass("future")
            $(".hour-" + i).addClass("past")
        } else if (timeformat === i) {
            $(".hour-" + i).removeClass("future")
            $(".hour-" + i).addClass("present")
        }
        else {
            
        }

};


        function readStorage() {
            var task9 = localStorage.getItem('task9');
            var task10 = localStorage.getItem('task10');
            var task11 = localStorage.getItem('task11');
            var task12 = localStorage.getItem('task12');
            var task1 = localStorage.getItem('task1');
            var task2 = localStorage.getItem('task2');
            var task3 = localStorage.getItem('task3');
            var task4 = localStorage.getItem('task4');
            var task5 = localStorage.getItem('task5');
            if (task9 || task10 || task11 || task12 || task1 || task2 || task3 || task4 || task5) {
                var tasks9 = JSON.parse(task9);
                var tasks10 = JSON.parse(task10);
                var tasks11 = JSON.parse(task11);
                var tasks12 = JSON.parse(task12);
                var tasks1 = JSON.parse(task1);
                var tasks2 = JSON.parse(task2);
                var tasks3 = JSON.parse(task3);
                var tasks4 = JSON.parse(task4);
                var 
                tasks5 = JSON.parse(task5);

                text9.append(tasks9);
                text10.append(tasks10);
                text11.append(tasks11);
                text12.append(tasks12);
                text1.append(tasks1);
                text2.append(tasks2);
                text3.append(tasks3);
                text4.append(tasks4);
                text5.append(tasks5);
            } else {
                task9 = [];
                task10 = [];
                task11 = [];
                task12 = [];
                task1 = [];
                task2 = [];
                task3 = [];
                task4 = [];
                task5 = [];
            }
            return task1 + task2 + task3 + task4 + task5 + task9 + task10 + task11 + task12;
        }
readStorage();

    var timeDisplayEl = $('#currentDay')
    var Date = dayjs().format('MMMM DD YYYY');
    timeDisplayEl.append(Date);
  });
  
