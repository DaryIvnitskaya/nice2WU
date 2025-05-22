<?php
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    $errors = array(); // контейнер для ошибок
    // проверяем корректность полей
	if($_POST['form_email'] == "")   $errors[] = "<span class='error'>Ваш e-mail не заполнено</span>";
    if($_POST['form_name'] == "")    $errors[] = "<span class='error'>Ваше имя не заполнено</span>";
    if($_POST['form_message'] == "") $errors[] = "<span class='error'>Текст сообщения не заполнен</span>";
 
    // если форма без ошибок
    if(empty($errors)){     
        // собираем данные из формы
        $message  = "Имя пользователя: " . $_POST['form_name'] . "<br/>";
        $message .= "E-mail пользователя: " . $_POST['form_email'] . "<br/><br/>";
        $message .= "Текст письма: " . $_POST['form_message'];      
        send_mail($message); // отправим письмо
        // выведем сообщение об успехе
        $msg_box = "<span class='success'>Спасибо за обращение, сообщение успешно отправлено!</span>";

    }else{
        // если были ошибки, то выводим их
        $msg_box = "";
        foreach($errors as $one_error){
            $msg_box .= "$one_error";
        }
    }
 
    // делаем ответ на клиентскую часть в формате JSON
    echo json_encode(array(
        'result' => $msg_box
    ));
     
     
    // функция отправки письма
    function send_mail($message){
        // почта, на которую придет письмо
        $mail_to = "info@liteteam.ru,liteteam.web.prod@gmail.com,dariya.yahotintceva@gmail.com"; 
        // тема письма
        $subject = "Письмо с обратной связи";
         
        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: liteteam.ru <no-reply@test.com>\r\n"; // от кого письмо
         
        // отправляем письмо 
        mail($mail_to, $subject, $message, $headers);
    }
     
?>