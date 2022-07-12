import Logo from '../Images/Logo2.jpg';
import y1 from '../Images/y1.jpg';
import y4 from '../Images/y4.jpg';
import y5 from '../Images/y5.jpg';

export const HomePage = () => {
////===========================================================
////    פונקציות  המחליפות בין תצוגת התמונות
////===========================================================
    let slideIndex = 0;
    carousel();
    function carousel() {
        var x = document.getElementsByClassName("mySlides");
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
    }
    function currentDiv(n) {
        showDivs(slideIndex = n);
    }
    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
        }
        x[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " w3-opacity-off";
    }
   
    return <>
        <img src={Logo} width="20%" style={{ marginLeft: "250px" }} />
        <br></br>
        <div class="w3-content" style={{ maxWidth: "900px", marginLeft: "25%" }}>
            <img class="mySlides" src={y5} style={{ width: "70%", display: "none",marginLeft:"130px"}}  />
            <img class="mySlides" src={y4} style={{ width: "70%", display: "none",marginLeft:"130px"}} />
            <img class="mySlides" src={y1} style={{ width: "70%", display: "block" ,marginLeft:"130px"}} />
            <div class="w3-row-padding w3-section">
                <div class="w3-col s4">
                    <img class="demo w3-opacity w3-hover-opacity-off" src={y5} style={{ width: "100%", cursor: "pointer" }} onClick={() => currentDiv(1)} />
                </div>
                <div class="w3-col s4">
                    <img class="demo w3-opacity w3-hover-opacity-off" src={y4} style={{ width: "100%", cursor: "pointer" }} onClick={() => currentDiv(2)} />
                </div>
                <div class="w3-col s4">
                    <img class="demo w3-opacity w3-hover-opacity-off" src={y1} style={{ width: "100%", cursor: "pointer" }} onClick={() => currentDiv(3)} />
                </div>
            </div>
        </div>

        <p style={{ marginLeft: "250px", color: "gainsboro" }}>מותג תכשיטים שנוסד בדנמרק ב-1982 <br></br>
            ומאז הוא נחשב לאחד ממותגי חנויות<br></br>
            התכשיטים לנשים האהובים בעולם<br></br>
            :מגוון עיצובים יפהפיים של תכשיטי כסף כמו<br></br>
            טבעות, עגילים, שרשראות, צמידים וצ’ארמס<br></br>
            .מחומרי גלם אכותיים ביותר<br></br>
        </p>
    </>
}