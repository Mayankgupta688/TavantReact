

export default function DummyComponent() {
    var userName = "Mayank";
    setTimeout(() => {
        userName = "Anshul";
        alert("Updated User Name is: " + userName);
    }, 5000)
    return(
        <h1>Hello User: {userName}</h1>
    )
}