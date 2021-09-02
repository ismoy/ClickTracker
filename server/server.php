
<?php
/*INICIO CAMBIO DATOS SERVIDOR */
/*SOLO TIENEN QUE CAMBIAR ESOS DATOS POR LO DE SU SERVIDOR
 SI CAMBIAN EL NOMBRE DE LA BASE DE DATOS 
HAY QUE CAMBIARLO AQUI TAMBIEN EN CASO CONTRARIO DEJARLO 
PERO LOS RESTOS SI O SI HAY QUE CAMBIARLO
*/
$host = "localhost";
$port = "3306";
$dbname = "clicktrackerdb";
$user = "kame";
$pwd = "1234";
/*FIN DE CAMBIO DATOS SERVIDOR */

$queryInterview = "Insert into tb_interview(interviewId, name,email) values(?,?,?)";

$queryQuestion = "Insert into tb_question(question,answer,interviewId) values(?,?,?)";
$queryTrack = "Insert into tb_tracker(button,value,screen,interviewId,time) values(?,?,?,?,?)";


$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if ($contentType === "application/json") {

    $content = trim(file_get_contents("php://input"));
    $decoded = json_decode($content, true);
    try {

        $id = uniqid();

        $decoded["interviewId"] = $id;
        $db = new PDO('mysql:host=' . $host . ';port=' . $port . ';dbname=' . $dbname, $user, $pwd, array(PDO::ATTR_PERSISTENT => false));
        $smtp = $db->prepare($queryInterview);
        $smtp->execute([$id, $decoded["name"], $decoded["email"]]);
        $smtp = null;

        foreach ($decoded["questions"] as $key) {
            $smtp = $db->prepare($queryQuestion);
            $smtp->execute([$key["question"], $key["answer"], $id]);
        }
        $smtp = null;
        /** cmabio */
        if (!empty($decoded["tracks"])) {
            foreach ($decoded["tracks"] as $key) {
                $smtp = $db->prepare($queryTrack);
                $smtp->execute([$key["name"], $key["value"], $key["screen"], $id, $key["time"]]);
            }
            $smtp = null;
        }
        $db = null;
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}
?>

