import { withRouter } from 'react-router-dom';

//export const MoreDetails = (props) => {
export default withRouter(function MoreDetails(props) {
    //חזרה לקניות
    function funcContinue() {
        debugger;
        props.history.push({ pathname: "/Nav2/Buy" });
    }

    return <>
        <h1 style={{ marginTop: '0px', marginLeft: "230px" }} >Details Abute {props.location.props.jewelryName}</h1>
        <form
            style={{ marginTop: '0px', marginLeft: "230px" }}
            className="w3-container w3-card-4">
            <div>
                <h2 style={{ extAlign: "center" }}></h2>
                <div class="card" >
                    {console.log('img', props.location.props.jewelryImage)}

                    {props.location.props.codeCategory == 1 ?
                        <>
                            < img src={`https://localhost:44363/Images/bracelet/${props.location.props.jewelryImage}`} width={"180px"}></img>
                            <h1 style={{ color: "black" }}>{props.location.props.jewelryName}</h1>
                            <p style={{ color: "black" }}>a very special bracelet in a beautiful color </p>
                        </>
                        :
                        props.location.props.codeCategory == 2 ?
                            <>
                                < img src={`https://localhost:44363/Images/Ring/${props.location.props.jewelryImage}`} width={"180px"}></img>
                                <h1 style={{ color: "black" }}>{props.location.props.jewelryName}</h1>
                                <p style={{ color: "black" }}>a very special ring in a beautiful color </p>
                            </>
                            :
                            props.location.props.codeCategory == 3 ?
                                <>
                                    < img src={`https://localhost:44363/Images/Earring/${props.location.props.jewelryImage}`} width={"180px"}></img>
                                    <h1 style={{ color: "black" }}>{props.location.props.jewelryName}</h1>
                                    <p style={{ color: "black" }}>a very special earring in a beautiful color </p>
                                </>
                                :
                                props.location.props.codeCategory == 4 ?
                                    <>
                                        < img src={`https://localhost:44363/Images/Cheins/${props.location.props.jewelryImage}`} width={"180px"}></img>
                                        <h1 style={{ color: "black" }}>{props.location.props.jewelryName}</h1>
                                        <p style={{ color: "black" }}>a very special chein in a beautiful color </p>
                                    </>
                                    :
                                    <h1>no image</h1>
                    }
                    <p style={{ color: "black" }}> made of  {props.location.props.material}</p>
                    <p style={{ color: "black" }} class="price">price: ₪{props.location.props.jewelryPrice}</p>
                    <p style={{ color: "black" }}>units In Stock:{props.location.props.unitsInStock}</p>
                    <p ></p>
                </div>
            </div>
            <button onClick={() => funcContinue()} class="w3-button w3-black">Close <i class="fa fa-shopping-cart"></i></button>
        </form>
    </>
})
