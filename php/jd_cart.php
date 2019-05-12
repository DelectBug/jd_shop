<?php
 include "conn.php";

    $id=$_GET['sid'];
	
	$result=mysql_query("select * from jd_data where sid=$id ");
	
	$detaildata=mysql_fetch_array($result,MYSQL_ASSOC);
	
	echo json_encode($detaildata);

?>