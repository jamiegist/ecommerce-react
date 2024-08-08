export function Home() {
    return (
        <div className="home-container container-fluid text-center col-3 mt-4">
            <h1>Welcome to Kiwi Records!</h1>
            <img className="kiwi img-fluid mt-3" src={require("../images/kiwi.jpeg")} alt="" />
            <h2>You're so close to your new favorite record!</h2>
        </div>
    );
}