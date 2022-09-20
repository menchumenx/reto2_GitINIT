
**Pasos para CREAR UN REPOSITORIO DESDE REMOTO**

    1.Accedera nuestra cuenta de GitHub y creamos un nuevo Repositorio
    2.Le damos el nombre que queramos
    3.Añadimos el archivo Readme.md
    4.Clonamos el repositorio en Local con el comando GIT CLONE y el 
    códico HTTPS que nos proporciona git.

    git clone https://github.com/menchumenx/miPrimerRepositorio.git
    
    Es importante estar bien posicionado en la carpeta que queramos clonar el reposditorío antes de eejecutar el comando anterior.

**Pasos para CREAR UN REPOSITORIO DESDE LOCAL**

    1. Cremaos un proyecto node previo a la creación de nuestro repositorio.
    2. Ubicados en la carpeta de este proyecto, ya sea desde la terminal de visual, como desde gitBash ejecuntamos el siguiente comando:

        git init

    3. Crea un nuevo repositorio en remoto que se llame igual que el que hemos creado en local.
    4. Enlaza ambos repositorios usando la linea de comando que te proporciona GitHub para enlazar dos repositorios.
        git remote add origin https://github.com/menchumenx/reto2_GitINIT.git
        git branch -M main
        git push -u origin main
    

