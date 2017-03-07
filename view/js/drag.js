(function () {
    const body = document.getElementsByTagName('body')[0];
    const modal = document.getElementById('dragomonster');
    const fs = require('fs');

    body.ondragover = (e) => {
        modal.style.display = "block";
        return false;
    };

    body.ondragleave = (e) => false;
    body.ondragend = (e) => false;
    body.ondrop = () => false;

    modal.ondragover = (e) => {
        modal.style.display = "block";
        return false;
    };

    modal.ondragleave = (e) => {
        modal.style.display = "none";
        return false
    };

    modal.ondragend = (e) => false;

    modal.ondrop = (e) => {
        e.preventDefault();
        modal.style.display = "none";

        let f = e.dataTransfer.files[0]
        console.log('File(s) you dragged here: ', f.path)
        console.log('File(s) name ',f.name)
        if(isTxt(f.name)){
            let data = dataFileTxt(f.path);
        }
        else {

        }

        return false;
    };

    const isTxt = (s)=> {
        return s.substring(s.length -3 ,s.length) == "txt"
    }

    const dataFileTxt = (s)=>{
        fs.readFile(s, 'utf8', (err, data) => {
            if (err) throw err;
            modChat(data);
        });
    }

    const modChat = (s)=>{
        let chatarea = document.getElementsByClassName('chat-textarea-inner')[0];
        chatarea.value = s.slice(0,-1);
    }

})();
