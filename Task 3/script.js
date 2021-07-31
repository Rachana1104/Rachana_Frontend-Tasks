let centers = []
let today, d, m, y
today = new Date()
d = today.getDate()
m = today.getMonth() + 1
y = today.getFullYear()
today = `${d}-${m}-${y}`

function cowinData(pincode) {
    let url = `http://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${today}`;
    //console.log('cowinData');
    let response = fetch(url)
    fetch(url)
        .then(response => {
            response.json()
                .then(data => {
                    if (response.status === 200) {
                        let data = JSON.parse(this.responseText);
                        if (data.sessions !== []) {
                            data.sessions.map((e, i) => {
                                let centerInfo = [
                                    e.name,
                                    e.address,
                                    e.vaccine,
                                    e.date,
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
       <h3>
                  <span class="category">Available Capacity - </span>
                ${centers[i][5]}
            </h3>
          <h3>
          <span class="category">Block Name - </span>
        ${centers[i][6]}
    </h3>
  <h3>
                 <span class="category">District Name - </span>
               ${centers[i][7]}
           </h3>
         <h3>
         <span class="category">Available Slots - </span>
        ${centers[i][8].join(" | ")
    }
   </h3>
                 </div>
               </div>`;
                                cards.innerHTML += code;
                                return response.json();
                            })

                            if (data.sessions.length === 0) {
                                alert("No data Found")
                            }
                            centers = []

                            const input = document.querySelector("#input")
                            input.addEventListener("keypress", (e) => {
                                if (e.which === 13) {
                                    let pincode = input.value;
                                    cards.innerHTML = "";
                                }
                            })
                        } else {
                            alert("Some Error Occured")
                        }
                    }

                })

        })
}
cowinData();