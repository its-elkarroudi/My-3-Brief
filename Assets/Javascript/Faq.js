const showResponse = document.getElementsByClassName('contentBox');

    for (i = 0; i<showResponse.length; i++) {
        showResponse[i].addEventListener('click', function() {
            this.classList.toggle('active');
        })
    }