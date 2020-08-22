import React from "react";

export const Header = props => {
    const { firstName, lastName, title } = { ...props }
    return (
        <div id="header" style={{ height: "15%", boxSizing: "borderBox", margin: 0, padding: 18, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: " #262424" }}>
            <div style={{ width: 100, height: 100, backgroundColor: "white", borderRadius: 54, overflow: "hidden", position: "relative", borderWidth: 4, borderStyle: "solid", borderColor: "#ffcb00", backgroundColor: " #262424" }}>
                <h1 style={{ fontFamily: "Montserrat", color: "#999", textAlign: "center", fontSize: 70, display: "flex", justifyContent: "center", marginTop: 8, marginLeft: 2 }}>{firstName[0]}</h1>
            </div>
            <div style={{ padding: 15, fontWeight: 700 }}></div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flexStart" }}>
                <div style={{ textAlign: "left", fontFamily: "Montserrat", color: "white", fontSize: 48, fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2 }}>{firstName} {lastName}</div>
                {
                    title.map((item, index) => {
                        return <div key={index} style={{ textAlign: "left", paddingLeft: 3, marginBottom: 5, fontsize: 13, color: "#eee", fontWeight: 400, fontFamily: "sans-serif", color: "white", letterSpacing: 5 }}>{item}</div>
                    })
                }

            </div>
        </div>
    )
}