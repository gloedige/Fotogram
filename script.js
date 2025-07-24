const imgContainer = document.getElementById('img_overview');
const rootImgFolder = "./img/";
const myImgsArray = ["20250320_121941.jpg_compressed.JPEG",
"20241016_080836.jpg_compressed.JPEG",
"20241026_122747.jpg_compressed.JPEG",
"20250603_083819.jpg_compressed.JPEG",
"20250518_111717.jpg_compressed.JPEG",
"20250421_113232.jpg_compressed.JPEG",
"20241010_131609.jpg_compressed.JPEG",
"20240725_172620.jpg_compressed.JPEG",
"20240725_172330.jpg_compressed.JPEG",
"20240708_152354.jpg_compressed.JPEG",
"20240704_122704.jpg_compressed.JPEG",
"20240704_120040.jpg_compressed.JPEG",
"20240702_143739.jpg_compressed.JPEG",
"20240308_092549.jpg_compressed.JPEG",
"IMG_2968.CR2_compressed.JPEG",
"20241031_202519.jpg_compressed.JPEG",
"20241010_182315.jpg_compressed.JPEG",
"20241008_115304.jpg_compressed.JPEG"];
const numberOfImg = myImgsArray.length;
document.addEventListener('click', closeDialog);

function createImgOverview(){
    index = 0;
    for (let index = 0; index < myImgsArray.length; index++) {
        let singleImgPath = assembleImgPath(index);
        imgContainer.innerHTML += `<img src= "${singleImgPath}" class="single_imgage" onclick="openDialog(${index})">`; 
    }
}

function openDialog(index){
    let dialogRef = document.getElementById('imgDialog');
    dialogRef.showModal();
    let singleImgPath = assembleImgPath(index);
    dialogRef.innerHTML = assembleDialogElements(singleImgPath, index); 
}

function closeDialog(event){
    let dialogRef = document.getElementById('imgDialog');
    if(event.target.contains(dialogRef) || event.target.id=="close_button"){
        dialogRef.close();
    }
    else{
        return;
    }
}

function assembleDialogElements(singleImgPath, index){
    return `<div class="container_dialog">
                <div class="container_close_button">
                    <button id="close_button" onclick="closeDialog(event)">
                        close
                    </button>
                </div>
                <img src= "${singleImgPath}" class="dialog_image" alt="enlarged_image">
                <div class="container_switch_button">
                    <button onclick="jumpImgBackwards(${index})">
                        backwards
                    </button>
                    <p class="img_info">${index+1} / ${numberOfImg}</p>
                    <button onclick="jumpImgForwards(${index})">
                        forwards
                    </button>
                </div>
            </div>`;
}

function jumpImgForwards(index){
    let dialogRef = document.getElementById('imgDialog');
    if(index==numberOfImg-1){
        index = 0;
    }
    else{
        index = index + 1;
    }
    let singleImgPath = assembleImgPath(index);
    dialogRef.innerHTML = assembleDialogElements(singleImgPath, index); 
}

function jumpImgBackwards(index){
    let dialogRef = document.getElementById('imgDialog');
    if(index==0){
        index = numberOfImg -1;
    }
    else{
        index = index - 1;
    }
    let singleImgPath = assembleImgPath(index);
    dialogRef.innerHTML = assembleDialogElements(singleImgPath, index); 
}

function toggleDNone(id){
    document.getElementById(id).classList.toggle("d_none");
}

function assembleImgPath(index){
    let singleImg = myImgsArray[index];
    let singleImgPath = rootImgFolder + singleImg;
    return singleImgPath;
}