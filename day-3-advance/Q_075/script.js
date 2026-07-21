const urlInput = document.querySelector("#url") 
const shortenBtn = document.querySelector("#shortenBtn") 
const copyBtn = document.querySelector("#copyBtn") 
const result = document.querySelector("#result") 

let shortUrl = "" 

const isValidUrl = (url) => {

    try {

        new URL(url) 

        return true 

    }

    catch {

        return false 

    }

} 

const generateCode = () => {

    return Math.random()
        .toString(36)
        .substring(2, 8) 

} 

const shortenUrl = () => {

    const originalUrl = urlInput.value.trim() 

    if (!isValidUrl(originalUrl)) {

        result.textContent = "Enter a valid URL." 
        shortUrl = "" 
        return 

    }

    shortUrl = `https://short.ly/${generateCode()}` 

    result.innerHTML = `
        Original URL:
        <br>
        ${originalUrl}
        <br><br>
        Short URL:
        <br>
        ${shortUrl}
    ` 

} 

const copyUrl = async () => {

    if (!shortUrl) {

        alert("Generate a short URL first.") 
        return 

    }

    try {

        await navigator.clipboard.writeText(shortUrl) 

        alert("Short URL copied.") 

    }

    catch {

        alert("Copy failed.") 

    }

} 

shortenBtn.addEventListener("click", shortenUrl) 

copyBtn.addEventListener("click", copyUrl) 