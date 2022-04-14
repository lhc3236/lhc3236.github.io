
  function sayHello(){
    var response = prompt("What's your name");
    alert("Hello,"+response+",try to solve this puzzle!");
  }
  sayHello();

  function puzzle(){
    var answer = prompt("上下不分，打一个字");
    alert("你的答案是："+answer+",正确答案是：卡")
    document.getElementById("co").innerHTML = "The correct answer is '卡'."
  }
