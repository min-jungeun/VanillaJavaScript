// console.log("한번만 실행되지");

// 초기값을 읽고 조건을 읽고 참이라면 실행하고 연산식실행, 아직도 참이라면 실행하고 연산식실행
// 그러다가 조건이 거짓이 되는 순간 for문 종료

// for(var i = 0; i < 5; i++ ){
// console.log("나는 다섯번 실행되지");
// }

//연산식
let count = 10;
    count += 100; //110
    count += 1; //111
    ++count; //112
    count++; //112

// console.log(count); //113
// count++;  //count += 1 1씩 증가하겠다는 뜻(추가 저장)->후치연산,  ++count -> 전치연산
// count++; //10
// count; //11
// ++count; //12

let multy = 10;
    multy = multy / 3;  //multy /= 3  나누기

//문자연산식

let mystudy = "리액트";
    mystudy = "리액트" + "뷰" ; //mystudy +="뷰"


// let startjs = 10;
    // startjs += "10"; //20
    // startjs += "원"; //원에서 문자로 됨
    // startjs += "100";
    // startjs += "100";  //20원100100  ->문자결합은 결합만 하기 때문에 연결만됨


    // let meg = "";
    // for(let i = 0; i<10; i++){
    //     meg +=" 나 \"열번\"나오게 해줘 \n";
    // }

    // console.log(meg)

    const nav_data = [
        {
            gnb_li_a : "회사소개",
            gnb_li_href : "./company.html"
        },
        {
            gnb_li_a : "제품소개",
            gnb_li_href : "./product.html"
        },
        {
            gnb_li_a : "커뮤니티",
            gnb_li_href : "./board.html"
        },
        {
            gnb_li_a : "인트라넷",
            gnb_li_href : "./intro.html"
        },
        
    ]

    // object 접근법
    // console.log(nav_data[1].gnb_li_href);
    // console.log(nav_data[1]["gnb_li_href"]);

    let mygnb ="";
    for(let liea = 0; liea < nav_data.length; liea++ ){
        mygnb += nav_data[liea].gnb_li_href;
    }
    console.log(mygnb);

    let mygnb2 ="";
    for(let v in nav_data){
        // console.log("forin문처리 : ",v);
        mygnb2 += `${nav_data[v].gnb_li_href}\n` ;
    }
    console.log(mygnb2);
    


    // document.getElementsByClassName("gnb").length;  //gnb로 된 class 몇개인가
    // document.querySelectorAll(".gnb").length;