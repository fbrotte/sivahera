<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}">
        <title>SIVAHERA</title>
        <link rel="icon" href="img/ico.png" type="image/png">
        <link href=" {{ mix('css/app.css') }}" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Allura&display=swap" rel="stylesheet">
    </head>
    <body>
        <div id="app">
            <app></app>
        </div>
        <script src="{{ mix('js/bootstrap.js') }}"></script>
        <script src="{{ mix('js/app.js') }}"></script>
        <script src="https://kit.fontawesome.com/e5ba52c6a0.js" crossorigin="anonymous"></script>
    </body>
    </html>