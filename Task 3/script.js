let centers = [];
const cards = document.querySelector(".cards");
const searchBtn = document.querySelector(".searchBox").querySelector("button");

let today, d, m, y;
today = new Date();
d = today.getDate();
m = today.getMonth() + 1;
y = today.getFullYear();
today = `${d}-${m}-${y}`;

function cowinData(pincode) {
    const url = `http://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${today}`;
    fetch(url).then((response) => {
            return response.text();
        })
        .then((data) => {
            let call = JSON.parse(data);
                        
                        if (data.sessions !== []) {
                            data.sessions.map((e, i) => {
                                let centerInfo = [
                                    e.name,
                                    e.address,
                                    e.vaccine,
                                    e.date,
                                    e.fee_type,
                                    e.available_capacity,
                                    e.block_name,
                                    e.block_name,
                                    e.district_name,
                                    e.slots,
                                ]
                                centers.push(centerInfo)
                                let code = `
                <div class="card">
              <h1>
            <span class="category">Center Name - </span>
          ${centers[i][0]}
      </h1>
    <div class="innerCard">
                 <h3>
               <span class="category">Center Address - </span>
             ${centers[i][1]}
         </h3>
       <h3>
       <span class="category">Vaccine Name - </span>
       ${centers[i][2]}
       </h3>
               <h3>
               <span class="category">Date Of Vaccination - </span>
             ${centers[i][3]}
         </h3>
         <span class="category">Paid / Free  - </span>
    ${centers[i][4]}
  </h3>
  <h3>
    <span class="category">Minimum Age Limit - </span>
    ${centers[i][5]}
  </h3>
       <h3>
                  <span class="category">Available Capacity - </span>
                ${centers[i][6]}
            </h3>
          <h3>
          <span class="category">Block Name - </span>
        ${centers[i][7]}
    </h3>
  <h3>
                 <span class="category">District Name - </span>
               ${centers[i][8]}
           </h3>
         <h3>
         <span class="category">Available Slots - </span>
        ${centers[i][9].join(" | ")
    }
   </h3>
                 </div>
               </div>`;
                                cards.innerHTML += code;
                            });
                            
                            if (data.sessions.length === 0) {
                                alert("No Vaccinations Available")
                            }
                            centers = []
                        }
                             else {
            alert("Some error occured")
        }
    })
}

function repeat() {
    let pincode = input.value;
    cards.innerHTML = "";
    if (pincode === "") {
        alert("Enter pincode in the search box")
    } else if (pincode !== "") {
        cowinData(pincode)
        document.getElementById('input').value = "";
    }
}

const input = document.querySelector("#input")
input.addEventListener("keypress", (e) => {
    if (e.which === 13) {
        repeat()
    }
})

searchBtn.addEventListener("click", () => {
    repeat()
})
