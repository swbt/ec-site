<?php
require ('dbconnect.php');

session_start ();

if (! empty ( $_POST )) {

	if ($_POST ['mail'] != '' && $_POST ['pass'] != '') {
		$sql = sprintf ( 'SELECT * FROM users WHERE mail="%s" AND pass="%s"', mysqli_real_escape_string ( $db, $_POST ['mail'] ), mysqli_real_escape_string ( $db, sha1 ( $_POST ['pass'] ) ) );
		$record = mysqli_query ( $db, $sql ) or die ( mysqli_error ( $db ) );
		if ($table = mysqli_fetch_assoc ( $record )) {

			// ログイン成功
			header ( 'Location: NewFile.html' );
			exit ();
		} else {
			$error ['login'] = 'failed';
		}
	} else {
		$error ['login'] = 'blank';
	}
}

?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex,nofollow">
<meta http-equiv="refresh" content="240; url=https://www.google.co.jp">
<title>loginform</title>
<style>
body {
	font-family: 'Playfair Display', '本明朝-Book 新がな';
}

* {
	text-align: center;
}

p {
	font-size: 25px;
	display: inline;
}

input {
	border-radius: 2px;
}
</style>
</head>
<body>
	<script>
		var Login = {};
		Login.doLogin = function doLogin(loginForm) {

			if (loginForm.usermail.value == '') {
				return Login.doError('メールアドレスを入力してください。');
			}
			if (loginForm.password.value == '') {
				return Login.doError('パスワードを入力してください。');
			}

			return true;
		}

		Login.doError = function doError(msg) {
			alert(msg);
			return false;
		}
	</script>
	<h1>ログインフォーム</h1>
	<form id="loginForm" action="" method="post"
		onsubmit="return Login.doLogin(this)">
		<p>
			UserMail : <input type="text" name="usermail"
				value="<?php echo htmlspecialchars($_POST['mail']); ?>" />
		</p>
		<p>
			Password : <input type="password" name="password"
				value="<?php echo htmlspecialchars($_POST['pass']); ?>" />
		</p>
		<p>
			<input type="submit" value="Login" />
		</p>

		<?php if(!empty($error['login']) && $error['login'] == 'blank'): ?>
			<p>
			<font color="red">* メールアドレスとパスワードをご記入ください</font>
		</p>
		<?php endif; ?>
		<?php if(!empty($error['login']) && $error['login'] == 'failed'): ?>
			<p>
			<font color="red">* ログインに失敗しました。正しくご記入ください。</font>
		</p>
		<?php endif; ?>
	</form>
</body>
</html>
