<?php
//setting header to json
header('Content-Type: application/json');

include('koneksi.php');
$query = sprintf("select v.Name , round(sum(fp.LineTotal))as jumlah from fakta_purchasing fp join vendor v  on fp.VendorID   =v.VendorID  group by LineTotal desc limit 5");
$result3 = $koneksi->query($query);

$data3 = array();
foreach ($result3 as $row3){
	$data3[] = $row3;
}

$result3 -> close();

print json_encode($data3);
