import hd_yys from "./navi.json";
//변수 선언 하는 것과 같은 것. json을 hd_yys로 부르기로 하자

//const hd_yys ={}

window.onload = function(){
    //onload는 화면이 로딩이 끝나면 실행되는 이벤트
    // addEventListener와의 차이를 꼭 기록해둔다.
    //onload 이벤트는 딱 한번 실행된다. 주의!
    //만약 2번 쓰면 하나가 안 된다

    let navitag = "";
    
    for(x in hd_yys.gnb){
        navitag += `<li class='${hd_yys.gnb[x].cls[0]}'>
            <a href='${hd_yys.gnb[x].href}' class='${hd_yys.gnb[x].cls[1]}'>
            ${hd_yys.gnb[x].Text}
            </a>`;
       if(hd_yys.gnb[x].gnb_ul_li.length > 0) navitag += `<ul>`;
        for(j in hd_yys.gnb[x].gnb_ul_li){
            navitag +=`<li>
                <a href='${hd_yys.gnb[x].gnb_ul_li[j].href}'>
                     ${hd_yys.gnb[x].gnb_ul_li[j].Text}
                </a>
                </li>`
        }
        
        if(hd_yys.gnb[x].gnb_ul_li.length > 0)  navitag += `</ul>`;
        navitag += `</li>`;
    }

    document.querySelector("#gnb").innerHTML = navitag;
}

