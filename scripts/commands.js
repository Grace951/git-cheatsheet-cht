var commands = [
	{
		left: "workspace",
		right: "index",
		direction: "status",
		cmd: "status",
		tags: 'Basic Snapshotting',
		docs: "顯示在工作目錄中與本地版本庫最新版本不同的(文件)路徑、與 index 不同的(文件)路徑以及未加入 git 的(文件)路徑。"
	}, {
		left: "workspace",
		right: "index",
		direction: "status",
		cmd: "diff",
		tags: 'Basic Snapshotting, Inspection and Comparison,Patching',
		docs: "顯示未加入 index 的修改內容"
	}, {
		left: "workspace",
		right: "local_repo",
		direction: "status",
		cmd: "diff <commit or branch>",
		tags: 'Basic Snapshotting,Inspection and Comparison,Patching',
		docs: "將當前工作目錄與指定的 <commit> 進行比較。可以使用「HEAD」來指定與最新版本進行比較；也可以使用分支的名稱，與另外一個分支進行比較。"
	},

	{
		left: "workspace",
		right: "index",
		direction: "up",
		cmd: "add <file... or dir...>",
		tags: 'Basic Snapshotting',
		docs: "將工作目錄中的新文件或修改的文件添加到 index，以供稍后提交至版本庫。使用「add --interactive」可以交互式地添加文件。"
	}, {
		left: "workspace",
		right: "index",
		direction: "up",
		cmd: "add -u",
		tags: 'Basic Snapshotting',
		docs: "將工作目錄中有修改的文件（不包含新文件）添加至 index。相當於在提交時使用「git commit -a」命令所添加的文件。"
	}, {
		left: "workspace",
		right: "index",
		direction: "up",
		cmd: "rm <file...>",
		tags: 'Basic Snapshotting',
		docs: "從工作目錄和 index 中移除指定文件。"
	}, {
		left: "workspace",
		right: "index",
		direction: "up",
		cmd: "mv <file...>",
		tags: 'Basic Snapshotting',
		docs: "在工作目錄和 index 中移動指定文件。"
	},

	{
		left: "workspace",
		right: "local_repo",
		direction: "up",
		cmd: "commit -a -m 'msg'",
		tags: 'Basic Snapshotting',
		docs: "提交所有自上次提交以來修改過的文件（不包括未加入 git 追蹤的文件）並從 index 中移除工作目錄裡已經刪除的文件。"
	},

	{
		left: "workspace",
		right: "index",
		direction: "dn",
		cmd: "checkout <file...> or <dir...>",
		tags: 'Branching and Merging',
		docs: "更新工作目錄中的指定文件或目錄，覆蓋所有本地修改。『不』切換分支。"
	},

	{
		left: "index",
		right: "index",
		direction: "status",
		cmd: "reset HEAD <file1> <file2> ...",
		tags: 'Basic Snapshotting',
		docs: "將指定文件從預備下次提交的快照中移除（不影響工作目錄下正在進行的修改）。"
	},

	{
		left: "index",
		right: "local_repo",
		direction: "dn",
		cmd: "reset --soft HEAD^",
		tags: 'Basic Snapshotting',
		docs: "撤銷上次提交，將其內容放入 index 快照。"
	},

	{
		left: "workspace",
		right: "local_repo",
		direction: "dn",
		cmd: "reset --hard",
		tags: 'Basic Snapshotting',
		docs: "清空工作目錄中的所有修改和 index 快照，與本地版本庫同步。" +
			"警告：工作目錄中所有未提交的修改都將丟失。通常用於合並沖突而打算重新開始的情況。添加「ORIG_HEAD」參數可以撤銷最近一次合並操作及之后的所有改動。"
	},

	{
		left: "workspace",
		right: "local_repo",
		direction: "dn",
		cmd: "checkout <branch>",
		tags: 'Branching and Merging',
		docs: "更新 index 和工作目錄以切換到指定分支，並且更新 HEAD 到此分支。"
	}, {
		left: "workspace",
		right: "local_repo",
		direction: "dn",
		cmd: "checkout -b <name of new branch>",
		tags: 'Branching and Merging',
		docs: "創建並切換到一個新的分支。"
	},

	{
		left: "workspace",
		right: "local_repo",
		direction: "dn",
		cmd: "merge <commit or branch>",
		tags: 'Branching and Merging',
		docs: "將 <branch name> 中的內容合並到當前分支。使用 --no-commit 參數可以防止合並之后自動提交，以便審查合並結果之后再進行提交。"
	},

	{
		left: "workspace",
		right: "local_repo",
		direction: "dn",
		cmd: "rebase <upstream>",
		tags: 'Patching',
		docs: "撤銷自從 <upstream> 分支以來的所有修改提交（commit），然后將這些提交逐個應用於 <upstream> 的 HEAD 上。"
	},

	{
		left: "workspace",
		right: "local_repo",
		direction: "dn",
		cmd: "cherry-pick <sha>",
		tags: 'Patching',
		docs: "將指定 commit 中的修改合並到當前分支。"
	}, {
		left: "workspace",
		right: "local_repo",
		direction: "dn",
		cmd: "revert <sha>",
		docs: "撤銷 <sha> 中的修改內容並將結果提交。此項操作需要工作目錄中干淨無修改。"
	},

	{
		left: "index",
		right: "local_repo",
		direction: "status",
		cmd: "diff --cached [<commit>]",
		tags: 'Basic Snapshotting,Inspection and Comparison,Patching',
		docs: "查看 index 中的修改內容和最新提交的區別。也可以指定某個提交進行比較。"
	}, {
		left: "index",
		right: "local_repo",
		direction: "up",
		cmd: "commit -m 'msg'",
		tags: 'Basic Snapshotting',
		docs: "將 index 中的修改內容提交，並附上對此次修改的描述。"
	}, {
		left: "index",
		right: "local_repo",
		direction: "up",
		cmd: "commit --amend",
		tags: 'Basic Snapshotting',
		docs: '將當前 index 中的修改內容合並到上一次提交中。'
	},

	{
		left: "local_repo",
		right: "local_repo",
		direction: "status",
		cmd: "log",
		tags: 'Branching and Merging, Inspection and Comparison',
		docs: '查看提交歷史記錄，最新的排在最頂端。選項：' +
			'--decorate    將分支以及標簽信息顯示在相應的提交旁邊' +
			'--stat        包含文件的增刪改信息' +
			'--author=foo  隻顯示指定作者的提交' +
			'--after="MMM DD YYYY" 如 "Jun 20 2008"，隻顯示某個日期之后的提交' +
			'--before="MMM DD YYYY" 隻顯示某個日期之前的提交' +
			'--merge       隻顯示跟當前合並沖突有關的提交'
	}, {
		left: "local_repo",
		right: "local_repo",
		direction: "status",
		cmd: "diff <commit> <commit>",
		tags: 'Basic Snapshotting, Inspection and Comparison,Patching',
		docs: "查看任意兩次提交之間的區別。"
	}, {
		left: "local_repo",
		right: "local_repo",
		direction: "status",
		cmd: "branch",
		tags: 'Branching and Merging',
		docs: "列出所有分支。選項 -r 指定查看遠端的分支，選項 -a 則同時查看遠端和本地所有分支。"
	}, {
		left: "local_repo",
		right: "local_repo",
		direction: "status",
		cmd: "branch -d <branch>",
		tags: 'Branching and Merging',
		docs: "刪除指定分支。使用 -D 選項則強制刪除。"
	}, {
		left: 'local_repo',
		right: 'remote_repo',
		direction: 'dn',
		cmd: "branch --track <new> <remote/branch>",
		tags: 'Branching and Merging',
		docs: '創建一個映射到指定遠端分支的本地分支。'
	},

	{
		left: "workspace",
		right: "remote_repo",
		direction: "dn",
		cmd: "clone <repo>",
		tags: 'Creating Projects',
		docs: "下載 <repo> 指定的倉庫，並將工作目錄簽出為 master 分支的最新版本。"
	}, {
		left: "workspace",
		right: "remote_repo",
		direction: "dn",
		cmd: "pull <remote> <refspec>",
		tags: 'Sharing and Updating',
		docs: "獲取遠端倉庫中的指定版本，並將其合並到當前分支。"
	}, {
		left: "workspace",
		right: "remote_repo",
		direction: "dn",
		cmd: "reset --hard <remote>/<branch>",
		tags: 'Basic Snapshotting',
		docs: "將本地工作目錄重置為遠端分支版本。使用 'reset --hard origin/master' 會拋棄所有本地 master 分支上的提交，可以用於合並失敗時重新開始。"
	}, {
		left: "local_repo",
		right: "remote_repo",
		direction: "dn",
		cmd: "fetch <remote> <refspec>",
		tags: 'Sharing and Updating',
		docs: "從遠端倉庫下載所有內容（包括分支和標簽）。"
	}, {
		left: "local_repo",
		right: "remote_repo",
		direction: "up",
		cmd: "push",
		tags: 'Sharing and Updating',
		docs: '將所有本地分支的修改推送到遠端倉庫上的相應分支，但不包括那些從未推送到遠端倉庫過的分支。'
	}, {
		left: "local_repo",
		right: "remote_repo",
		direction: "up",
		cmd: "push <remote> <branch>",
		tags: 'Sharing and Updating',
		docs: "將一個新的（或現有）分支推送到遠端倉庫"
	}, {
		left: "local_repo",
		right: "remote_repo",
		direction: "up",
		cmd: "push <remote> <branch>:<branch>",
		tags: 'Sharing and Updating',
		docs: "將一個新的（或現有）分支推送到遠端倉庫的不同名分支上。"
	},

	{
		left: "remote_repo",
		right: "remote_repo",
		direction: "status",
		cmd: "branch -r",
		tags: 'Branching and Merging',
		docs: "列出遠端倉庫的所有分支。"
	},

	{
		left: "remote_repo",
		right: "remote_repo",
		direction: "status",
		cmd: "push <remote> :<branch>",
		tags: 'Sharing and Updating',
		docs: "刪除遠端倉庫的指定分支。"
	},

	{
		left: "workspace",
		right: "workspace",
		direction: "dn",
		cmd: "clean",
		tags: 'Administration',
		docs: '清除當前目錄以及所有層級子目錄中未加入版本控制的文件。'
	},

	{
		left: "stash",
		right: "workspace",
		direction: "dn",
		cmd: "stash save [<msg>]",
		tags: 'Branching and Merging',
		docs: '將目前的修改內容保存到一個新的 stash 中。運行 "git reset --hard" 可以清除之。 ' +
			'<message> 是可選的，事實上如果隻想立刻做個快照的話 "save" 也可以省略。'
	}, {
		left: "stash",
		right: "workspace",
		direction: "up",
		cmd: "stash apply [<name>]",
		tags: 'Branching and Merging',
		docs: "從指定的 stash 記錄中恢復修改到當前工作目錄。默認使用最后一次保存的 stash 記錄。"
	}, {
		left: "stash",
		right: "workspace",
		direction: "up",
		cmd: "stash pop",
		tags: 'Branching and Merging',
		docs: '應用最后一次保存的（或指定的） stash 記錄並刪除 stash 對它的記錄。'
	}, {
		left: "stash",
		right: "stash",
		direction: "status",
		cmd: "stash list",
		tags: 'Branching and Merging',
		docs: "列出目前所有保存的 stash 記錄。"
	}, {
		left: "stash",
		right: "stash",
		direction: "status",
		cmd: "stash show [<stash>]",
		tags: 'Branching and Merging',
		docs: "以 diff 顯示指定 stash 記錄中記錄的修改內容。未指定 <stash> 的話則採用最后一條 stash 記錄。"
	}, {
		left: "stash",
		right: "stash",
		direction: "status",
		cmd: "stash drop [<name>]",
		tags: 'Branching and Merging',
		docs: "刪除 stash 列表中的一條記錄。未指定 <stash> 的話則刪除最新一條。"
	}, {
		left: "stash",
		right: "stash",
		direction: "status",
		cmd: "stash clear",
		tags: 'Branching and Merging',
		docs: "清除所有 stash 記錄。此項操作不可逆。"
	}, {
		left: "stash",
		right: "local_repo",
		direction: "up",
		cmd: "stash branch <branchname> [<stash>]",
		tags: 'Branching and Merging',
		docs: '根據指定的 stash 記錄創建一個新的分支，新的分支起點為創建該 stash 記錄時所在的提交，並將該 stash 記錄中的修改內容應用於' +
			'工作目錄和 index。如果操作成功並且 <stash> 的格式為 stash@{<revision>}，則一並刪除此 stash 記錄。' +
			'未指定 <stash> 的話則採用最新一條記錄。\r' +
			'當你在某個分之上執行了 stash save 之后此分支進行了太多修改提交導致嚴重沖突無法合並回去的時候，這條命令就非常有用了。' +
			'因為新的恢復操作會應用在創建 stash 記錄時的提交基礎上，所以不會產生任何沖突。'
	}

];
