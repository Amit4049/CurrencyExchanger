function currencyConverter(valNm){
    
    if(converter.taka.value <=0)
        window.alert("Enter Value greater than 0");
    else{
        
        document.getElementById("dollar").value=(valNm/84.9330).toFixed(2);
         document.getElementById("rupee").value=(valNm/1.18).toFixed(2);
         document.getElementById("won").value=(valNm/.9330).toFixed(2);
         document.getElementById("yuan").value=(valNm/.84).toFixed(2);
        document.getElementById("riyal").value=(valNm/27).toFixed(2);
    }
    
    
    
}