function copy(id) {
    const text = document.getElementById(id).innerText;

    navigator.clipboard.writeText(text).then(() => {
        alert("✅ Address copied successfully!");
    }).catch(() => {
        alert("❌ Copy failed.");
    });
}

function showQR(type){

    let address="";

    if(type==="btc"){
        address="134d2BxANeKMKUivhXGPRh2YaJKvkgdmj7";
    }

    if(type==="eth"){
        address="0x4aefad74f6048c4653c8a8d5937602a01c6cea72";
    }

    if(type==="usdt"){
        address="0x4aefad74f6048c4653c8a8d5937602a01c6cea72";
    }

    const box=document.getElementById(type+"qr");

    if(box.innerHTML!=""){
        box.innerHTML="";
        return;
    }

    box.innerHTML=
    `<img src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(address)}" alt="QR Code">`;

}
