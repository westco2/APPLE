   
        var ck = document.querySelector('.bbttnn');
        var inp = document.querySelector(".inp");
        inp.addEventListener('keypress', (e) => {
            if(e.target.value !== "") {
                
                document.querySelector(".hidden-wrap").style.height= "60px";
                inp.style.borderRadius= "10px 10px 0 0";
                
                document.querySelector(".inp2").focus(); // pw 클래스를 가진 요소에 포커스를 줍니다.
            } else{
                document.querySelector(".hidden-wrap").style.height= "0px";
                inp.style.borderRadius= "10px 10px 10px 10px";
            }
        });
        inp.addEventListener("keydown",()=>{
            
            ck.style.opacity='1';
        })
        

        document.addEventListener("DOMContentLoaded", function() {
            var passwordInput = document.querySelector('input[name="pw"]');
            passwordInput.addEventListener("keydown", function(event) {
                if (event.key === "Enter") {
                  
                    window.location.href = "http://127.0.0.1:5502/UI_A_2/iphone.html"; // 예시로 "/home"으로 이동하는 코드
                }
            });
        });