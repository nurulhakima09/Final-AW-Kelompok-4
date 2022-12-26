<?php
//setting header to json
header('Content-Type: application/json');

include('koneksi.php');
$query = sprintf("select p.Title  as jabatan,round((count(p.Title)*100)/pg.total) as persen from uas_aw.pegawai p cross join (select count(*) as total from pegawai) pg group by p.Title order by count(*) desc limit 5");
$result3 = $koneksi->query($query);

$data3 = array();
foreach ($result3 as $row3){
	$data3[] = $row3;
}

$result3 -> close();

print json_encode($data3);
