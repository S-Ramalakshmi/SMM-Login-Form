document.addEventListener("DOMContentLoaded", () => {


const inputs = document.querySelectorAll(".image-input");

inputs.forEach(function(input) {
    input.addEventListener("change", function() {
        const file = this.files[0];

        if (file) {
            const img = this.nextElementSibling; 
            img.src = URL.createObjectURL(file);
        }
    });
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".img-part img").forEach(function(image) {
    image.addEventListener("click", function() {
        if (this.src) {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
};

    const { jsPDF } = window.jspdf;

    const btn = document.getElementById("btn");

    if (btn) {

        btn.onclick = async () => {

            // ===== GET VALUES =====
            const name = document.getElementById("name").value;
            const duration = document.getElementById("duration").value;
            const month = document.getElementById("Month").value;
            const reach = document.getElementById('reach').value;
            const followers = document.getElementById('followers').value;
            const content = document.getElementById('content').value;
            const profile = document.getElementById('profilevisit').value;
            const newfollower = document.getElementById('newfollower').value;

            const post = document.getElementById('post').value;
            const reel = document.getElementById('reel').value;
            const story = document.getElementById('story').value;
            const likes = document.getElementById('likes').value;
            const comment = document.getElementById('comment').value;
            const save = document.getElementById('save').value;
            const share = document.getElementById('share').value;

            const logoFile = document.getElementById("logo").files[0];
            const performImg1 = document.getElementById("perform-img1").files[0];
            const performImg2 = document.getElementById("perform-img2").files[0];
            const performImg3 = document.getElementById("perform-img3").files[0];
            const insight = document.getElementById("insight").files[0];
            const city = document.getElementById("city").files[0];

            // ===== CREATE PDF =====
            const doc = new jsPDF("p", "mm", "a4");
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();

            // ===== HELPER FUNCTION TO READ FILE =====
            const readFile = (file) => {
                return new Promise((resolve) => {
                    if (!file) return resolve(null);
                    const reader = new FileReader();
                    reader.onload = e => resolve(e.target.result);
                    reader.readAsDataURL(file);
                });
            };

            const logoBase64 = await readFile(logoFile);
            const perfBase64_1 = await readFile(performImg1);
            const perfBase64_2 = await readFile(performImg2);
            const perfBase64_3 = await readFile(performImg3);
            const insightBase64 = await readFile(insight);
            const cityBase64 = await readFile(city);

            // ================= PAGE 1 =================
            doc.addImage("smmui_page-0001.jpg", "JPEG", 0, 0, pageWidth, pageHeight);

            doc.setFont("helvetica", "bold");
            doc.setFontSize(40);
            doc.text(name, 20, 160);

            doc.setFontSize(20);
            doc.text(duration, 120, 220);

            if (logoBase64) {
                doc.addImage(logoBase64, "PNG", 20, 180, 40, 40);
            }

            // ================= PAGE 2 =================
            doc.addPage();
            doc.addImage("smmui_page-0001.jpg", "JPEG", 0, 0, pageWidth, pageHeight);

            const startX = 150;
            const startY = 90;

            doc.setFontSize(18);
            doc.text(reach, startX, startY);
            doc.text(followers, startX, startY + 20);
            doc.text(content, startX, startY + 40);
            doc.text(profile, startX, startY + 60);
            doc.text(newfollower, startX, startY + 80);
            doc.text(month,30,280)

            // ================= PAGE 3 =================
            doc.addPage();
            doc.addImage("smmui_page-0001.jpg", "JPEG", 0, 0, pageWidth, pageHeight);

            doc.text(post, startX, startY);
            doc.text(reel, startX, startY + 20);
            doc.text(story, startX, startY + 40);
            doc.text(likes, startX, startY + 60);
            doc.text(comment, startX, startY + 75);
            doc.text(save, startX, startY + 90);
            doc.text(share, startX, startY + 105);
            doc.text(month,30,280)

            // ================= PAGE 4 =================
            doc.addPage();
            doc.addImage("smmui_page-0001.jpg", "JPEG", 0, 0, pageWidth, pageHeight);

            if (perfBase64_1) {
                doc.addImage(perfBase64_1, "PNG", 20, 180, 40, 40);
            }
            if (perfBase64_2) {
                doc.addImage(perfBase64_2, "PNG", 80, 180, 40, 40);
            }
            if (perfBase64_3) {
                doc.addImage(perfBase64_3, "PNG", 140, 180, 40, 40);
            }

            doc.text(month,30,280)


            // ================= PAGE 5 =================
            doc.addPage();
            doc.addImage("smmui_page-0001.jpg", "JPEG", 0, 0, pageWidth, pageHeight);

           if (insightBase64) {
                doc.addImage(insightBase64, "PNG", 20, 180, 40, 40);
            }
            if (cityBase64) {
                doc.addImage(cityBase64, "PNG", 80, 180, 40, 40);
            }

            doc.text(month,30,280)


            // ===== SAVE PDF =====

            const fileName = `${name} - ${month} Report.pdf`;

            doc.save(fileName);
        };
    }
});


    // ====== PREVIEW BUTTON (INDEX PAGE) ======
    const previewBtn = document.getElementById("preview");
    const previewSection =document.getElementById('previewSection');
    const formSection = document.getElementById('formSection');
    const back = document.getElementById('back');

    if(back){
        back.addEventListener('click',()=>{
            formSection.style.display = "flex";
            previewSection.style.display = "none";            
        })
    }


    if (previewBtn) {
        previewBtn.addEventListener("click", () => {

            formSection.style.display = "none";
            previewSection.style.display = "flex";
            const name = document.getElementById("name").value;
            const clientName = document.getElementById('client-name')
            const logoFile = document.getElementById("logo").files[0]; 
            const clientDuration = document.getElementById("client-duration");
            const duration = document.getElementById('duration').value;


            clientName.innerHTML=name;
            clientDuration.innerHTML=duration;

        if (logoFile) {
            const reader = new FileReader();

            reader.onload = function (e) {
                logoBase64 = e.target.result; 
                document.getElementById("client-logo").src = logoBase64;
            };
            reader.readAsDataURL(logoFile);
        }

            //Page2

            const clientReach = document.getElementById('client-reach');
            const clientFollowers = document.getElementById('client-followers');
            const clientContent  = document.getElementById('client-content');
            const clientProfile =document.getElementById('client-profilevisit');
            const clientNewfollower = document.getElementById('client-newfollowers');

            const reach = document.getElementById('reach').value;
            const followers = document.getElementById('followers').value;
            const content = document.getElementById('content').value;
            const profile = document.getElementById('profilevisit').value;
            const newfollower = document.getElementById('newfollower').value;

            clientReach.innerHTML = reach;
            clientFollowers.innerHTML = followers;
            clientContent.innerHTML = content;
            clientProfile.innerHTML = profile;
            clientNewfollower.innerHTML = newfollower;


            //Page3
            const clientPost = document.getElementById('client-post');
            const clientReel = document.getElementById('client-reel');
            const clientStory  = document.getElementById('client-story');
            const clientLikes =document.getElementById('client-likes');
            const clientComment = document.getElementById('client-comment');
            const clientSave = document.getElementById('client-save');
            const clientShare  = document.getElementById('client-share');

            const post = document.getElementById('post').value;
            const reel = document.getElementById('reel').value;
            const story = document.getElementById('story').value;
            const likes = document.getElementById('likes').value;
            const comment = document.getElementById('comment').value;
            const save = document.getElementById('save').value;
            const share = document.getElementById('share').value;

            clientPost.innerHTML = post;
            clientReel.innerHTML = reel;
            clientStory.innerHTML = story;
            clientLikes.innerHTML = likes;
            clientComment.innerHTML = comment;
            clientSave.innerHTML = save;
            clientShare.innerHTML = share;
            

            //Page4

            const performImg1 = document.getElementById("perform-img1").files[0]; 
            const performImg2 = document.getElementById("perform-img2").files[0]; 
            const performImg3 = document.getElementById("perform-img3").files[0]; 

        if (performImg1) {
                const reader = new FileReader();

                reader.onload = function (e) {
                logoBase64 = e.target.result; 
                document.getElementById("client-perfImage1").src = logoBase64;
            };

            reader.readAsDataURL(performImg1);
        }         
        
        if (performImg2) {
                const reader = new FileReader();

            reader.onload = function (e) {
                logoBase64 = e.target.result; 
                document.getElementById("client-perfImage2").src = logoBase64;
            };

            reader.readAsDataURL(performImg2);
        }         

        if (performImg3) {
                const reader = new FileReader();

            reader.onload = function (e) {
                logoBase64 = e.target.result; 
                document.getElementById("client-perfImage3").src = logoBase64;
            };

            reader.readAsDataURL(performImg3);
        }       
        
        
        //page 5
        const insight  = document.getElementById("insight").files[0]; 
        const city = document.getElementById("city").files[0]; 

         if (insight) {
                const reader = new FileReader();

                reader.onload = function (e) {
                logoBase64 = e.target.result; 
                document.getElementById("client-insight").src = logoBase64;
            };

            reader.readAsDataURL(insight);
        }         
        
        if (city) {
                const reader = new FileReader();

            reader.onload = function (e) {
                logoBase64 = e.target.result; 
                document.getElementById("client-city").src = logoBase64;
            };

            reader.readAsDataURL(city);
        }                              
            });
        }



        //Login
        const login = document.getElementById('login-btn');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        login.addEventListener('click', (e) => {
            e.preventDefault();

            if (usernameInput.value.trim() && passwordInput.value.trim()) {
                window.location.href = "form.html";
            } else {
                alert("Please fill all fields");
            }
        });

        


        


    

