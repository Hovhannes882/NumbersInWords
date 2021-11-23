const input = document.querySelector("input");
const btn = document.querySelector(".btn");
const valEl = document.querySelector("p");

var nums = ["զրո","մեկ","երկու","երեք","չորս","հինգ","վեց","յոթ","ութ","ինը"];
var digNums2 = ["","տաս","քսան","երեսուն","քառասուն","հիսուն","վաթսուն","յոթանասուն","ութանասուն","իննիսուն"]

function checkVal(){
         if(input.value.length == 1){
             valEl.innerHTML = nums[input.value]
         }
         if(input.value.length == 2){
              var strNum = input.value.toString();
              var dig1 = strNum.charAt(0);
              var dig2 = strNum.charAt(1);
              var val;
              if(dig2 == 0){
                  val = digNums2[dig1];
              }else{
                  if(dig1 == 1){
                      val = digNums2[dig1]+"n"+nums[dig2];
                  }else{
                    val = digNums2[dig1]+nums[dig2];
                  }
              }
              valEl.innerHTML = val;
         }
         if(input.value.length == 3){
            var strNum = input.value.toString();
            var dig1 = strNum.charAt(0);
            var dig2 = strNum.charAt(1);
            var dig3 = strNum.charAt(2);
            var dig1Val,dig2Val,dig3Val;
            var val;
            if(dig1 == 1){
                dig1Val = "հարյուր "
            }else{
                dig1Val = nums[dig1] + " հարյուր ";
            }

            if(dig2 == 0){
                dig2Val = "";
            }else{
                dig2Val = digNums2[dig2]
            }

            if(dig3 == 0){
                dig3Val = ""
            }else{
                if(dig2 == 1){
                    dig3Val = "n" + nums[dig3];
                }else{
                    dig3Val = nums[dig3];
                }
            }

            val = dig1Val + dig2Val + dig3Val;
            valEl.innerHTML = val;
         }

         if(input.value.length == 4){
            var strNum = input.value.toString();
            var dig1 = strNum.charAt(0);
            var dig2 = strNum.charAt(1);
            var dig3 = strNum.charAt(2);
            var dig4 = strNum.charAt(3)
            var dig1Val,dig2Val,dig3Val,dig4Val;
            var val;
            if(dig1 == 1){
                dig1Val = "հազար ";
            }else{
                dig1Val = nums[dig1] + " հազար ";
            }

            if(dig2 == 0){
                dig2Val = ""
            }else{
                if(dig2 == 1){
                    dig2Val = " հարյուր "
                }else{
                    dig2Val = nums[dig2] + " հարյուր "
                }
            }

            if(dig3 == 0){
                dig3Val = "";
            }else{
                dig3Val = digNums2[dig3];
            }

            if(dig4 == 0){
                dig4Val = "";
            }else{
                if(dig3 == 1){
                    dig4Val = "n" + nums[dig4]
                }else{
                    dig4Val = nums[dig4]
                }
            }

            val = dig1Val + dig2Val + dig3Val + dig4Val;
            valEl.innerHTML = val;
         }
}

btn.addEventListener("click",function(e){
    checkVal()
})
