export class Appglobal{
     scroll_to_element(element) {
        //debugger;
        setTimeout(() => {
            debugger;
            const scrollTo = document.querySelector("#" + element);
            if (scrollTo) {
                scrollTo.scrollIntoView({ block: 'start', inline: 'start',behavior: 'smooth'  });
            }
        }, 100);
    }
}