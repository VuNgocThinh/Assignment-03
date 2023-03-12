function handleSubmit() {
    // Lấy giá trị của input email và chuyển sang in thường
    const emailValue = document.getElementById('email').value;

    // Lấy element thẻ p hiển thị lỗi
    const errorEmail = document.getElementById('error-email');

    // Điều kiện là một email
    const checkMail = 
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Dùng match để kiểm tra email vừa nhập
    const check = emailValue.match(checkMail);

    // Lấy phần chứa thông tin user
    const sectionContent = document.querySelector('#personal-info .section-content')
    console.log('check section', sectionContent);

    // Lấy element để kiểm soát submit
    const submitControl = document.querySelector('.submit-email');
    if (check){
        sectionContent.style.display = 'block';
        submitControl.style.display = 'none';
        errorEmail.innerHTML = ' ';  
    } else{
        errorEmail.innerHTML = 'Vui lòng nhập đúng định dạng email';
    }

}


function handleOnMouseOver(element) {
    const viewMore = element.querySelector ('.View-more')
    viewMore.style.display = 'block';
    
}

function handleOnMouseout(element){
    const viewMore = element.querySelector ('.View-more')
    if (viewMore.innerHTML !== 'View less') {
        viewMore.style.display = 'none'; 
    }
      
}

function handleViewMore (element) {
    const parent = element.closest('.job-box-grid');
    const showHidden = parent.querySelector('.job-content');
    const viewMore = parent.querySelector('.View-more')

    if (showHidden.classList.value.includes('an')) {
        showHidden.classList.remove('an')
        element.innerHTML = "View less"
    } else {
        showHidden.classList.add('an')
        element.innerHTML = 'View more'
    }

    
}