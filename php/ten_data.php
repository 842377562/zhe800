<?php  
    include "conn.php";
    $result=mysql_query("select * from tendata");
    $tenarr=array();
    for ($i=0; $i < mysql_num_rows($result); $i++){
        $tenarr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
    }
    echo json_encode($tenarr);
?>