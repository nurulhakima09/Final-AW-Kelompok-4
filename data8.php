<?php
//setting header to json
header('Content-Type: application/json');

include('koneksi.php');
$query = sprintf("select p.Name , fp.OrderQty as jumlah from fakta_penjualan fp join product p  on fp.ProductID  =p.ProductID  group by OrderQty desc limit 5");
$result3 = $koneksi->query($query);

$data3 = array();
foreach ($result3 as $row3){
	$data3[] = $row3;
}

$result3 -> close();

print json_encode($data3);
