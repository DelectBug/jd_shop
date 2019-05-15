<?php
include "conn_register.php";
//1.获取前端传来的做唯一匹配的值
	//判断是否传过来了
	// isset($_POST['submit']):为了提交表单数据到数据同时做检测.
	// echo $_POST['username'];
	if(isset($_POST['username']) || isset($_POST['submit'])){
		$username=$_POST['username'];
		$result=mysql_query("select * from jduser where username='$username'");
		if(mysql_fetch_array($result,MYSQL_ASSOC)){//用户名存在
			echo true;//1 存在
		}else{
			echo false;//空 不存在
		}
	}else{
		exit('非法操作');
	}	
	
	// $query="select * from jd_user where username='$username'";
	// $result=mysql_query($query);
	
	// if(mysql_fetch_array($result)){//如果有值代表用户名存在。
	// 	echo 'false';//有重复
	// }else{
	// 	echo 'true';//没有重复
	// }

	// if(isset($_POST['name']) || isset($_POST['submit'])){
    //     $name=$_POST['name'];
    //     //进行匹配
    //     $result=mysql_query("select * from user where username='$name' ");//where:条件
    //     //如果$resut有结果证明用户名存在，否则不存在
    //     if(!mysql_fetch_array($result,MYSQL_ASSOC)){//用户名不存在
    //         echo true;//1  不存在
    //     }else {
    //         echo false;//空  存在
    //     }
    // }else{
    //     exit('非法操作');//退出并输出内部的字符串
    // }




	
	
	// //2.如果单击注册按钮,按钮的值为注册,将表单的值添加的数据库.
	if(isset($_POST['submit'])){
	 
	   $user=$_POST['username'];//username：表单的名称
	   $pass=md5($_POST['password']);
       $email=$_POST['email'];	
	   $tel=$_POST['tel'];
	// 	//添加语句
	 	mysql_query("insert jduser values(null,'$user','$tel','$pass','$email',NOW())");//NOW():当前的时间
	// 	// $query="insert jduser(sid,username,tel,password,email,time) values(null,'$user','$tel','$pass','$email',NOW())";
	// 	// mysql_query($query);
	 	header('location:http://10.31.163.39/projectname/jd_shop/src/login.html');//页面的跳转
	}

?>