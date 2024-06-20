const scriptURL = 'https://script.google.com/macros/s/AKfycbxYo8qFaLsSp1wCD_aKzTqlzeRS3qQ1LvLCUSuZrCxo-uzQ4beruYIaAT4isAy4Xl34CA/exec'
const form = document.forms['contact-form']
const submitButton = form.querySelector('button[type="submit"]')
const noteLabel = document.querySelector('.reg label')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    // Disable the submit button to prevent multiple submissions
    submitButton.disabled = true
    noteLabel.textContent = "Submitting... Please wait."

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })

        if (response.ok) {
            alert("Thank you! Your form has been submitted successfully.")
            form.reset()  // Reset the form instead of reloading the page
        } else {
            alert("Oops! There was a problem with your submission.")
        }
    } catch (error) {
        console.error('Error!', error.message)
        alert("An error occurred. Please try again.")
    } finally {
        // Re-enable the submit button after submission
        submitButton.disabled = false
        noteLabel.textContent = "Please wait a few seconds after submitting the form."
    }
})
