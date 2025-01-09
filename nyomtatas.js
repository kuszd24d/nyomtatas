
function kalkulal() {
    
    var szelesseg = parseFloat(document.getElementById('szelesseg').value);
    var magassag = parseFloat(document.getElementById('magassag').value);
    
    var papirTipus = document.getElementById('papirtipus').value;
    var paperCost = 0;

 
    if (isNaN(szelesseg) || isNaN(magassag) || szelesseg <= 0 || magassag <= 0) {
        alert("Kérlek, adj meg érvényes szélességet és magasságot!");
        return;
    }

    var area = (szelesseg * magassag) / 100;  

    switch (papirTipus) {
        case "38":
            paperCost = 15; 
            break;
        case "32":
            paperCost = 20; 
            break;
        case "45":
            paperCost = 25; 
            break;
        case "65":
            paperCost = 35; 
            break;
    }

    var totalCost = area * paperCost;

    document.getElementById('terulet').textContent = area.toFixed(2); // Terület (dm²)
    document.getElementById('papir').textContent = paperCost; // Papírköltség (Ft/dm²)
    document.getElementById('koltseg').textContent = totalCost.toFixed(2); // Teljes költség (Ft)

    document.getElementById('valasz').style.visibility = "visible";
    

}
