<!DOCTYPE html>
<html lang="en">
<head>

    <base href="{{ url()->full() }}/" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Homepage</title>

    <!-- Bootstrap core CSS -->
    <link href="{{ asset('vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">


</head>

<body>

<div id="root">
</div>

@viteReactRefresh
@vite('resources/js/app.jsx')
</body>
</html>
