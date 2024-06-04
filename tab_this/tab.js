window.onload = function(){
    const tabbtn = document.querySelectorAll("#tab li");
    tabbtn.forEach(function(ele, idx){
        ele.addEventListener('click', function(){
            // this.classList = 'on';
            // this.classList += ' on'; 스피드는 얘가 더 빠름
            const siblings = this.parentElement.children;
            //나를 기준으로 나의 부모의 자식들(html object)을 siblings로 저장하겠다.
            for (let sibling of siblings) {
                sibling.classList.remove('on');
            }

            this.classList.add('on');
        })
    })
}