//ค้นหารูปภาพตาม keyword ใช้ index เพื่อบอกว่าเป็นรูปที่เท่าไหร่แล้วกันรูปซ้ำ
function appendImageElement(keyword, index){
    const imgElem = document.createElement('img');
    // imgElem.src = 'https://source.unsplash.com/400x225/?' + keyword + '&sig=' + index;
    imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imgElem); //ใส่ imgElem เข้าไปเป็นลูกของ galleryElem
}

function removePhotos(){
    const galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML = ''; // ดึง html ที่อยู่ภายใน div gallery ออกมาได้ และเซ็ตเป็นค่าว่าง

}

function searchPhotos(event){
    const keyword = event.target.value
    if(event.key === 'Enter' &&  keyword !== ''){ //เช็คว่า user กด Enter มาและ keyword ไม่ว่างใช่ไหม ถ้าใช้ให้ไปหารูป
        removePhotos();
        for(let i = 1; i < 10; i++){
            appendImageElement(keyword,i);
        }
    }
}

function run() {
    // appendImageElement('dog',1);
    // appendImageElement('dog',2);
    // appendImageElement('dog',3);
    // for(let i = 1; i < 10; i++){
    //     appendImageElement('dog',i);
    // }

    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown', searchPhotos) //event ที่ เวลา user พิมข้อมูลเข้ามาจะเรียกใช้ event นี้ ซึ่งพอเกิดแล้วจะเรียกฟังก์ชั่น searchPhotos
}

run();