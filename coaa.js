axios.get("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
            "x-rapidapi-key": "601658785cmshef7fb52de4dea3ep1aa7e1jsn69d3aee4fc37"
        }
    })
    .then(response => {
        console.log(response.data);

        if (response.data.countries_stat.length >= 0) {
            var temp = "";
            response.data.countries_stat.forEach(u => {
                temp += "<tr>";
                temp += "<td>" + u.country_name + "</td>";
                temp += "<td>" + u.cases + "</td>";
                temp += "<td>" + u.active_cases + "</td>";
                temp += "<td>" + u.deaths + "</td>";
                temp += "<td>" + u.new_cases + "</td>";
                temp += "<td>" + u.new_deaths + "</td>";
                temp += "<td>" + u.serious_critical + "</td>";
                temp += "<td>" + u.tests_per_1m_population + "</td>";
                temp += "<td>" + u.total_cases_per_1m_population + "</td>";
                temp += "<td>" + u.total_recovered + "</td>";
                temp += "<td>" + u.total_tests + "</td></tr>";
            })

            document.getElementById("data").innerHTML = temp;

        } else {
            alert("Message");
        }

        const tableHead = document.querySelector(".container");

        tableHead.addEventListener("click", function() {
            console.log('Clicked');
            response.data.countries_stat.sort(function(a, b) {
                if (a > b) return 1;
                if (a < b) return -1;
                return 0;
            });
        });


    }, err => {
        console.log(err)
    })