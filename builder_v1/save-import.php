<?php
	if(isset($_POST['position']) && $_POST['position'] === "export" && !empty($_POST['JSONTemplate'])) {
		header( 'Content-Description: File Transfer' );
		header( 'Content-Type: application/octet-stream' );
		header( 'Content-Disposition: attachment; filename=Template.dvTemp' );
		header( 'Content-Transfer-Encoding: binary' );
		header( 'Connection: Keep-Alive' );
		header( 'Expires: 0' );
		header( 'Cache-Control: must-revalidate, post-check=0, pre-check=0' );
		header( 'Pragma: public' );

		echo $_POST['JSONTemplate'];

	} elseif($_POST['position'] === "import") {
		if (isset($_FILES['templateimport'])) {
			$fileData = file_get_contents($_FILES['templateimport']['tmp_name']);
			$pos = strrpos($_FILES['templateimport']['name'], '.');
			$typeFile = substr($_FILES['templateimport']['name'], $pos);

			if(!$fileData || $typeFile != '.dvTemp') {
				$error = "File can not be open!";
				exit(json_encode(array('error' => $error, 'data' => '')));
			}
			exit(json_encode(array('error' => '', 'data' => $fileData)));
		}
	} else {
		echo "Sorry";
	}
