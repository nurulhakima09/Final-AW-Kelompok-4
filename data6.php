<?php
//setting header to json
header('Content-Type: application/json');

include('koneksi.php');
$query = sprintf("select coalesce(pc.Name ,'Tidak Terkategori') as name ,count(*) as total from uas_aw.product p join adventureworksbaru.product pd  on p.ProductID =pd.ProductID left join adventureworksbaru.productsubcategory sc on pd.ProductSubcategoryID =sc.ProductSubcategoryID left join adventureworksbaru.productcategory pc on sc.ProductCategoryID =pc.ProductCategoryID group by pc.ProductCategoryID");
$result3 = $koneksi->query($query);

$data3 = array();
foreach ($result3 as $row3){
	$data3[] = $row3;
}

$result3 -> close();

print json_encode($data3);
