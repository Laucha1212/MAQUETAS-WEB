<?php
 include('index.html');
  if(isset($_POST['nombre']) && isset($_POST['correo']) && isset($_POST['mensaje'])) {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];
    $para = 'lautaroperezga@gmail.com';
    $asunto = 'Nuevo mensaje de formulario de contacto';
   