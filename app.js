

let tens = Math.floor(Math.random()*11);
let text;
if (tens===10) {
    text="sata (100)";
    console.log(text);
} else {
    ones = Math.floor(Math.random()*10);

    switch(tens) {
        case 0:
            text=('');
            break;
        case 1:
            if(ones==0) {
                text='kymmenen'
            } else {
                text='';
            } 
            break; 
        case 2:
            text=('kaksi');
            break;
        case 3:
            text='kolme';
            break;
        case 4:
            text=('neljä');
            break;
        case 5:
            text='viisi';
            break;
        case 6:
            text='kuusi';
            break;
        case 7:
            text='seitsemän';
            break;
        case 8:
            text='kahdeksan';
            break;
        case 9:
            text='yhdeksän';
            break;
        case 10:
            text='sata';
    }
    if(tens>1&&tens<10) {
        text+="kymmentä";
    } else {
        
    }
    switch(ones) {
        case 0:
            text+=('');
            if(tens===0) {
                text+='Nolla';
            }
            break;
        case 1:
            text+=('yksi');
            break;
        case 2:
            text+=('kaksi');
            break;
        case 3:
            text+='kolme';
            break;
        case 4:
            text+=('neljä');
            break;
        case 5:
            text+='viisi';
            break;
        case 6:
            text+='kuusi';
            break;
        case 7:
            text+='seitsemän';
            break;
        case 8:
            text+='kahdeksan';
            break;
        case 9:
            text+='yhdeksän';
            break;
        default:
            console.log("It seems something went wrong :/")
    }
    if(tens===1&&ones!=0) {
        text+="toista";
    }
    console.log(text+" ("+tens+''+ones+")");   
}
