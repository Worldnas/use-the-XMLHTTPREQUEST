<?php
if(isset($_GET['name']))
{	
 $temp=$_GET['name'];
/*if($temp=="alireza")
	{
		echo('works');
	};
	else
	{
		echo('not working');
	};*/
	$db=mysql_connect('localhost',"root","")
	if(!$db)
	{
		die()
	}
	else
	{
		mysql_select_db('users');
		$sql="select * form user where username='".$temp."'"
		$result=mysql_query($sql);
		if(mysql_num_rows($result)>0)
		{
			echo("exist")
		}
		else
		{
			echo("no")
		}
	}
};

?>