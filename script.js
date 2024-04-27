function rot13()
{

    let textBox = document.getElementById("input-box");
    let data = textBox.value;

    document.getElementById("output-box").value = encryptAndDecrypt(data);
}

function changeText(id)
{
    data = document.getElementById(`${id}`).innerHTML
    document.getElementById(id).innerHTML = encryptAndDecrypt(data);
}

function encryptAndDecrypt(text)
{

    let listOne = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
    let listTwo = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    text = text.split("");
    
    for(let i = 0; i < text.length; i++)
    {
        if(listOne.includes(text[i]))
        {
            text[i] = listTwo[listOne.indexOf(text[i])];
        }

        else if(listTwo.includes(text[i]))
        {
            text[i] = listOne[listTwo.indexOf(text[i])];
        }

        else if(listOne.includes(text[i].toLowerCase()))
        {
            text[i] = listTwo[listOne.indexOf(text[i].toLowerCase())].toUpperCase();
        }

        else if(listTwo.includes(text[i].toLowerCase()))
        {
            text[i] = listOne[listTwo.indexOf(text[i].toLowerCase())].toUpperCase();
        }
    }
    return text.join("");
}
