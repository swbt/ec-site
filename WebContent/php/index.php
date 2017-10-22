<?php
ob_start();
// ここから、register.phpと同じく
session_start();
if( isset($_SESSION['user']) != "") {
	header("Location: home.php");
}
include_once 'dbconnect.php';
// ここまで、register.phpと同じく
?>

<?php
if(isset($_POST['login'])) {

	$email = $mysqli->real_escape_string($_POST['email']);
	$password = $mysqli->real_escape_string($_POST['password']);

	// クエリの実行
	$query = "SELECT * FROM users WHERE email='$email'";
	$result = $mysqli->query($query);
	if (!$result) {
		print('クエリーが失敗しました。' . $mysqli->error);
		$mysqli->close();
		exit();
	}

	// パスワード(暗号化済み）とユーザーIDの取り出し
	while ($row = $result->fetch_assoc()) {
		$db_hashed_pwd = $row['password'];
		$user_id = $row['user_id'];
	}

	// データベースの切断
	$result->close();

	// ハッシュ化されたパスワードがマッチするかどうかを確認
	if (password_verify($password, $db_hashed_pwd)) {
		$_SESSION['user'] = $user_id;
		header("Location: home.php");
		exit;
	} else { ?>
		<div class="alert alert-danger" role="alert">メールアドレスとパスワードが一致しません。</div>
	<?php }
} ?>

<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8" />
<meta name="robots" content="noindex,nofollow">
<meta http-equiv="refresh" content="240; url=https://www.google.co.jp">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ログイン機能</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css">
</head>
</head>
<body>
<div class="col-xs-6 col-xs-offset-3">

<form method="post">
	<h1>ログインフォーム</h1>
	<div class="form-group">
		<input type="email"  class="form-control" name="email" placeholder="メールアドレス" required />
	</div>
	<div class="form-group">
		<input type="password" class="form-control" name="password" placeholder="パスワード" required />
	</div>
	<button type="submit" class="btn btn-default" name="login" onclick="location.href='movie.html'">ログインする</button>
	<a href="register.php">会員登録はこちら</a>
</form>

</div>
</body>
</html>