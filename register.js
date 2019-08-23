const axios = require('axios');

let base_url = "https://interns.bcgdvsydney.com";

axios.get(base_url+"/api/v1/key")
.then((result)=> {
    let key = result.data.key;
    let my_info = {
        name: "Sushant Chamlagai Adhikari",
        email: "sushant.adhikariProg@gmail.com"
    };
    axios.post(base_url+"/api/v1/submit?apiKey="+key, my_info)
    .then((data_submitted_res)=> {
        console.log(data_submitted_res.data);
    })
    .catch((error)=> {
        console.error(error);
    });

})
.catch((err)=> {
    console.error(err);
});