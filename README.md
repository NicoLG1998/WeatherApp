<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;700;900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Weather App</title>
</head>

<!--------------------------->

<body>
    <!--Buscador de Ubicación-->
    <div class="Contenedor">
        <div class="search">
            <i class="fa-solid fa-location-dot"></i>
            <input type="text" placeholder="Ingresa tu Ubicación">
            <button class="fa-solid fa-magnifying-glass"></button>
        </div>

        <!--Error-->
        <div class="not-found">
            <img src="imagenes/404.png">
            <p>Oops! No hemos encontrado tu ubicación :/ </p>
        </div>

        <!--Resultado de temperatura y descripción-->
        <div class="Clima">
            <img src="">
            <p class="Temperatura"></p>
            <p class="Descripcion"></p>
        </div>

        <!--Detalles de la Temperatura-->
        <div class="Detalles-Clima">

            <div class="Humedad">
                <i class="fa-solid fa-water"></i>
                <div class="text">
                   <span></span>
                    <p>Humedad</p> 
                </div>
            </div>

            <div class="Viento">
                <i class="fa-solid fa-wind"></i>
                <div class="text">
                    <span></span>
                     <p>Viento</p> 
                </div>
            </div>
        </div>
    </div>
<!--------------------------->
    <script src="https://kit.fontawesome.com/7c8801c017.js" crossorigin="anonymous"></script>
    <script src="index.js"></script>
</body>
</html>
