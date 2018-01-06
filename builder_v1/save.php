<?php

	/* CONFIG */
	
	$pathToAssets = array("elements/bootstrap", "elements/css", "elements/fonts", "elements/images", "elements/js", "elements/mail", "elements/video", "elements/assets");
	
	$filename = "tmp/website.zip"; //use the /tmp folder to circumvent any permission issues on the root folder

	/* END CONFIG */
		

	$zip = new ZipArchive();
	
	$zip->open($filename, ZipArchive::CREATE);
	
	
	//add folder structure
	
	foreach( $pathToAssets as $thePath ) {
	
		// Create recursive directory iterator
		$files = new RecursiveIteratorIterator(
	    	new RecursiveDirectoryIterator( $thePath ),
	    	RecursiveIteratorIterator::LEAVES_ONLY
		);
	
		foreach ($files as $name => $file) {
		
			if( $file->getFilename() != '.' && $file->getFilename() != '..' ) {
	
	    		// Get real path for current file
	    		$filePath = $file->getRealPath();
	    
	    		$temp = explode("/", $name);
	    
	    		array_shift( $temp );
	    
	    		$newName = implode("/", $temp);
	
	    		// Add current file to archive
	    		$zip->addFile($filePath, $newName);
	    	
	    	}
	    
		}
	
	}
	
	foreach( $_POST['pages'] as $page=>$content ) {
		$seotitle = "/\<title\>(.*)\<\/title\>/i";
		$content = preg_replace($seotitle, "<title>".$_POST['title']."</title>", $content);
		$seodisc = '/\<meta name="description" content="helpme landing page template">/i';
		$desc = Trim(stripslashes($_POST['seodisc']));
		$content = preg_replace($seodisc, '<meta name="description" content="'.$desc.'">', $content);
		
		$seokwd = '/\<meta name="keywords" content="helpme,charity, landing page">/i';
		$kwd = Trim(stripslashes($_POST['seokeyword']));
		$content = preg_replace($seokwd, '<meta name="keywords" content="'.$kwd.'">', $content);
		
		$seoauthor = '/\<meta name="author" content="DesignsVilla">/i';
		$author = Trim(stripslashes($_POST['seoauthor']));
		$content = preg_replace($seoauthor, '<meta name="author" content="'.$author.'">', $content);
		
		$zip->addFromString($page.".html", $_POST['doctype']."\n".stripslashes($content));
		
		//echo $content;
	
	}
	
	//$zip->addFromString("testfilephp.txt" . time(), "#1 This is a test string added as testfilephp.txt.\n");
	//$zip->addFromString("testfilephp2.txt" . time(), "#2 This is a test string added as testfilephp2.txt.\n");
	
	$zip->close();
	
	
	$yourfile = $filename;
	
	$file_name = basename($yourfile);
	
	header("Content-Type: application/zip");
	header("Content-Transfer-Encoding: Binary");
	header("Content-Disposition: attachment; filename=$file_name");
	header("Content-Length: " . filesize($yourfile));
	
	readfile($yourfile);
	
	unlink('website.zip');
	
	exit;
?>