import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="blog"
export default class extends Controller {
  static targets = [ "formInput", "titleHolder","titleResponse, tokenForm, fetchButton" ]

  update() {
    this.titleHolderTarget.textContent = this.formInputTarget.value
  }

  fetcher() {
    let url = "https://api.nlp-api.com/v1/ner"
    let data = {
      "api_token":"BFMnNGHK7elJVo7ShUG52UO3w06hrzhFPQsW40q6",
      "text": String(this.titleHolderTarget.textContent = this.formInputTarget.value)
    }
    console.log(data)

    fetch(url+"/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    }).then(response => response.json())
      .then(data => {
        this.titleResponseTarget.textContent = data
        console.log(data)
      })
  }
}
