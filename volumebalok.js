function hitungVolume() {
    const inputPanjangElement = document.getElementById("inputPanjang");
    const inputLebarElement = document.getElementById("inputLebar");
    const inputTinggiElement = document.getElementById("inputTinggi");
    const hasilPerhitunganElement = document.getElementById("hasilPerhitungan");

    const panjang = parseFloat(inputPanjangElement.value);
    const lebar = parseFloat(inputLebarElement.value);
    const tinggi = parseFloat(inputTinggiElement.value);

    if (isNaN(panjang) || isNaN(lebar) || isNaN(tinggi) || panjang <= 0 || lebar <= 0 || tinggi <= 0) {
        hasilPerhitunganElement.innerText = "Masukkan panjang, lebar, dan tinggi yang valid (bilangan positif).";
    } else {
        const volume = panjang * lebar * tinggi; //Rumus Volume Balok 
        hasilPerhitunganElement.innerText = `Volume balok dengan panjang ${panjang}, lebar ${lebar}, dan tinggi ${tinggi} adalah ${volume}`;
    }

    if (panjang < 0 || lebar < 0 || tinggi < 0) {
        alert("Tidak dapat melakukan perhitungan dengan bilangan negatif.");
    }
}
