import { setOwnsBlueJeans } from "./transientstate.js"

/*
Object: provide UI controls for person taking survey to choose yes or no if
they own blue jeans

strategy:
1. a component function that produces html for two radio buttons
yes and no

*/




//this is a component function, becuase it generates html for a UI component
export const OwnJeanChoices = () => {
    document.addEventListener("change", handleOwnershipChange)
    let html = "<h2>Do you own a pair of blue jeans?</h2>"
     html += "<input type='radio' name='ownsJeans' value='true' /> Yes"
     html += "<input type='radio' name='ownsJeans' value='false' /> No"
     return html
}
//allthough these buttons have the same names, the value can only be true or false not both


 /*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
     const handleOwnershipChange = (changeEvent) => {
        if (changeEvent.target.name === "ownsJeans") {
            const convertedToBoolean = JSON.parse(changeEvent.target.value)
            setOwnsBlueJeans(convertedToBoolean)
        }
    }