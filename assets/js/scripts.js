function darkMode () {
    
    document.getElementById('mode-selector').addEventListener('click', changeMode)
        // Ativa o dark mode
        function changeMode () {
           (function toggleMode () {document.querySelector('body', 'footer', 'button', 'h1').classList.toggle('dark-mode')} ) ()

           changeText()

        }
        // Troca o texto do h1 e button se estiver no dark mode
        function changeText () {
            // constantes dos elementos
            const BODY = document.querySelector('body')
            const h1 = document.getElementById('page-title')
            const button = document.getElementById('mode-selector')

            //Checa se esta no dark mode
            if (BODY.classList.contains('dark-mode')) { button.innerText = 'Light Mode', h1.innerText = 'Dark Mode ON'}
            else {button.innerText = 'Dark Mode', h1.innerText = 'Light Mode ON'}
        }
}
darkMode()