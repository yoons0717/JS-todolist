
// form창 보이게
function modalForm(){
    document.getElementById('formToAddlist').style.display='block'
}

// form 창닫기
function closeFunc(){
    // input 값 초기화
    document.getElementById('input_dept').value="";
    document.getElementById('input_content').value="";
    // display none으로 설정
    document.getElementById('formToAddlist').style.display='none'
}

function deleteParent(idcnt){
    let id = "itemId" + idcnt
    console.log(id)
    var target = document.getElementById(id);
    
    target.remove()
   
}
var idcnt=0;
function SubmitForm() {
    idcnt++
    
    let container = document.getElementById("ListContainer");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","item");
    newDiv.setAttribute("id","itemId"+idcnt);
    
    container.appendChild(newDiv);
    // 부서
    let newdept = document.createElement("div");
    newdept.setAttribute("class","item-dept");

    let newdeptval = document.getElementById("input_dept").value
    newdept.innerText =newdeptval 
    
    if(newdeptval=="Management")
        newDiv.setAttribute("style","border-top:3px solid #1766d8");
    else if(newdeptval=="Sales")
        newDiv.setAttribute("style","border-top:3px solid #f6c057");
    else{
        newDiv.setAttribute("style","border-top:3px solid #6f48e1");
    }
        // 내용
    let newcontent = document.createElement("div");
    newcontent.setAttribute("class","item-content");
    newcontent.innerText = document.getElementById("input_content").value
    
    // 아이콘들
    let icons = document.createElement("div");
    icons.innerHTML = '<button id="child" onclick="deleteParent(' +idcnt+ ')"><i class="far fa-trash-alt"></i></button>'
    // 붙이기
  
    newDiv.appendChild(newdept);
    newDiv.appendChild(newcontent);
    newDiv.appendChild(icons);
    closeFunc()
   
    
}