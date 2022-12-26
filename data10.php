<?php
//setting header to json
header('Content-Type: application/json');

include('koneksi.php');
$query = sprintf("select tahun, SUM(fp.SubTotal) as amount FROM fakta_penjualan fp JOIN time t ON fp.time_id = t.time_id GROUP BY t.tahun");
$result3 = $koneksi->query($query);

$data3 = array();
foreach ($result3 as $row3){
	$data3[] = $row3;
}

$result3 -> close();

print json_encode($data3);
