
<?php

$host = "localhost";
$port = "3306";
$dbname = "clicktrackerdb";
$user = "kame";
$pwd = "1234";

$queryInterview = "Insert into tb_interview(interviewId, name,email) values(?)";
$queryQuestion = "Insert into tb_question(question,answer,interviewId) values(?,?,?)";
$queryTrack = "Insert into tb_tracker(button,value,screen,interviewId) values(?,?,?,?)";


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
        foreach ($decoded["tracks"] as $key) {
            $smtp = $db->prepare($queryTrack);
            $smtp->execute([$key["button"], $key["value"], $key["screen"], $id]);
        }
        $smtp = null;
        $db = null;
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
    $reply = json_encode($decoded);

    header("Content-Type: application/json; charset=UTF-8");
    echo $reply;
    $reply;
}
?>


