const logo = document.querySelector(".logo")
logo.addEventListener("click", ()=>{
    location.reload();
})

const populate = async (value, currency) => {
    let myStr = "";
    let url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_XAWsZICRBRLh7K9UxuK05TdWOpRSKG20ckTuV2Nl&base_currency=" + currency
    let response = await fetch(url)
    let rJson = await response.json()
    document.querySelector(".output").style.display = "block"

    for (let key of Object.keys(rJson["data"])) {
        myStr += ` <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["value"] * value}</td>
                    </tr> 
                `
    }

    const table = document.querySelector("tbody");
    table.innerHTML = myStr;
}

const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[id='value']").value);
    const currency = document.querySelector("input[id='currency']").value;
    populate(value, currency)
})
