const calculatetemp=()=>{
    const numbertemp=document.getElementById("temp").value;
    const tempselected=document.getElementById("temp_diff");
    const valuetemp=temp_diff.options[tempselected.selectedIndex].value;
    const celtofah=(c)=>{
        let f=Math.round((c*9/5)+32);
        return f;
    }
    const fahtocel=(f)=>{
        let c=Math.round((f-32)*5/9);
        return c;
    }
    let result;
    if(valuetemp=="cel"){
        result=celtofah(numbertemp);
        document.getElementById("resultcontainer").innerHTML= `=${result}celcius`
    }
    else{
        result=fahtocel(numbertemp);
        document.getElementById("resultcontainer").innerHTML= `=${result}farenheit`
    }
}