const btn=document.getElementById("btn")
const textTo=document.getElementById("textTo")
const textDo=document.getElementById("textDo")
const translate=document.getElementById("translate")
const text=document.getElementById("text")

const langue=[
        { code: "en", name: "English" },
        { code: "es", name: "Spanish" },
        { code: "fr", name: "French" },
        { code: "de", name: "German" },
        { code: "zh", name: "Chinese" },
        { code: "ja", name: "Japanese" },
        { code: "ar", name: "Arabic" },
        { code: "ru", name: "Russian" },
        { code: "hi", name: "Hindi" },
        { code: "bn", name: "Bengali" },
        { code: "pt", name: "Portuguese" },
        { code: "it", name: "Italian" },
        { code: "ko", name: "Korean" },
        { code: "tr", name: "Turkish" },
        { code: "ur", name: "Urdu" },
        { code: "fa", name: "Persian" },
        { code: "id", name: "Indonesian" },
        { code: "ms", name: "Malay" },
        { code: "th", name: "Thai" },
        { code: "vi", name: "Vietnamese" },
        { code: "sw", name: "Swahili" },
        { code: "pl", name: "Polish" },
        { code: "uk", name: "Ukrainian" },
        { code: "uz", name: "Uzbek" },
        { code: "ro", name: "Romanian" },
        { code: "nl", name: "Dutch" },
        { code: "sv", name: "Swedish" },
        { code: "no", name: "Norwegian" },
        { code: "fi", name: "Finnish" },
        { code: "hu", name: "Hungarian" },
        { code: "cs", name: "Czech" },
        { code: "el", name: "Greek" },
        { code: "he", name: "Hebrew" },
        { code: "bg", name: "Bulgarian" },
        { code: "da", name: "Danish" },
        { code: "sk", name: "Slovak" },
        { code: "sl", name: "Slovenian" },
        { code: "sr", name: "Serbian" },
        { code: "hr", name: "Croatian" },
        { code: "ta", name: "Tamil" },
        { code: "te", name: "Telugu" },
        { code: "ml", name: "Malayalam" },
        { code: "kn", name: "Kannada" },
        { code: "mr", name: "Marathi" },
        { code: "gu", name: "Gujarati" },
        { code: "pa", name: "Punjabi" },

];


function langueTrans(){
    langue.map(e =>{
        option=document.createElement("option");
        option.value=e.code;
        option.textContent=e.name;

        text.appendChild(option);
    })
}
langueTrans()


function LangueTrans(){
    langue.map(e =>{
        option=document.createElement("option");
        option.value=e.code;
        option.textContent=e.name;

        translate.appendChild(option);
    })
}
LangueTrans()


btn.addEventListener("click", async()=>{
    if(textTo.value.trim().length<1){
        alert("biror narsa yoz!!")
    }else{
        const response=await fetch(`https://api.mymemory.translated.net/get?
            q=${textTo.value}&langpair=${text.value}|${translate.value}`);
            const data=await response.json();
            textDo.textContent=data.responseData.translatedText;
    }
})


