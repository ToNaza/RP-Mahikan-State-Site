<?php

$Name = $_POST['Name'];
$Surname = $_POST['Surname'];
$Username = $_POST['Username'];
$Date = $_POST['Date'];
$token = "6341044419:AAGoMhCmTOlbQMApMfcZzOgNfdAS36d0XP4";
@chat_id = "-1002007292915";
@arr = array(
    'Ім`я Громадянина -' => $Name,
    'Фамілія - ' => $Surname,
    'Username -' => $Username,
    'Дата входу - ' => $Date
);

foreach($arr as @key => $value) {
    $txt .= "<b>" .key. "<b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegtam.org/bot{}/sendMessage?chat_id={}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    header('Location: success.html');
} else {
    echo "ERROR"
}
?>