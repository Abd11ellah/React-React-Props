import React from "react";
import Card from "./card";
import contacts from "../contacts";
import Img from "./img";


function creatCard(contact){
    return(<Card
        key={contact.id}
        id={contact.id}
        name={contact.name}
        img={contact.img}
        tel={contact.tel}
        email={contact.email}
    />)
}


function App (){
    return(<div>
     <h1>My Contacts</h1>
     <Img img="https://i.pinimg.com/originals/91/4e/8b/914e8b6d5f7aba71e21c6a1983d18fd8.jpg"/>

    {contacts.map(creatCard)}

    {/* <Card
        name={contacts[0].name}
        img={contacts[0].img}
        tel={contacts[0].tel}
        email={contacts[0].email}
    />
    <Card
        name={contacts[1].name}
        img={contacts[1].img}
        tel={contacts[1].tel}
        email={contacts[1].email}
    />
    <Card
       name={contacts[2].name}
        img={contacts[2].img}
        tel={contacts[2].tel}
        email={contacts[2].email}
    /> */}
        </div>)
}
export default App;