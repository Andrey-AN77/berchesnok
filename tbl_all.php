<?php

	include_once('db.php');
	
	$sql = "SELECT * FROM `order`";
	$params = Array();
	
	try{
		$res = dbQuery($sql,$params);		
		
		$a = $res->fetchAll(PDO::FETCH_ASSOC);
			$arr = Array(
				'result' => true,
				'res' => $a
				);
		
	}
		
	catch(Exception $ex){
		echo $ex->getMessage();
	}
	
	

	
	/*echo '<pre>';
	print_r($a);
	echo '</pre>';*/
	echo '<h1 style="text-align:center">Участники презентации';
	echo '<table border="1" align=center width=800px>';
	echo '<tr><th>ФИО</th><th>Телефон</th><th>Описание</th><th>Дата</th></tr>';

// Цикл для вывода данных
foreach ($a as $row) {
    echo '<tr>';
    echo '<td>' . $row['fio'] . '</td>';
    echo '<td>' . $row['phone'] . '</td>';
    echo '<td>' . $row['descr'] . '</td>';
	echo '<td>' . $row['dt'] . '</td>';
    echo '</tr>';
}

echo '</table>';

echo '<strong style="text-align:center">Итого: '.count($a).' </strong>.';
	
?>