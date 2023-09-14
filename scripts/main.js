import { OwnJeanChoices } from "./ownsjeans.js"
import { saveSubmission } from "./savesubmissions.js"
import { SubmissionList } from "./submissions.js"
import { LocationTypeChoices } from "./urbandweller.js"

const container = document.querySelector('#container')


const render = async () => {
    const jeanOwnershipHTML = OwnJeanChoices()
    const locationsHTML = await LocationTypeChoices()
    const buttonHTML = await saveSubmission()
    const submissionListHTML = await SubmissionList()

    container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationsHTML}
    ${buttonHTML}
    ${submissionListHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)

render()