console.log("한번만 실행되지");

// 초기값을 읽고 조건을 읽고 참이라면 실행하고 연산식실행, 아직도 참이라면 실행하고 연산식실행
// 그러다가 조건이 거짓이 되는 순간 for문 종료

for(var i = 0; i < 5; i++ ){
console.log("나는 다섯번 실행되지");
}

//연산식
let count = 10;
    count += 100; //110
    count += 1; //111
    ++count; //112
    count++; //112

console.log(count); //113
// count++;  //count += 1 1씩 증가하겠다는 뜻(추가 저장)->후치연산,  ++count -> 전치연산
// count++; //10
// count; //11
// ++count; //12

lte multy = 10;
    multy = multy / 3;  //multy /= 3  나누기

//문자연산식

let mystudy = "리액트";
    mystudy = "리액트" + "뷰" ; //mystudy +="뷰"


let startjs = 10;
    startjs += "10"; //20
    startjs += "원"; //원에서 문자로 됨
    startjs += "100";
    startjs += "100";  //20원100100  ->문자결합은 결합만 하기 때문에 연결만됨