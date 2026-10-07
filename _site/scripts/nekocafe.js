const username = "strife"; // change the username!!!
const posts_url = "https://cafe.frizzbees.dev/get_posts/1?name=";
const profile_url = "https://social.nekoweb.org/profile/?view=";
const post_url = "https://social.nekoweb.org/post/?id=";

// thanks max
(async () => {
    try {
        const request = await fetch(posts_url + username,);
        let json = await request.json();
        json = json[0]

        timestamp = json["timestamp"] * 1000
        time = new Date(timestamp).toLocaleString();
    
        div = document.getElementById("nekocafe-status")
        
        div.innerHTML = `
            <div class="box">
                <div class="boxlabel">
                    <p align="center" id="nekocafe-time" style="margin:3px; font-size:14px;">
                        ${time}
                    </p>
                </div>
                <div class="boxcontent">
                    <div class="flex" style="gap:5px;">
                        <a href="${profile_url + username}"><img id="nekocafe-pfp" src=${json["image"]} height=50"></a>
                        
                        <div class="flex-column" style="gap:5px;">

                            <div class="flex" style="gap:10px;">

                                <p id="nekocafe-poster" style="margin:0px; font-size:16px;"><a href="${profile_url + username}">${json["name"]}</a></p>

                            </div>

                            <p id="nekocafe-text" style="margin:0px; word-wrap: break-word;><a href="${post_url + json["id"]}">${json["post"]}</a></p>

                        </div>
                    </div>
                    
                </div>
                <!-- <div class="boxlabel" style="text-align:center; font-size:12px;">${time}</div> -->
            </div>
            
        ` // make sure the height on the img fits your page!!!

    } catch (error) {
        console.error(error)
    }
})();
