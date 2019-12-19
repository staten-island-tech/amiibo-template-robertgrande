import {elements} from './elements';

elements.amiiboForm.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        document.querySelector(".btn").click();
    }
});

function search(){
    elements.amiiboForm.addEventListener("submit", async function(e){
        e.preventDefault();
        const amiiboURL = `https://www.amiiboapi.com/api/amiibo/?character=${elements.amiiboName.value}`;
    });
}