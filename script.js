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

function createImgOverview(){
    for (let index = 0; index < myImgsArray.length; index++) {
        let singleImgPath = assembleImgPath(index);
        imgContainer.innerHTML += `<img src= "${singleImgPath}" class="single_imgage" onclick="openDialog(${index})">`; 
    }
}

function openDialog(index){
    let dialogRef = document.getElementById('imgDialog');
    dialogRef.showModal();
    let singleImgPath = assembleImgPath(index);
    dialogRef.innerHTML = assembleDialogElements(singleImgPath); 
}

function closeDialog(){
    let dialogRef = document.getElementById('imgDialog');
    dialogRef.close();
}

function assembleDialogElements(singleImgPath){
    return `<div class="container_dialog">
                <div class="container_close_button">
                    <button onclick="closeDialog()">
                        close
                    </button>
                </div>
                <img src= "${singleImgPath}" class="overlay_image" alt="enlarged_image">
                <div class="container_skip_button">
                    <button>
                        backwards
                    </button>
                    <button>
                        forwards
                    </button>
                </div>
            </div>`;
}

function toggleDNone(id){
    document.getElementById(id).classList.toggle("d_none");
}

function assembleImgPath(index){
    let singleImg = myImgsArray[index];
    let singleImgPath = rootImgFolder + singleImg;
    return singleImgPath;
}