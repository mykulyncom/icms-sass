<!--
	Author:  Sergey Selin
	Website: http://selin.site
	Github:  https://github.com/selinsite
 -->
<?php $core = cmsCore::getInstance(); ?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title><?php $this->title(); ?></title>

	<meta name="description" content="">
	<meta name="author" content="Selin Site">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<link rel="icon" type="image/png" href="img/favicon.ico" />
	<?php $this->addMainCSS("templates/{$this->name}/css/main.css"); ?>
	<?php $this->addMainJS("templates/{$this->name}/js/jquery.js"); ?>
	<!--[if lt IE 9]>
        <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/r29/html5.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/livingston-css3-mediaqueries-js/1.0.0/css3-mediaqueries.min.js"></script>
    <![endif]-->
	<?php $this->head(); ?>
	<meta name="csrf-token" content="<?php echo cmsForm::getCSRFToken(); ?>" />
</head>
<body id="<?php echo $device_type; ?>_device_type">
	
</body>
</html>